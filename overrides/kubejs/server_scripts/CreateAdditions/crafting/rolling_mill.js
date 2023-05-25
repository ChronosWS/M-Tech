ServerEvents.recipes(event => {event.custom({
	"type": "minecraft:crafting_shaped",
	
	"pattern":
	["PSP",
	 "ASA",
	 "ACA"],
	"key":
	{
		"P":
		{
			"item": 'create:iron_sheet'
		},
		"S":
		{
			"item": "create:shaft"
		},
		"A":
		{
			"item": "create:andesite_alloy"
		},
		"C":
		{
			"item": "create:andesite_casing"
		}
	},
	"result":{
		"item": "createaddition:rolling_mill",
		"count": 1
	}
})})