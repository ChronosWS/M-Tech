ServerEvents.recipes(event => {event.custom({
  "type": "create:mixing",
  "ingredients": [
	{
      "tag": "createaddition:plants"
    },
    {
      "tag": "createaddition:plants"
    },
    {
      "tag": "createaddition:plants"
    },
    {
      "fluidTag": "forge:plantoil",
      "amount": 100
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