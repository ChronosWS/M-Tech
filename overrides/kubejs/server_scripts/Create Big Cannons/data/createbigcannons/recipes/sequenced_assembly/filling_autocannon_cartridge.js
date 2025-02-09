ServerEvents.recipes(event => {event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "createbigcannons:empty_autocannon_cartridge"
  },
  "loops": 3,
  "results": [
    {
      "item": "createbigcannons:filled_autocannon_cartridge"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "createbigcannons:partially_filled_autocannon_cartridge"
        },
        {
          "tag": "forge:gunpowder"
        }
      ],
      "results": [
        {
          "item": "createbigcannons:partially_filled_autocannon_cartridge"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "createbigcannons:partially_filled_autocannon_cartridge"
  }
})})