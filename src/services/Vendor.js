const vendorRepo = require("../repositories/Vendor");

exports.createEventPackage = async (userInput) => {
  const {
    numberOfPeople,
    foodPreferences,
    photographyPackage,
    soundSystemPackage,
    budget,
  } = userInput;

  let finalPackage = [];
  let totalCost = 0;
  let selectedVenue;
  let selectedPhotography;
  let selectedSoundSystem;
  let selectedFood = {}; // To store selected food items

  // Fetch and allocate venue
  const venues = await vendorRepo.findVenues(numberOfPeople);
  if (venues.length) {
    selectedVenue = venues[0].services.venue; // Assign selectedVenue within the block
    totalCost += selectedVenue.price;
    if (totalCost > budget) {
      throw new Error("Budget exceeded after allocating the venue.");
    }
    finalPackage.push({
      serviceType: "Venue",
      serviceName: selectedVenue.name,
      vendorName: venues[0].name,
      price: selectedVenue.price,
      venueDetails: {
        name: selectedVenue.name,
        capacity: selectedVenue.capacity,
        amenities: selectedVenue.amenities,
      },
    });
  } else {
    throw new Error("No venue available for the given number of people.");
  }

  // Fetch and allocate food (starters, main dishes, desserts)
  for (let category of ["starters", "mainDishes", "desserts"]) {
    selectedFood[category] = [];
    for (let dish of foodPreferences[category]) {
      const dishes = await vendorRepo.findCatering(category, dish);
      if (dishes.length) {
        const selectedDish = dishes[0].services.catering[category];
        const dishCost = selectedDish.pricePerPerson * numberOfPeople;
        totalCost += dishCost;
        if (totalCost > budget) {
          throw new Error(
            `Budget exceeded after allocating ${category} - ${dish}.`
          );
        }
        selectedFood[category].push(selectedDish); // Store the selected dish for potential upgrades
        finalPackage.push({
          serviceType: "Catering",
          serviceName: selectedDish.dishName,
          vendorName: dishes[0].name,
          price: dishCost,
        });
      } else {
        throw new Error(`No vendor offers ${dish} in ${category}.`);
      }
    }
  }

  // Fetch and allocate photography package
  const photographyPackages = await vendorRepo.findPhotographyPackage(
    photographyPackage
  );
  if (photographyPackages.length) {
    selectedPhotography = photographyPackages[0].services.photography;
    totalCost += selectedPhotography.price;
    if (totalCost > budget) {
      throw new Error("Budget exceeded after allocating photography package.");
    }
    finalPackage.push({
      serviceType: "Photography",
      serviceName: selectedPhotography.packageName,
      vendorName: photographyPackages[0].name,
      price: selectedPhotography.price,
      details: selectedPhotography.description,
    });
  } else {
    throw new Error(`No photography package found for ${photographyPackage}.`);
  }

  // Fetch and allocate sound system package
  const soundSystemPackages = await vendorRepo.findSoundSystemPackage(
    soundSystemPackage
  );
  if (soundSystemPackages.length) {
    selectedSoundSystem = soundSystemPackages[0].services.soundSystem;
    totalCost += selectedSoundSystem.price;
    if (totalCost > budget) {
      throw new Error("Budget exceeded after allocating sound system package.");
    }
    finalPackage.push({
      serviceType: "Sound System",
      serviceName: selectedSoundSystem.packageName,
      vendorName: soundSystemPackages[0].name,
      price: selectedSoundSystem.price,
      details: selectedSoundSystem.description,
    });
  } else {
    throw new Error(`No sound system package found for ${soundSystemPackage}.`);
  }

  // Upgrade logic to maximize budget usage
  const upgradeService = (services, currentService, serviceType) => {
    for (let i = 1; i < services.length; i++) {
      let upgradedService;
      if (serviceType === "Venue") {
        upgradedService = services[i].services.venue;
      } else if (serviceType === "Photography") {
        upgradedService = services[i].services.photography;
      } else if (serviceType === "Sound System") {
        upgradedService = services[i].services.soundSystem;
      }

      if (!upgradedService) {
        console.error(
          `Upgraded service not found for ${serviceType} at index ${i}`
        );
        continue;
      }

      const additionalCost = upgradedService.price - currentService.price;
      if (totalCost + additionalCost <= budget) {
        totalCost += additionalCost;
        finalPackage = finalPackage.map((item) =>
          item.serviceType === serviceType
            ? {
                ...item,
                serviceName: upgradedService.packageName,
                vendorName: services[i].name,
                price: upgradedService.price,
                ...(serviceType === "Venue" && {
                  venueDetails: {
                    name: upgradedService.name,
                    capacity: upgradedService.capacity,
                    amenities: upgradedService.amenities,
                  },
                }),
                ...(serviceType === "Photography" && {
                  details: upgradedService.description,
                }),
                ...(serviceType === "Sound System" && {
                  details: upgradedService.description,
                }),
              }
            : item
        );
      } else {
        break;
      }
    }
  };

  const upgradeFoodService = (category, currentDish, selectedDishes) => {
    for (let i = 1; i < selectedDishes.length; i++) {
      const upgradedDish = selectedDishes[i].services.catering[category];
      if (!upgradedDish) continue;

      const additionalCost =
        upgradedDish.pricePerPerson * numberOfPeople -
        currentDish.pricePerPerson * numberOfPeople;
      if (totalCost + additionalCost <= budget) {
        totalCost += additionalCost;
        finalPackage = finalPackage.map((item) =>
          item.serviceType === "Catering" &&
          item.serviceName === currentDish.dishName
            ? {
                ...item,
                serviceName: upgradedDish.dishName,
                vendorName: selectedDishes[i].name,
                price: upgradedDish.pricePerPerson * numberOfPeople,
              }
            : item
        );
      } else {
        break;
      }
    }
  };

  // Attempt to upgrade Venue
  if (venues.length > 1) {
    upgradeService(venues, selectedVenue, "Venue");
  }

  // Attempt to upgrade Photography
  if (photographyPackages.length > 1) {
    upgradeService(photographyPackages, selectedPhotography, "Photography");
  }

  // Attempt to upgrade Sound System
  if (soundSystemPackages.length > 1) {
    upgradeService(soundSystemPackages, selectedSoundSystem, "Sound System");
  }

  // Attempt to upgrade Food
  for (let category of ["starters", "mainDishes", "desserts"]) {
    for (let selectedDish of selectedFood[category]) {
      const dishes = await vendorRepo.findCatering(
        category,
        selectedDish.dishName
      );
      if (dishes.length > 1) {
        upgradeFoodService(category, selectedDish, dishes);
      }
    }
  }

  return { finalPackage, totalCost };
};
