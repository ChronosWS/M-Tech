ServerEvents.recipes(event => {event.custom({
  "type": "create:filling",
  "ingredients": [
    {
      "item": "createaddition:cake_base_baked"
    },
    {
      "fluidTag": "forge:honey",
      "nbt": {},
      "amount": 500
    }
  ],
  "results": [
    {
      "item": "createaddition:honey_cake"
    }
  ]
})})