ServerEvents.recipes(event => {event.custom({
	"type": "minecraft:crafting_shaped",
	
	"pattern":
	["Z",
	 "C",
	 "T"],
	"key":
	{
		"Z":
		{
			"tag": "forge:plates/zinc"
		},
		"C":
		{
			"item": 'create:copper_sheet'
		},
		"T":
		{
			"item": "minecraft:redstone_torch"
		}
	},
	"result":{
		"item": "createaddition:capacitor",
		"count": 1
	}
})})