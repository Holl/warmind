module.exports = function(oldData){
	// The function of scan mind is to gather information for making any choices.
	// The object returned is bits of information used by the other minds
	// to determine actions.

	// The following loop is for scanning each local spawn room, not anything empire-wide.

	var scanData = {"empireData":{}, "localData":[]};

	for(var spawn in Game.spawns){
		var starterCreeps = 0;
		var harvesterCreeps = 0;
		var defenderCreeps = 0;
		var builderCreeps = 0;
		var defensivePower = 0;
		var localDefcon = 5;
		var hostileCreeps = Game.spawns[spawn].room.find(FIND_HOSTILE_CREEPS);
		var myCreeps = Game.spawns[spawn].room.find(FIND_MY_CREEPS);

		// Count up and catigorize our creeps.

		for (var creep in myCreeps){
		    var creepRole = myCreeps[0].memory.role;
		    var creepLife = myCreeps[0].ticksToLive;
		    if (creepLife > 150){
		    	if (creepRole == 'starter'){
	            	starterCreeps++;
		        }
		        if (creepRole == 'harvester'){
		            harvesterCreeps++;
		        }
		        if (creepRole == 'defender'){
		            defenderCreeps++;
			        defensivePower += getUnitPower(creep);
			    }
		        if (creepRole == 'builder'){
		            builderCreeps++;
		        }
		    }
		}

		// Count and size up enemy forces.

		var hostilePower = 0;
		if (hostileCreeps){
			for (var i=0; i< hostileCreeps.length; i++){
		        hostilePower += getUnitPower(hostileCreeps[i]);
	    	}
	    }

	    var localDataObject = {
	    	"starterCreeps": starterCreeps,
	    	"harvesterCreeps": harvesterCreeps,
	    	"defenderCreeps": defenderCreeps,
	    	"builderCreeps": builderCreeps,
	    	"defensivePower": defensivePower,
	    	"hostilePower": hostilePower
		}
		
	    scanData['localData'].push({[spawn]:localDataObject});
	}
}

function getUnitPower(creep){
 	var unitPower = 0;	
    unitPower += creep.getActiveBodyparts(ATTACK) * 80;
    unitPower += creep.getActiveBodyparts(RANGED_ATTACK) * 150;
    unitPower += creep.getActiveBodyparts(TOUGH) * 10;
    return unitPower
}