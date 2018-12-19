module.exports = function (type, spawn) {

   var spawnObject = Game.spawns[spawn];
    if(spawnObject){
       if (type == 'worker' && (spawnObject.canCreateCreep([WORK, CARRY, MOVE]) == 0)){
           spawnObject.createCreep( [WORK, CARRY, MOVE], null, {role: 'harvester', sub:'worker'});
       }
       if (type=='superWorker'&& (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
          spawnObject.createCreep( [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'harvester', sub:'worker'});
       }
       if (type=='awayWorker'&& (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
          spawnObject.createCreep( [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'harvester', sub:'worker', distance: 'away'});
       }
       if (type=='defenseBuilder'&& (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
          spawnObject.createCreep( [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'defenseBuilder', sub:'worker', state: 4});
       }
       if (type == 'invader' && (spawnObject.canCreateCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE ]) == 0)){
           spawnObject.createCreep( [ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE ], null, {role: 'invader'});
       }
       if (type == 'worker2' && (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'farvester', sub: 'worker'});
       }
       if (type == 'guard' && (spawnObject.canCreateCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'guard'});
       }
       if (type == 'builder' && (spawnObject.canCreateCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'builder'});
       }
       if (type == 'builder2' && (spawnObject.canCreateCreep([CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], null, {role: 'builder'});
       }
       if (type == 'gatherer' && (spawnObject.canCreateCreep([MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]) == 0)){
           spawnObject.createCreep( [MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK], null, {role: 'gatherer', sub:'worker'});
       }
       if (type == 'fatherer' && (spawnObject.canCreateCreep([MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK]) == 0)){
           spawnObject.createCreep( [MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK], null, {role: 'fatherer', sub:'worker'});
       }
       if (type == 'archer1' && (spawnObject.canCreateCreep([RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE], null, {role: 'archer', position:'D1'});
       }
       if (type == 'archer2' && (spawnObject.canCreateCreep([RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'archer', position:'D2'});
       }
       if (type == 'archer3' && (spawnObject.canCreateCreep([RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'archer', position:'D3'});
       }
       if (type == 'deepMiner1' && (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'deepMiner', position:0});
       }
       if (type == 'deepMiner2' && (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'deepMiner', position:1});
       }
       if (type=='deepTrucker1'&& (spawnObject.canCreateCreep([CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]) == 0)){
          spawnObject.createCreep( [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], null, {role: 'harvester', position:0, distance: 'deep'});
       }
       if (type=='deepTrucker2'&& (spawnObject.canCreateCreep([CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]) == 0)){
          spawnObject.createCreep( [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], null, {role: 'harvester', distance: 'deep', position: 1});
       }
        if (type == 'starter' && (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
              spawnObject.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'starter'});
          }
       if (type == 'starter2' && (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
          spawnObject.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'starter2'});
       }
        if (type=='healer'&& (spawnObject.canCreateCreep([HEAL, HEAL, HEAL, HEAL, HEAL, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
          spawnObject.createCreep( [HEAL, HEAL, HEAL, HEAL, HEAL, MOVE, MOVE, MOVE, MOVE, MOVE], null, {role: 'healer'});
       }
   }
}