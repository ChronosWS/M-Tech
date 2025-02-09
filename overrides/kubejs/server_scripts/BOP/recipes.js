ServerEvents.recipes(event => {
    function make_sapling(output, sapling, addition) {
        event.shapeless('8x ' + output, ['8x ' + sapling, addition])
    }

    make_sapling(
        'biomesoplenty:hellbark_sapling',
        'minecraft:dark_oak_sapling',
        'minecraft:black_dye'
    )
    make_sapling(
        'biomesoplenty:origin_sapling',
        'minecraft:oak_sapling',
        'minecraft:lime_dye'
    )
    make_sapling(
        'biomesoplenty:rainbow_birch_sapling',
        'minecraft:birch_sapling',
        'quark:rainbow_rune'
    )
    make_sapling(
        'biomesoplenty:yellow_autumn_sapling',
        'minecraft:oak_sapling',
        'minecraft:yellow_dye'
    )
    make_sapling(
        'biomesoplenty:orange_autumn_sapling',
        'minecraft:oak_sapling',
        'minecraft:orange_dye'
    )
    make_sapling(
        'biomesoplenty:maple_sapling',
        'minecraft:oak_sapling',
        'minecraft:red_dye'
    )
    make_sapling(
        'biomesoplenty:magic_sapling',
        'minecraft:birch_sapling',
        'apotheosis:gem_dust'
    )
    make_sapling(
        'biomesoplenty:white_cherry_sapling',
        'minecraft:acacia_sapling',
        'minecraft:white_dye'
    )
    make_sapling(
        'biomesoplenty:pink_cherry_sapling',
        'minecraft:acacia_sapling',
        'minecraft:pink_dye'
    )
    make_sapling(
        'biomesoplenty:jacaranda_sapling',
        'minecraft:acacia_sapling',
        'minecraft:purple_dye'
    )
        make_sapling(
        'biomesoplenty:fir_sapling',
        'minecraft:spruce_sapling',
        'minecraft:gray_dye'
    )
    make_sapling(
        'biomesoplenty:redwood_sapling',
        'minecraft:spruce_sapling',
        'minecraft:red_dye'
    )
    make_sapling(
        'biomesoplenty:mahogany_sapling',
        'minecraft:jungle_sapling',
        'minecraft:pink_dye'
    )
    make_sapling(
        'biomesoplenty:palm_sapling',
        'minecraft:jungle_sapling',
        'minecraft:orange_dye'
    )
    make_sapling(
        'biomesoplenty:willow_sapling',
        'minecraft:dark_oak_sapling',
        'minecraft:green_dye'
    )
    make_sapling(
        'biomesoplenty:dead_sapling',
        'minecraft:oak_sapling',
        'minecraft:black_dye'
    )
    make_sapling(
        'biomesoplenty:umbran_sapling',
        'minecraft:birch_sapling',
        'minecraft:black_dye'
    )
    make_sapling(
        'biomesoplenty:flowering_oak_sapling',
        'minecraft:oak_sapling',
        '#kubejs:flower_white'
    )
})