module.exports = function (spawn) {
    var hostiles = Game.spawns[spawn].room.find((FIND_HOSTILE_CREEPS));
    var myCreeps = Game.spawns[spawn].room.find((FIND_MY_CREEPS));
    var invCreeps = 0;
        var awayHarvester = 0;
        var D3 = 0;
        var deepMiner1 = 0;
        var deepMiner2 = 0;
        var deepTrucker1 = 0;
        var deepTrucker2 = 0;
        var starter = 0;
        var starter2 = 0;
        var healer = 0;
    for(var name in Game.creeps) {
	    var creepCheck = Game.creeps[name];
        if (creepCheck.memory.role == 'invader'){
            invCreeps++;
        }
        if (creepCheck.memory.role == 'healer'){
            healer++;
        }
        if (creepCheck.memory.role == 'starter'){
            starter++;
        }
        if (creepCheck.memory.role == 'starter2'){
            starter2++;
        }
        if (creepCheck.memory.distance == 'away' ){
            awayHarvester++;
        }
        if (creepCheck.memory.position == 'D3'){
            if (myCreeps[i].ticksToLive > 150){
                D3++;
            }
        }
        if (creepCheck.memory.role == 'deepMiner'){
            if (creepCheck.ticksToLive > 32){
                if (creepCheck.memory.position == 0){
                    deepMiner1++;
                }
                if (creepCheck.memory.position == 1){
                    deepMiner2++;
                }
            }
        }
        if (creepCheck.memory.distance == 'deep'){
            
            if (creepCheck.memory.position == 0){
                deepTrucker1++;
            }
            if (creepCheck.memory.position == 1){
                deepTrucker2++;
            }
        }
    }
    var hostilePower = 0;
    var alliedPower = 0;
    var unitPower;
    var harvesters = 0;
    var farvesters = 0;
    var builders = 0;
    var guards = 0;
    var defenseBuilder = 0;
    var D1 = 0;
    var D2 = 0;
    for (var i=0; i< hostiles.length; i++){
        unitPower = 0;
        unitPower += hostiles[i].getActiveBodyparts(ATTACK) * 80;
        unitPower += hostiles[i].getActiveBodyparts(RANGED_ATTACK) * 150;
        unitPower += hostiles[i].getActiveBodyparts(TOUGH) * 10;
        hostilePower += unitPower;
    }
    for (var i=0; i< myCreeps.length; i++){
        unitPower = 0;
        unitPower += myCreeps[i].getActiveBodyparts(ATTACK) * 80;
        unitPower += myCreeps[i].getActiveBodyparts(RANGED_ATTACK) * 150;
        unitPower += myCreeps[i].getActiveBodyparts(TOUGH) * 10;
        alliedPower += unitPower;
        if (myCreeps[i].memory.role == 'harvester' && myCreeps[i].memory.distance != 'away' && myCreeps[i].memory.distance != 'deep'){
            harvesters++;
        }
        if (myCreeps[i].memory.role == 'farvester'){
            farvesters++;
        }
        if (myCreeps[i].memory.role == 'builder'){
            builders++
        }
        if (myCreeps[i].memory.role == 'guard'){
            guards++;
        }
        if (myCreeps[i].memory.role == 'defenseBuilder'){
            defenseBuilder++;
        }
        if (myCreeps[i].memory.position == 'D1'){
            if (myCreeps[i].ticksToLive > 150){
                D1++;
            }
        }
        if (myCreeps[i].memory.position == 'D2'){
            if (myCreeps[i].ticksToLive > 150){
                D2++;
            }
        }
    }
    if (hostilePower == 0) {
        if (Memory.defcon != 0){
            console.log('All clear.  DEFCON down.');
            Game.notify('All clear.  DEFCON down.');
            Memory.defcon = 0;
        }
    }
    var powerDifference = hostilePower - alliedPower;
    if (200 > powerDifference && powerDifference > 0){
        if (Memory.defcon != 1){
            console.log('DEFCON is now 1.');
            Game.notify('DEFCON is now 1.');
            Memory.defcon = 1; 
        }
    }
    if ((powerDifference) >= 200){
        if (Memory.defcon != 2){
            console.log('DEFCON raised to 2.');
            Game.notify('DEFCON raised to 2.');
            Memory.defcon = 2; 
        }
    }
    
    return {'harvesters': harvesters,'healers': healer, 'starter': starter, 'starter2': starter2, 'deepMiner1': deepMiner1, 'deepMiner2': deepMiner2, 'deepTrucker1': deepTrucker1, 'deepTrucker2': deepTrucker2, 'awayHarvester':awayHarvester, 'D1':D1, 'D2': D2, 'D3': D3, 'invCreeps': invCreeps, 'defenseBuilder': defenseBuilder, 'farvesters': farvesters, 'builders': builders, 'guards': guards, 'powerDifference': powerDifference, 'hostilePower': hostilePower};
}