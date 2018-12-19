module.exports = function (type, spawn, creepMemory, total) {
    function checkIfObjectContains(one, two){
       for (var i in one) {
               if (! two.hasOwnProperty(i) || one[i] !== two[i] ) {
                  return false;
               }       
       }
       return true;
    }
    var currentCount = 0;
   for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        var creepLiveMemory = creep.memory;
        if (checkIfObjectContains(creepMemory, creepLiveMemory)){
            currentCount++;
        }
   }
   
   console.log("Creep type " + type + " currently has " + currentCount)
   console.log()

   var spawnObject = Game.spawns[spawn];

    if(spawnObject && (currentCount < total)){
        
       if (type == 'worker' && (spawnObject.canCreateCreep([WORK, CARRY, MOVE]) == 0)){
           spawnObject.createCreep( [WORK, CARRY, MOVE], null, creepMemory);
       }
       if (type=='superWorker'&& (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
          spawnObject.createCreep( [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, creepMemory);
       }
       if (type == 'invader' && (spawnObject.canCreateCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE ]) == 0)){
           spawnObject.createCreep( [ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE ], null, creepMemory);
       }
       if (type == 'guard' && (spawnObject.canCreateCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, creepMemory);
       }
       if (type == 'builder' && (spawnObject.canCreateCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], null, creepMemory);
       }
       if (type == 'builderMini' && (spawnObject.canCreateCreep([CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], null, creepMemory);
       }
       if (type == 'archer' && (spawnObject.canCreateCreep([RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE]) == 0)){
           spawnObject.createCreep( [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE], null, creepMemory);
       }
       if (type == 'deepMiner' && (spawnObject.canCreateCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
           console.log("yh")
           spawnObject.createCreep( [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE], null, creepMemory);
       }
       if (type=='deepTrucker'&& (spawnObject.canCreateCreep([CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE]) == 0)){
          spawnObject.createCreep( [CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], null, creepMemory);
		}
        if (type=='healer'&& (spawnObject.canCreateCreep([HEAL, HEAL, HEAL, HEAL, HEAL, MOVE, MOVE, MOVE, MOVE, MOVE]) == 0)){
          spawnObject.createCreep( [HEAL, HEAL, HEAL, HEAL, HEAL, MOVE, MOVE, MOVE, MOVE, MOVE], null, creepMemory);
       }
   }
}