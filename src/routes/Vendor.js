// routes/events.js
const express = require("express");
const eventController = require("../controllers/Vendor");
const router = express.Router();
/* 
#swagger.summary = 'Create an event'
#swagger.description = 'Create an event package based on user input.'
*/

/* 
#swagger.parameters['body'] = {
    in: 'body',
    description: 'Event creation details',
    required: true,
    schema: {
        type: 'object',
        properties: {
            numberOfPeople: {
                type: 'integer',
                example: 100
            },
            foodPreferences: {
                type: 'object',
                properties: {
                    starters: {
                        type: 'array',
                        items: { type: 'string' },
                        example: ["Soup", "Salad"]
                    },
                    mainDishes: {
                        type: 'array',
                        items: { type: 'string' },
                        example: ["Biryani", "Kebab"]
                    },
                    desserts: {
                        type: 'array',
                        items: { type: 'string' },
                        example: ["Ice Cream", "Cake"]
                    }
                }
            },
            photographyPackage: {
                type: 'string',
                example: 'Basic'
            },
            soundSystemPackage: {
                type: 'string',
                example: 'Standard'
            },
            budget: {
                type: 'integer',
                example: 100000
            }
        }
    }
}
*/

/* 
#swagger.responses[200] = { 
    description: 'Event package created successfully',
    schema: {
        type: 'object',
        properties: {
            finalPackage: { type: 'object' },
            totalCost: { type: 'integer', example: 95000 }
        }
    }
}
*/

/* 
#swagger.responses[400] = { 
    description: 'Bad request',
    schema: {
        type: 'object',
        properties: {
            error: { type: 'string', example: 'Invalid input data' }
        }
    }
}
*/
router.post("/v1/create-event", eventController.createEvent);

module.exports = router;
