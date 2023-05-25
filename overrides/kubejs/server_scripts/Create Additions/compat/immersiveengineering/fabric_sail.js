ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "FS",
    "SA"
  ],
  "key": {
    "F": {
      "tag": "forge:fabric_hemp"
    },
    "S": {
      "tag": "forge:rods/wooden"
    },
    "A": {
      "item": "create:andesite_alloy"
    }
  },
  "result": {
    "item": "create:white_sail",
    "count": 2
  },
  "conditions": [ {
    "type": "forge:mod_loaded",
    "modid": "immersiveengineering"
  } ]
}

)})