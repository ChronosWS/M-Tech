ServerEvents.recipes(event => {event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "createaddition:biomass"
    }
  ],
  "results": [
    {
      "fluid": "minecraft:water",
      "amount": 50
    },
    {
    	"item": "createaddition:biomass_pellet",
    	"count": 1
    }
  ]
})})