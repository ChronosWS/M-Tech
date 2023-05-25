ServerEvents.recipes(event => {event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:ingots/silver"
    }
  ],
  "results": [
    {
      "item": "immersiveengineering:ingot_electrum",
      "count": 2
    }
  ],
  "heatRequirement": "heated",
  "conditions": [
    {
    	"type": "forge:mod_loaded",
    	"modid": "immersiveengineering"
  	}
  ]
})})