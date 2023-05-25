ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "n": {
      "tag": "forge:nuggets/copper"
    },
    "p": {
      "item": 'create:copper_sheet'
    },
    "t": {
      "item": "minecraft:glow_berries"
    }
  },
  "pattern": [
    "n",
    "t",
    "p"
  ],
  "result": {
    "item": "createdeco:green_copper_lamp"
  }
})})