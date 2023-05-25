ServerEvents.recipes(event => {event.custom({
	"type":"createaddition:liquid_burning",
	"input": {
      	"fluidTag": "forge:creosote",
      	"amount": 1000
	},
	"burnTime": 2400,
	"conditions": [
	    {
	      "value": {
	        "fluidTag": "forge:creosote",
	        "type": "createaddition:fluidtag_empty"
	      },
	      "type": "forge:not"
	    }
	]
}
)})