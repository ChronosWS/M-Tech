ServerEvents.tags('item', event => {
    event.remove('forge:wires/copper', 'createaddition:copper_wire')
    event.remove('forge:wires/gold', 'createaddition:gold_wire')
    event.remove('forge:wires/iron', 'createaddition:iron_wire')

    event.remove('forge:rods/iron', 'createaddition:iron_rod')
    event.remove('forge:rods/gold', 'createaddition:gold_rod')
    event.remove('forge:rods/brass', 'createaddition:brass_rod')
    event.remove('forge:rods/copper', 'createaddition:copper_rod')
    event.remove('forge:rods/all_metal', 'createaddition:iron_rod')
    event.remove('forge:rods/all_metal', 'createaddition:gold_rod')
    event.remove('forge:rods/all_metal', 'createaddition:brass_rod')
    event.remove('forge:rods/all_metal', 'createaddition:copper_rod')
})