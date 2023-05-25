ServerEvents.recipes(event => {event.custom({
	"type":"createaddition:liquid_burning",
	"input": {
      	"fluidTag": "forge:crude_oil",
      	"amount": 1000
	},
	"burnTime": 3600,
	"conditions": [
	    {
	      "value": {
	        "fluidTag": "forge:crude_oil",
	        "type": "createaddition:fluidtag_empty"
	      },
	      "type": "forge:not"
	    }
	]
}
)})