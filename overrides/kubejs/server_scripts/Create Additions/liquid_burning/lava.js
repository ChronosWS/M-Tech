ServerEvents.recipes(event => {event.custom({
	"type":"createaddition:liquid_burning",
	"input": {
      	"fluidTag": "minecraft:lava",
      	"amount": 1000
	},
	"burnTime": 20000
})})