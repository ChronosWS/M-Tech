ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "00",
            "00"
        ],
        "key": {
            "0": {
                "item": "minecraft:paper"
            }
        },
        "result": {
            "item": "labels:label",
            "count": 4
        }
    })
})