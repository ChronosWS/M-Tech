ServerEvents.recipes(event => {event.custom({
  "type": "create:filling",
  "ingredients": [
    {
      "item": "createaddition:cake_base_baked"
    },
    {
      "fluidTag": "forge:milk",
      "nbt": {},
      "amount": 1000
    }
  ],
  "results": [
    {
      "item": "minecraft:cake"
    }
  ]
})})