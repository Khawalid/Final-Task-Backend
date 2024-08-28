const vendors = [
  {
    vendorId: "vendor001",
    name: "Elite Events",
    services: {
      venue: [
        {
          name: "Elite Banquet Hall",
          capacity: 200,
          price: 140000,
          amenities: [
            "AC",
            "Valet Parking",
            "Stage",
            "Professional Lighting",
            "Wi-Fi",
          ],
        },
        {
          name: "Imperial Grand Hall",
          capacity: 500,
          price: 290000,
          amenities: [
            "AC",
            "Valet Parking",
            "Stage",
            "Professional Lighting",
            "Garden",
            "Surround Sound System",
          ],
        },
        {
          name: "Royal Convention Center",
          capacity: 1000,
          price: 600000,
          amenities: [
            "AC",
            "Valet Parking",
            "Stage",
            "Advanced Lighting",
            "Garden",
            "VIP Lounge",
            "Wi-Fi",
          ],
        },
        {
          name: "Majestic Pavilion",
          capacity: 5000,
          price: 1300000,
          amenities: [
            "Valet Parking",
            "Stage",
            "Advanced Lighting",
            "Garden",
            "Luxury Tent",
            "VIP Area",
            "24/7 Security",
          ],
        },
      ],
      catering: {
        starters: [
          { dishName: "Chicken Tikka", pricePerPerson: 250 },
          { dishName: "Fish Fingers", pricePerPerson: 300 },
          { dishName: "Vegetable Spring Rolls", pricePerPerson: 200 },
          { dishName: "Grilled Seekh Kebab", pricePerPerson: 350 },
          { dishName: "Paneer Tikka", pricePerPerson: 300 },
        ],
        mainDishes: [
          { dishName: "Chicken Biryani", pricePerPerson: 250 },
          { dishName: "Mutton Korma", pricePerPerson: 550 },
          { dishName: "Beef Nihari", pricePerPerson: 550 },
          { dishName: "Vegetarian Pulao", pricePerPerson: 300 },
          { dishName: "Grilled Fish", pricePerPerson: 450 },
        ],
        desserts: [
          { dishName: "Gulab Jamun", pricePerPerson: 250 },
          { dishName: "Ras Malai", pricePerPerson: 350 },
          { dishName: "Chocolate Cake", pricePerPerson: 450 },
          { dishName: "Ice Cream", pricePerPerson: 350 },
          { dishName: "Shahi Tukda", pricePerPerson: 350 },
        ],
      },
      photography: [
        {
          packageName: "Basic",
          price: 50000,
          description:
            "1 professional photographer, 100 digital photos, 1 printed album, basic lighting, post-event editing.",
        },
        {
          packageName: "Basic Plus",
          price: 100000,
          description:
            "2 professional photographers, 200 digital photos, 2 printed albums, event video coverage, extra lighting, online gallery, cinematic highlights.",
        },
        {
          packageName: "Premium",
          price: 180000,
          description:
            "3 professional photographers, 300 digital photos, 3 printed albums, event video coverage, drone coverage, advanced lighting, photo booth, personalized photo editing.",
        },
      ],
      soundSystem: [
        {
          packageName: "Basic",
          price: 40000,
          description:
            "2 high-quality speakers, 1 microphone, basic DJ setup, standard lighting.",
        },
        {
          packageName: "Basic Plus",
          price: 80000,
          description:
            "4 high-quality speakers, 2 wireless microphones, DJ setup, stage lighting, basic effects lighting.",
        },
        {
          packageName: "Premium",
          price: 150000,
          description:
            "8 surround sound speakers, 4 wireless microphones, advanced DJ setup, stage lighting, effects lighting, smoke machine, LED screens, sound technician.",
        },
      ],
    },
  },
  {
    vendorId: "vendor002",
    name: "Budget Events",
    services: {
      venue: [
        {
          name: "Economy Hall",
          capacity: 200,
          price: 100000,
          amenities: ["AC", "Basic Parking", "Stage", "Basic Lighting"],
        },
        {
          name: "Standard Hall",
          capacity: 500,
          price: 220000,
          amenities: ["AC", "Basic Parking", "Stage", "Garden", "Basic Wi-Fi"],
        },
        {
          name: "Community Center",
          capacity: 1000,
          price: 450000,
          amenities: [
            "AC",
            "Basic Parking",
            "Stage",
            "Garden",
            "VIP Lounge",
            "Standard Security",
          ],
        },
        {
          name: "Open Grounds",
          capacity: 5000,
          price: 1100000,
          amenities: [
            "Parking",
            "Stage",
            "Lighting",
            "Garden",
            "Tent",
            "Open Air",
            "Wi-Fi",
          ],
        },
      ],
      catering: {
        starters: [
          { dishName: "Chicken Tikka", pricePerPerson: 180 },
          { dishName: "Fish Fingers", pricePerPerson: 220 },
          { dishName: "Vegetable Spring Rolls", pricePerPerson: 130 },
          { dishName: "Grilled Seekh Kebab", pricePerPerson: 280 },
          { dishName: "Paneer Tikka", pricePerPerson: 220 },
        ],
        mainDishes: [
          { dishName: "Chicken Biryani", pricePerPerson: 180 },
          { dishName: "Mutton Korma", pricePerPerson: 480 },
          { dishName: "Beef Nihari", pricePerPerson: 480 },
          { dishName: "Vegetarian Pulao", pricePerPerson: 220 },
          { dishName: "Grilled Fish", pricePerPerson: 380 },
        ],
        desserts: [
          { dishName: "Gulab Jamun", pricePerPerson: 180 },
          { dishName: "Ras Malai", pricePerPerson: 280 },
          { dishName: "Chocolate Cake", pricePerPerson: 380 },
          { dishName: "Ice Cream", pricePerPerson: 280 },
          { dishName: "Shahi Tukda", pricePerPerson: 280 },
        ],
      },
      photography: [
        {
          packageName: "Basic",
          price: 35000,
          description:
            "1 photographer, 80 digital photos, no printed album, basic event coverage, minimal lighting.",
        },
        {
          packageName: "Basic Plus",
          price: 75000,
          description:
            "2 photographers, 150 digital photos, 1 printed album, event video coverage, basic lighting, standard editing.",
        },
        {
          packageName: "Premium",
          price: 140000,
          description:
            "3 photographers, 250 digital photos, 2 printed albums, event video coverage, drone footage, online gallery, enhanced editing.",
        },
      ],
      soundSystem: [
        {
          packageName: "Basic",
          price: 30000,
          description: "2 speakers, 1 microphone, basic sound setup, no DJ.",
        },
        {
          packageName: "Basic Plus",
          price: 65000,
          description:
            "4 speakers, 2 microphones, DJ setup, basic stage lighting, minimal effects.",
        },
        {
          packageName: "Premium",
          price: 120000,
          description:
            "6 speakers, 3 microphones, advanced DJ setup, stage lighting, effects lighting, wireless mics, no sound technician.",
        },
      ],
    },
  },
  {
    vendorId: "vendor003",
    name: "Prime Events",
    services: {
      venue: [
        {
          name: "Prime Hall",
          capacity: 200,
          price: 120000,
          amenities: [
            "AC",
            "Reserved Parking",
            "Stage",
            "LED Lighting",
            "Wi-Fi",
          ],
        },
        {
          name: "Executive Hall",
          capacity: 500,
          price: 250000,
          amenities: [
            "AC",
            "Reserved Parking",
            "Stage",
            "LED Lighting",
            "Garden",
            "Enhanced Security",
          ],
        },
        {
          name: "Grand Hall",
          capacity: 1000,
          price: 500000,
          amenities: [
            "AC",
            "Reserved Parking",
            "Stage",
            "LED Lighting",
            "Garden",
            "VIP Lounge",
            "Wi-Fi",
          ],
        },
        {
          name: "Event Grounds",
          capacity: 5000,
          price: 1250000,
          amenities: [
            "Reserved Parking",
            "Stage",
            "LED Lighting",
            "Garden",
            "Luxury Tent",
            "VIP Area",
            "24/7 Security",
          ],
        },
      ],
      catering: {
        starters: [
          { dishName: "Chicken Tikka", pricePerPerson: 220 },
          { dishName: "Fish Fingers", pricePerPerson: 270 },
          { dishName: "Vegetable Spring Rolls", pricePerPerson: 160 },
          { dishName: "Grilled Seekh Kebab", pricePerPerson: 310 },
          { dishName: "Paneer Tikka", pricePerPerson: 260 },
        ],
        mainDishes: [
          { dishName: "Chicken Biryani", pricePerPerson: 220 },
          { dishName: "Mutton Korma", pricePerPerson: 520 },
          { dishName: "Beef Nihari", pricePerPerson: 520 },
          { dishName: "Vegetarian Pulao", pricePerPerson: 270 },
          { dishName: "Grilled Fish", pricePerPerson: 420 },
        ],
        desserts: [
          { dishName: "Gulab Jamun", pricePerPerson: 220 },
          { dishName: "Ras Malai", pricePerPerson: 320 },
          { dishName: "Chocolate Cake", pricePerPerson: 420 },
          { dishName: "Ice Cream", pricePerPerson: 320 },
          { dishName: "Shahi Tukda", pricePerPerson: 320 },
        ],
      },
      photography: [
        {
          packageName: "Basic",
          price: 42000,
          description:
            "1 professional photographer, 100 digital photos, no printed album, basic event coverage, LED lighting.",
        },
        {
          packageName: "Basic Plus",
          price: 85000,
          description:
            "2 professional photographers, 200 digital photos, 1 printed album, event video highlights, LED lighting, standard editing.",
        },
        {
          packageName: "Premium",
          price: 160000,
          description:
            "3 professional photographers, 300 digital photos, 2 printed albums, event video coverage, drone footage, photo booth, advanced editing.",
        },
      ],
      soundSystem: [
        {
          packageName: "Basic",
          price: 35000,
          description:
            "3 speakers, 1 microphone, basic DJ setup, no additional lighting.",
        },
        {
          packageName: "Basic Plus",
          price: 72000,
          description:
            "5 speakers, 2 microphones, DJ setup, LED stage lighting, wireless mics, basic effects lighting.",
        },
        {
          packageName: "Premium",
          price: 135000,
          description:
            "8 speakers, 4 microphones, advanced DJ setup, LED stage lighting, effects lighting, sound engineer, fog machine.",
        },
      ],
    },
  },
  {
    vendorId: "vendor004",
    name: "Grand Occasions",
    services: {
      venue: [
        {
          name: "Grand Ballroom",
          capacity: 200,
          price: 125000,
          amenities: [
            "AC",
            "Reserved Parking",
            "Stage",
            "Modern Lighting",
            "Wi-Fi",
          ],
        },
        {
          name: "Crystal Hall",
          capacity: 500,
          price: 260000,
          amenities: [
            "AC",
            "Reserved Parking",
            "Stage",
            "Modern Lighting",
            "Garden",
            "Sound System",
          ],
        },
        {
          name: "Royal Plaza",
          capacity: 1000,
          price: 520000,
          amenities: [
            "AC",
            "Reserved Parking",
            "Stage",
            "Modern Lighting",
            "Garden",
            "VIP Lounge",
            "Wi-Fi",
          ],
        },
        {
          name: "Imperial Grounds",
          capacity: 5000,
          price: 1270000,
          amenities: [
            "Reserved Parking",
            "Stage",
            "Modern Lighting",
            "Garden",
            "Luxury Tent",
            "VIP Area",
            "24/7 Security",
          ],
        },
      ],
      catering: {
        starters: [
          { dishName: "Chicken Tikka", pricePerPerson: 230 },
          { dishName: "Fish Fingers", pricePerPerson: 280 },
          { dishName: "Vegetable Spring Rolls", pricePerPerson: 170 },
          { dishName: "Grilled Seekh Kebab", pricePerPerson: 320 },
          { dishName: "Paneer Tikka", pricePerPerson: 270 },
        ],
        mainDishes: [
          { dishName: "Chicken Biryani", pricePerPerson: 230 },
          { dishName: "Mutton Korma", pricePerPerson: 530 },
          { dishName: "Beef Nihari", pricePerPerson: 530 },
          { dishName: "Vegetarian Pulao", pricePerPerson: 280 },
          { dishName: "Grilled Fish", pricePerPerson: 430 },
        ],
        desserts: [
          { dishName: "Gulab Jamun", pricePerPerson: 230 },
          { dishName: "Ras Malai", pricePerPerson: 330 },
          { dishName: "Chocolate Cake", pricePerPerson: 430 },
          { dishName: "Ice Cream", pricePerPerson: 330 },
          { dishName: "Shahi Tukda", pricePerPerson: 330 },
        ],
      },
      photography: [
        {
          packageName: "Basic",
          price: 43000,
          description:
            "1 professional photographer, 80 digital photos, basic event coverage, standard lighting.",
        },
        {
          packageName: "Basic Plus",
          price: 88000,
          description:
            "2 professional photographers, 150 digital photos, 1 printed album, event video coverage, standard lighting, online gallery.",
        },
        {
          packageName: "Premium",
          price: 165000,
          description:
            "3 professional photographers, 300 digital photos, 3 printed albums, event video coverage, aerial drone footage, photo booth, advanced editing.",
        },
      ],
      soundSystem: [
        {
          packageName: "Basic",
          price: 36000,
          description:
            "2 speakers, 1 microphone, basic DJ setup, standard lighting.",
        },
        {
          packageName: "Basic Plus",
          price: 74000,
          description:
            "4 speakers, 2 microphones, DJ setup, standard stage lighting, effects lighting.",
        },
        {
          packageName: "Premium",
          price: 138000,
          description:
            "8 speakers, 4 microphones, advanced DJ setup, standard stage lighting, effects lighting, sound engineer, LED screens.",
        },
      ],
    },
  },
  {
    vendorId: "vendor005",
    name: "Regal Celebrations",
    services: {
      venue: [
        {
          name: "Regal Hall",
          capacity: 200,
          price: 130000,
          amenities: [
            "AC",
            "VIP Parking",
            "Stage",
            "Advanced Lighting",
            "Wi-Fi",
          ],
        },
        {
          name: "Sapphire Hall",
          capacity: 500,
          price: 270000,
          amenities: [
            "AC",
            "VIP Parking",
            "Stage",
            "Advanced Lighting",
            "Garden",
            "24/7 Security",
          ],
        },
        {
          name: "Emerald Ballroom",
          capacity: 1000,
          price: 540000,
          amenities: [
            "AC",
            "VIP Parking",
            "Stage",
            "Advanced Lighting",
            "Garden",
            "VIP Lounge",
            "Wi-Fi",
          ],
        },
        {
          name: "Diamond Pavilion",
          capacity: 5000,
          price: 1300000,
          amenities: [
            "VIP Parking",
            "Stage",
            "Advanced Lighting",
            "Garden",
            "Luxury Tent",
            "VIP Area",
            "24/7 Security",
          ],
        },
      ],
      catering: {
        starters: [
          { dishName: "Chicken Tikka", pricePerPerson: 240 },
          { dishName: "Fish Fingers", pricePerPerson: 290 },
          { dishName: "Vegetable Spring Rolls", pricePerPerson: 180 },
          { dishName: "Grilled Seekh Kebab", pricePerPerson: 330 },
          { dishName: "Paneer Tikka", pricePerPerson: 280 },
        ],
        mainDishes: [
          { dishName: "Chicken Biryani", pricePerPerson: 240 },
          { dishName: "Mutton Korma", pricePerPerson: 540 },
          { dishName: "Beef Nihari", pricePerPerson: 540 },
          { dishName: "Vegetarian Pulao", pricePerPerson: 290 },
          { dishName: "Grilled Fish", pricePerPerson: 440 },
        ],
        desserts: [
          { dishName: "Gulab Jamun", pricePerPerson: 240 },
          { dishName: "Ras Malai", pricePerPerson: 340 },
          { dishName: "Chocolate Cake", pricePerPerson: 440 },
          { dishName: "Ice Cream", pricePerPerson: 340 },
          { dishName: "Shahi Tukda", pricePerPerson: 340 },
        ],
      },
      photography: [
        {
          packageName: "Basic",
          price: 44000,
          description:
            "1 professional photographer, 80 digital photos, basic event coverage, advanced lighting.",
        },
        {
          packageName: "Basic Plus",
          price: 90000,
          description:
            "2 professional photographers, 150 digital photos, 2 printed albums, event video coverage, advanced lighting, online gallery.",
        },
        {
          packageName: "Premium",
          price: 170000,
          description:
            "3 professional photographers, 300 digital photos, 3 printed albums, event video coverage, drone footage, photo booth, premium editing.",
        },
      ],
      soundSystem: [
        {
          packageName: "Basic",
          price: 37000,
          description:
            "2 speakers, 1 microphone, basic DJ setup, standard lighting.",
        },
        {
          packageName: "Basic Plus",
          price: 76000,
          description:
            "4 speakers, 2 microphones, DJ setup, stage lighting, wireless mics, effects lighting.",
        },
        {
          packageName: "Premium",
          price: 140000,
          description:
            "8 speakers, 4 microphones, advanced DJ setup, stage lighting, effects lighting, sound engineer, fog machine, LED screens.",
        },
      ],
    },
  },
];

module.exports = vendors;
