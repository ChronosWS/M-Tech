ServerEvents.recipes(event => {event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "createbigcannons:spring_wire"
  },
  "loops": 3,
  "results": [
    {
      "item": "createbigcannons:recoil_spring"
    }
  ],
  "sequence": [
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "createbigcannons:partial_recoil_spring"
        }
      ],
      "results": [
        {
          "item": "createbigcannons:partial_recoil_spring"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "createbigcannons:partial_recoil_spring"
  }
})})