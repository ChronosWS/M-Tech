ServerEvents.recipes(event => {event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'createdeco:cast_iron_ingot'
  },
  "loops": 3,
  "results": [
    {
      "item": "createbigcannons:cast_iron_autocannon_breech_extractor"
    }
  ],
  "sequence": [
    {
      "type": "create:cutting",
      "ingredients": [
        {
          "item": "createbigcannons:partial_cast_iron_autocannon_breech_extractor"
        }
      ],
      "results": [
        {
          "item": "createbigcannons:partial_cast_iron_autocannon_breech_extractor"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "createbigcannons:partial_cast_iron_autocannon_breech_extractor"
  }
})})