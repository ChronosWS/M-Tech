ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shapeless",
  "group": "dye_placard",
  "ingredients": [
    {
      "tag": "createdeco:placards"
    },
    {
      "item": "minecraft:white_dye"
    }
  ],
  "result": {
    "item": "create:placard"
  }
})})