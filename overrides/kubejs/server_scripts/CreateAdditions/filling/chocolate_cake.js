ServerEvents.recipes(event => {event.custom({
  "type": "create:filling",
  "ingredients": [
    {
      "item": "createaddition:cake_base_baked"
    },
    {
      "fluid": "create:chocolate",
      "nbt": {},
      "amount": 500
    }
  ],
  "results": [
    {
      "item": "createaddition:chocolate_cake"
    }
  ]
})})