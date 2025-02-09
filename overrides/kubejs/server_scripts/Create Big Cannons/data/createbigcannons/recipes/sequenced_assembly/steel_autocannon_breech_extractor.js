ServerEvents.recipes(event => {event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:ingots/steel"
  },
  "loops": 3,
  "results": [
    {
      "item": "createbigcannons:steel_autocannon_breech_extractor"
    }
  ],
  "sequence": [
    {
      "type": "create:cutting",
      "ingredients": [
        {
          "item": "createbigcannons:partial_steel_autocannon_breech_extractor"
        }
      ],
      "results": [
        {
          "item": "createbigcannons:partial_steel_autocannon_breech_extractor"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "createbigcannons:partial_steel_autocannon_breech_extractor"
  }
})})