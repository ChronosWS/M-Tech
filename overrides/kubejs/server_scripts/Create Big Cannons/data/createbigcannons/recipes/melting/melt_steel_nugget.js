ServerEvents.recipes(event => {event.custom({
  "type": "createbigcannons:melting",
  "heatRequirement": "heated",
  "ingredients": [
    {
      "tag": "forge:nuggets/steel"
    }
  ],
  "processingTime": 20,
  "results": [
    {
      "amount": 10,
      "fluid": "createbigcannons:molten_steel"
    }
  ]
})})