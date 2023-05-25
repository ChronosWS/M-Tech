ServerEvents.recipes(event => {

    event.remove({
        type: "create:mixing",
        output: "create:brass_ingot"
    })
    event.remove({
        type: "immersiveengineering:alloy",
        output: "create:brass_ingot"
    })
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": "minecraft:copper_ingot"
            },
            {
                "tag": "forge:ingots/zinc"
            }
        ],
        "results": [
            {
                "count": 2,
                "item": "create:brass_ingot"
            }
        ]
    })

    event.remove({output: 'create:blaze_cake_base'})
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": 'minecraft:red_concrete_powder'
            }, {
                "item": 'create:dough'
            }, {
                "item": 'create:dough'
            }
        ],
        "results": [
            {
                "item": "create:blaze_cake_base"
            }
        ]
    })

    event.custom({
        "type": "create:compacting",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": 'ae2:fluix_dust'
            }, {
                "item": 'minecraft:smooth_basalt'
            }
        ],
        "results": [
            {
                "item": 'ae2:sky_stone_block'
            }
        ]
    })


})