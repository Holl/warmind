module.exports = function (creep, distance) {
    var sources = creep.room.find(FIND_SOURCES);
    var extensions = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
    var storage = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_STORAGE }})[0];
    if (distance == 'far'){
        if (creep.memory.state == undefined){
            creep.memory.state = 0;
        }
        if (creep.carry.energy ==  0){
            creep.memory.state = 0;
        }
        if (creep.carry.energy ==  creep.carryCapacity){
            creep.memory.state = 1;
        }
        if (creep.memory.state == 0){
            if (sources[1]){
                creep.moveTo(sources[1]);
        		creep.harvest(sources[1]);
            }
            else if(storage.store.energy > 20000){
                creep.moveTo(storage);
                storage.transferEnergy(creep);
            }
        }
        if (creep.memory.state == 1){
            if(storage.store.energy < 40000 && sources[1]){
                        creep.moveTo(storage);
                		creep.transferEnergy(storage);
            }
            else{
                creep.moveTo(creep.room.controller);
        		creep.upgradeController(creep.room.controller);
            }
        }
    }
    else if (creep.memory.distance == 'deep'){
        if (creep.memory.target == undefined){
            if (creep.memory.state == undefined){
                creep.memory.state = 0;
            }
            if (creep.carry.energy ==  0){
                creep.memory.state = 0;
            }
            if (creep.carry.energy ==  creep.carryCapacity){
                creep.memory.state = 1;
            }
            var roomFlags = creep.room.flags;
            var inRightRoom = 0;
            if (creep.memory.state == 0){
                if (Game.flags['Invasion1'].roomName == creep.room.name){
                    var droppedEnergy = creep.room.find(FIND_DROPPED_ENERGY);
                    if(droppedEnergy[creep.memory.position]){
                        creep.moveTo(droppedEnergy[creep.memory.position]);
                        creep.pickup(droppedEnergy[creep.memory.position]);
                    }
                }
                else {
                    creep.moveTo(Game.flags['Invasion1']);
                }
            }
            else{
                creep.moveTo(Game.structures['55d55693bedfb5b53427c771']);
                creep.transferEnergy(Game.structures['55d55693bedfb5b53427c771']);
            }
            
        }
        else {
            if (creep.memory.state == undefined){
                creep.memory.state = 0;
            }
            if (creep.carry.energy ==  0){
                creep.memory.state = 0;
            }
            if (creep.carry.energy ==  creep.carryCapacity){
                creep.memory.state = 1;
            }
            var roomFlags = creep.room.flags;
            var inRightRoom = 0;
            if (creep.memory.state == 0){
                if (Game.flags[creep.memory.target].roomName == creep.room.name){
                    var droppedEnergy = creep.room.find(FIND_DROPPED_ENERGY);
                    if(droppedEnergy[creep.memory.position]){
                        creep.moveTo(droppedEnergy[creep.memory.position]);
                        creep.pickup(droppedEnergy[creep.memory.position]);
                    }
                }
                else {
                    creep.moveTo(Game.flags[creep.memory.target]);
                }
            }
            else{
                creep.moveTo(Game.structures[creep.memory.home]);
                creep.transferEnergy(Game.structures[creep.memory.home]);
            }
        }
    }
    else {
        
        if (creep.memory.state == undefined){
            creep.memory.state = 0;
        }
        if (creep.memory.distance == 'away' && creep.room.find(FIND_MY_SPAWNS)[0].name == 'Spawn1'){
            creep.moveTo(Game.flags['Invasion1']);
            return;
        }
        if (creep.carry.energy ==  0){
            creep.memory.state = 0;
        }
        if (creep.carry.energy ==  creep.carryCapacity){
            creep.memory.state = 1;
        }
        if (creep.memory.state == 0) {
    	    creep.moveTo(sources[0]);
    		creep.harvest(sources[0]);
    	}
    	else if (creep.room.find(FIND_MY_SPAWNS)[0].name == 'Spawn2' && creep.memory.distance == 'away' && creep.memory.state == 1){
    	    
    	   var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    		if(targets.length) {
    			creep.moveTo(targets[0]);
    			creep.build(targets[0]);
    		}
    		else{
	            creep.moveTo(storage);
        		creep.transferEnergy(storage);
    		}
    	}
    // 	else if (creep.room.find(FIND_MY_SPAWNS)[0].energy < 300){
    //             		creep.moveTo(creep.room.find(FIND_MY_SPAWNS)[0]);
    //             		creep.transferEnergy(creep.room.find(FIND_MY_SPAWNS)[0]);
    //         		}
        else if(storage) {
                        creep.moveTo(storage);
                		creep.transferEnergy(storage);
        }
        else {
            creep.moveTo(creep.room.find(FIND_MY_SPAWNS)[0]);
            creep.transferEnergy(creep.room.find(FIND_MY_SPAWNS)[0]);
        }
    }
}
