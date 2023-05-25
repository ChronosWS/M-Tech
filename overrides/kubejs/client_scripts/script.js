ItemEvents.tooltip(tooltip => {
    let myMessage = Text.yellow('You actually dont need this, use create alternator instead!')
    tooltip.add('immersiveengineering:waterwheel_segment', [myMessage])
    tooltip.add('immersiveengineering:windmill_blade', [myMessage])
    tooltip.add('immersiveengineering:windmill', [myMessage])
    tooltip.add('immersiveengineering:watermill', [myMessage])
    tooltip.add('immersiveengineering:dynamo', [myMessage])
})
ItemEvents.tooltip(tooltip => {
    let myMessage = Text.yellow('You can have only one backpack of this type in the inventory!')
    tooltip.add('sophisticatedbackpacks:backpack', [myMessage])
})
JEIEvents.hideItems(event => {
    event.hide('immersiveengineering:ore_lead')
    event.hide('immersiveengineering:deepslate_ore_lead')
    event.hide('immersiveengineering:ore_uranium')
    event.hide('immersiveengineering:deepslate_ore_uranium')
    event.hide('immersiveengineering:ingot_steel')
    event.hide('immersiveengineering:nugget_steel')
    event.hide('immersiveengineering:dust_steel')
    event.hide('immersiveengineering:storage_steel')
    event.hide('immersiveengineering:ingot_lead')
    event.hide('immersiveengineering:nugget_lead')
    event.hide('immersiveengineering:raw_lead')
    event.hide('immersiveengineering:storage_lead')
    event.hide('immersiveengineering:dust_lead')
    event.hide('immersiveengineering:storage_uranium')
    event.hide('immersiveengineering:dust_uranium')
    event.hide('immersiveengineering:raw_uranium')
    event.hide('immersiveengineering:ingot_uranium')
    event.hide('immersiveengineering:nugget_uranium')
    event.hide('immersiveengineering:dust_copper')
    event.hide('immersiveengineering:dust_gold')
    event.hide('immersiveengineering:dust_iron')
    event.hide('create:copper_nugget')
    event.hide('createaddition:zinc_sheet')
})