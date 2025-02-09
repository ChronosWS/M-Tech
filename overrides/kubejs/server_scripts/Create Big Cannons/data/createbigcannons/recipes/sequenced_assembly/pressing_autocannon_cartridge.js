ServerEvents.recipes(event => {event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "createbigcannons:autocannon_cartridge_sheet"
  },
  "loops": 6,
  "results": [
    {
      "item": "createbigcannons:empty_autocannon_cartridge"
    }
  ],
  "sequence": [
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "createbigcannons:partially_formed_autocannon_cartridge"
        }
      ],
      "results": [
        {
          "item": "createbigcannons:partially_formed_autocannon_cartridge"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "createbigcannons:partially_formed_autocannon_cartridge"
  }
})})