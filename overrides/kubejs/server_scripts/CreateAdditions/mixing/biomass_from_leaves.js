ServerEvents.recipes(event => {event.custom({
  "type": "create:mixing",
  "ingredients": [
	{
      "tag": "minecraft:leaves"
    },
    {
      "tag": "minecraft:leaves"
    },
    {
      "tag": "minecraft:leaves"
    },
    {
      "fluidTag": "forge:plantoil",
      "amount": 150
    }
  ],
  "results": [
    {
      "item": "createaddition:biomass",
      "count": 2
    }
  ],
  "heatRequirement": "heated"
})})