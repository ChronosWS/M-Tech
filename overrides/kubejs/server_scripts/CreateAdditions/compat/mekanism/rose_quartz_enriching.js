ServerEvents.recipes(event => {event.custom({
	"type":"mekanism:enriching",
	"input":{
		"ingredient":{
			"item":"create:rose_quartz"
		}
	},
	"output":{
		"item":"create:polished_rose_quartz"
	},
	"conditions": [ 
  	{
      "type": "forge:mod_loaded",
      "modid": "mekanism"
  	} 
  ]
})})