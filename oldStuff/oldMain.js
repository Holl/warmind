//Numbers to upkeep for this room:
var totalWorkers = 3;
var totalFarWorkers = 4;
var totalGuards = 0;
var totalBuilders =2;
var totalDefenseBuilders = 2;
var totalInvCreeps =0;
var totalD1 = 1;
var totalD2 = 1;
var totalD3 = 1;
var totalAwayHarvester = 0;
var totalHealers = 0;

//Numbers for the room south:

var totalWorkers2 = 3;
var totalFarWorkers2 = 1;
var totalGuards2 = 0;
var totalBuilders2 =2;
var totalDefenseBuilders2 = 0;
var totalDeepTrucker1 = 3;
var totalDeepTrucker2 = 3;
var totalDeepMiner1 = 1;
var totalDeepMiner2 = 1;
var totalStarter = 0;
var totalStarter2 = 0;

var totalWorkers3 = 3;
var totalFarWorkers3 = 3;
var totalGuards3 = 0;
var totalBuilders3 =2;
var totalDefenseBuilders3 = 3;


//END user input

var harvester = require('harvester');
var SCAN = require('SCAN');
var create = require('creator');
var createAdvanced = require('creatorAdvanced');

var scanInfo = SCAN('Spawn1'); 
var currentWorkers = scanInfo['harvesters'];
var currentFarWorkers = scanInfo['farvesters'];
var currentGuards = scanInfo['guards'];
var currentBuilders = scanInfo['builders'];
var currentDefenseBuilders = scanInfo['defenseBuilder'];
var powerDifference = scanInfo['powerDifference'];
var currentInvCreeps = scanInfo['invCreeps'];
var currentD1 = scanInfo['D1'];
var currentD2 = scanInfo['D2'];
var currentAwayHarvester = scanInfo['awayHarvester'];
var hostilePower = scanInfo['hostilePower'];
var currentHealers = scanInfo['healers'];

var scanInfo2 = SCAN('Spawn2');
var currentWorkers2 = scanInfo2['harvesters'];
var currentFarWorkers2 = scanInfo2['farvesters'];
var currentGuards2 = scanInfo2['guards'];
var currentBuilders2 = scanInfo2['builders'];
var currentDefenseBuilders2 = scanInfo2['defenseBuilder'];
var powerDifference2 = scanInfo2['powerDifference'];
var currentDeepMiner1 = scanInfo2['deepMiner1'];
var currentDeepMiner2 = scanInfo2['deepMiner2'];
var currentDeepTrucker1 = scanInfo2['deepTrucker1'];
var currentDeepTrucker2 = scanInfo2['deepTrucker2'];
var currentStarter = scanInfo2['starter'];
var currentStarter2 = scanInfo2['starter2'];

var scanInfo3 = SCAN('Spawn3');
var currentWorkers3 = scanInfo3['harvesters'];
var currentFarWorkers3 = scanInfo3['farvesters'];
var currentGuards3 = scanInfo3['guards'];
var currentBuilders3 = scanInfo3['builders'];
var currentDefenseBuilders3 = scanInfo3['defenseBuilder'];
var powerDifference3 = scanInfo3['powerDifference'];


//SPAWN 1:

createAdvanced('deepMiner', 'Spawn1', {role: 'deepMiner', position:0, target: 'Mining2'}, 1);
createAdvanced('deepMiner', 'Spawn1', {role: 'deepMiner', position:1, target: 'Mining2'}, 1);

createAdvanced('deepTrucker', 'Spawn1', {role: 'harvester', position:0, distance: 'deep', target: 'Mining2', home: '55cf76f02389859209f84166'}, 2);
createAdvanced('deepTrucker', 'Spawn1', {role: 'harvester', position:1, distance: 'deep', target: 'Mining2', home: '55cf76f02389859209f84166'}, 2);

// createAdvanced('deepTrucker', 'Spawn1', {role: 'harvester', distance: 'deep', position: 1, target: 'Mining2'}, 1);
// createAdvanced('deepMiner', 'Spawn1', {role: 'harvester', distance: 'deep', position: 2, target: 'Mining2'}, 1);

if (powerDifference > 0) {
    totalGuards += 1;
    totalGuards += powerDifference / 500;
    if (currentGuards < totalGuards){
        create('guard', 'Spawn1');
    }
}
// else if (currentInvCreeps < totalInvCreeps){
//     console.log('Invading.')
//     create('invader', 'Spawn1');
// }
else if (currentBuilders < totalBuilders) {
    create('builder', 'Spawn1');
}
else if ((totalWorkers - currentWorkers == 1 )){
    create('superWorker', 'Spawn1');
}

else if (currentHealers < totalHealers) {
    create('healer', 'Spawn1');
}
else if (totalWorkers > currentWorkers){
    create('worker', 'Spawn1');
}
else if (currentFarWorkers < totalFarWorkers){
    create('worker2', 'Spawn1');
}
else if (currentGuards < totalGuards){
    create('guard', 'Spawn1');
}
else if (currentDefenseBuilders < totalDefenseBuilders){
    create('defenseBuilder', 'Spawn1');
}
// else if (currentD1 < totalD1){
//     create('archer1', 'Spawn1');
// }
// else if (currentD2 < totalD2){
//     create('archer2', 'Spawn1');
// }
else if (currentAwayHarvester < totalAwayHarvester){
    create('awayWorker', 'Spawn1');
}
//SPAWN 2: 


if (powerDifference2 > 0) {
    totalGuards2 += 1;
    totalGuards2 += powerDifference2 / 500;
    if (currentGuards2 < totalGuards2){
        create('guard', 'Spawn2');
    }
}
else if (currentBuilders2 == 0) {
    create('builder2', 'Spawn2');
}
else if (currentStarter < totalStarter){
    create('starter', 'Spawn2')
}
else if (currentStarter2 < totalStarter2){
    create('starter2', 'Spawn2')
}
else if (currentBuilders2 < totalBuilders2) {
    create('builder', 'Spawn2');
}
else if ((totalWorkers2 - currentWorkers2 == 1 )){
    create('superWorker', 'Spawn2');
}
else if (totalWorkers2 > currentWorkers2){
    create('superWorker', 'Spawn2');
}
else if (currentInvCreeps < totalInvCreeps){
    console.log('Invading.');
    create('invader', 'Spawn2');
}
else if (currentGuards2 < totalGuards2){
    create('guard', 'Spawn2');
}
else if (currentDefenseBuilders2 < totalDefenseBuilders2){
    create('defenseBuilder', 'Spawn2');
}
else if (currentDeepMiner1 < totalDeepMiner1){
    create('deepMiner1', 'Spawn2');
}
else if (currentDeepMiner2 < totalDeepMiner2){
    create('deepMiner2', 'Spawn2');
}
else if (currentDeepTrucker1 < totalDeepTrucker1){
    create('deepTrucker1', 'Spawn2');
}
else if (currentDeepTrucker2 <  totalDeepTrucker2){
    create('deepTrucker2', 'Spawn2');
}
else if (currentFarWorkers2 < totalFarWorkers2){
    create('worker2', 'Spawn2');
}

createAdvanced('deepTrucker', 'Spawn3', {role: 'harvester', position:0, distance: 'deep', target: 'Mining3', home: '55ee327077a014623bcd4b10', state: 0}, 2);
createAdvanced('deepMiner', 'Spawn3', {role: 'deepMiner', position:0, target: 'Mining3'}, 1);

if (currentBuilders3 == 0) {
    create('builder2', 'Spawn3');
}
else if (currentBuilders3 < totalBuilders3) {
    create('builder', 'Spawn3');
}
else if (currentWorkers3 < totalWorkers3){
    create('superWorker', 'Spawn3');
}
else if (totalWorkers3 > currentWorkers3){
    create('superWorker', 'Spawn3');
}
else if (currentGuards3 < totalGuards3){
    create('guard', 'Spawn3');
}
else if (currentFarWorkers3 < totalFarWorkers3){
    create('worker2', 'Spawn3');
}
else if (currentDefenseBuilders3 < totalDefenseBuilders3){
    create('defenseBuilder', 'Spawn3');
}


for(var name in Game.creeps) {
    
	var creep = Game.creeps[name];
	if(creep.memory.role == 'harvester') {
		harvester(creep, 'near');
	}
	if (creep.memory.role == 'farvester'){
	    harvester(creep, 'far')
	}
	
	if (creep.memory.role == 'gatherer'){
	    
	}
	if (creep.memory.role == 'fartherer'){
	    
	}

	if(creep.memory.role == 'builder') {
	    
	    var storage = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_STORAGE }})[0]
	    var spawn = creep.room.find(FIND_MY_SPAWNS)[0];
	
		if(creep.carry.energy == 0 && (currentWorkers >= totalWorkers) && (currentFarWorkers >= totalFarWorkers)) {
			creep.moveTo(storage);
			storage.transferEnergy(creep);
		}
		else {
		    if (spawn.energy < 300){
		                        creep.moveTo(spawn);
			                    creep.transferEnergy(spawn);
		    }
			var extensions = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
			if (extensions.length){
    		    for (var i = 0; i < extensions.length; i++){
    		        
    		       if (extensions[i].energy < 50){
    		           	if(creep.carry.energy == 0) {
                				creep.moveTo(storage);
			                    storage.transferEnergy(creep);
                		}
                		else{
                		    creep.moveTo(extensions[i]);
                		    creep.transferEnergy(extensions[i]);
                		}
    		       }
    		    }
			}
		}
	}
	if(creep.memory.role == 'guard') {
    	var targets = creep.room.find(FIND_HOSTILE_CREEPS);
    	if(targets.length) {
    		creep.moveTo(targets[0]);
    		creep.attack(targets[0]);
	    }
	    else {
	        creep.moveTo(Game.flags['Post1'])
	    }
    }
    if (creep.memory.role == 'defenseBuilder'){
        var storage = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_STORAGE }})[0]
        
        if(creep.carry.energy == 0) {
            if (creep.memory.state == undefined){
                creep.memory.state = 0;
            }
            if (creep.memory.unit == undefined){
                creep.memory.unit = 0;
            }
            else if (creep.memory.state == 1){
                creep.memory.state = 0;
                creep.memory.unit++;
            }
            if (storage){
    			creep.moveTo(storage);
    			storage.transferEnergy(creep);
            }
		}
		else {
		creep.memory.state = 1;
    	var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		if(targets.length) {
			creep.moveTo(targets[0]);
			creep.build(targets[0]);
		}
		
		else {
    		var realWalls = [];
    		var walls = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_WALL }});
    		for (var x = 0; x < walls.length; x++){
    		    if (walls[x].hitsMax > 1){
    		        realWalls.push(walls[x]);
    		    }
    		}
    		var ramparts = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_RAMPART }});
    		var realRamparts = [];
            var totalDef = realWalls.concat(ramparts);
            for ( x = 0; x < ramparts.length; x++){
    		    if (ramparts[x].hits < 15000){
    		        realRamparts.push(ramparts[x]);
    		    }
    		}
    	    if (realRamparts.length > 0){
    	        for ( x = 0; x < realRamparts.length; x++){
        	       creep.moveTo(realRamparts[x]);
                    creep.repair(realRamparts[x]);
    	        }
    	    }
    	    else{
                creep.moveTo(totalDef[creep.memory.unit]);
                creep.repair(totalDef[creep.memory.unit]);
                
                if (creep.memory.unit >= totalDef.length){
                        creep.memory.unit = 0;
                    }
        		}
		}
    }
        
    }
    if (creep.memory.role == 'invader'){
        if (Game.flags['Invasion2'].roomName != creep.room.name){
            creep.moveTo(Game.flags['Invasion2']);
            console.log('alkjsdhf')
        }
        
        else{
        	var hostiles = creep.room.find(FIND_HOSTILE_CREEPS);
        	var enemySpawns = creep.room.find(FIND_HOSTILE_SPAWNS);
        	var enemyController = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_CONTROLLER }});
        	var enemyExtensions = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION}});
        	var enemyRamp = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_RAMPART }})[0]
        	
        	var flagTarget = Game.flags['Invasion2'].pos.findInRange(FIND_STRUCTURES, 0)
        	
        	var hostileCreepsAREA = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 1);
        	
        	if (flagTarget.length){
        	    creep.moveTo(flagTarget[0]);
        	    creep.attack(flagTarget[0])
        	}
        // 	  else if (enemyExtensions.length){
        // 	    creep.moveTo(enemyExtensions[0]);
        // 	    creep.attack(enemyExtensions[0]);
        // 	}
        	
        	else if (hostileCreepsAREA.length){
        	    creep.moveTo(hostileCreepsAREA[0]);
        	    creep.attack(hostileCreepsAREA[0]);
        	}
        	
        // 	else if (enemySpawns.length){
        // 	    creep.moveTo(enemySpawns[0]);
        // 	    creep.attack(enemySpawns[0]);
        // 	}
        
        	else if (hostiles.length) {
        	    
        		creep.moveTo(hostiles[0]);
        		creep.attack(hostiles[0]);
        	}
        // 	else if (enemyExtensions.length){
        // 	    creep.moveTo(enemyExtensions[0]);
        // 	    creep.attack(enemyExtensions[0]);
        // 	}
        // 	else if (enemyRamp){
        // 	    creep.moveTo(enemyRamp);
        // 	    creep.attack(enemyRamp);
        // 	}
        // 	        	        	else if (enemyRamp){
        // 	    creep.moveTo(enemyRamp);
        // 	    creep.attack(enemyRamp);
        // 	}
        	        	else if (enemyController[0].level == 0 && enemyController[0].owner== undefined){
        	    creep.moveTo(enemyController[0]);
        	    creep.claimController(enemyController[0]);
        	}
        	else{
        	    creep.moveTo( Game.flags['Invasion2'])
        	}
        	
        // 	if(enemyController[0].ticksToDowngrade == 5){
        // 	    Game.notify('Invasion spinning up.');
        // 	}
        }
    	
	    
    }
    if (creep.memory.role == 'archer'){
        Game.creeps[name].moveTo(Game.flags[creep.memory.position]);
        var target = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
         var enemyRamp = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_STORAGE }})[0]
    	if(target) {
    		creep.rangedAttack(target[0]);
	    }
	    if (enemyRamp){
	        creep.rangedAttack(enemyRamp)
	    }
	    
        
    }
    if (creep.memory.role == 'deepMiner'){
        if (creep.memory.target == undefined){
            if (Game.flags['Invasion1'].roomName == creep.room.name){
                var sources = creep.room.find(FIND_SOURCES);
                creep.moveTo(sources[creep.memory.position]);
                creep.harvest(sources[creep.memory.position])
            }
            else {
                creep.moveTo(Game.flags['Invasion1']);
            }
        }
        else{
            if (Game.flags[creep.memory.target].roomName == creep.room.name){
                var sources = creep.room.find(FIND_SOURCES);
                creep.moveTo(sources[creep.memory.position]);
                creep.harvest(sources[creep.memory.position])
            }
            else {
                creep.moveTo(Game.flags[creep.memory.target]);
            }
        }
        
    }
    if (creep.memory.role == 'starter'){
        var storage = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_STORAGE }})[0]
        if (Game.flags['Build3'].roomName != creep.room.name){
            creep.moveTo(Game.flags['Build3']);
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
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
            }
            if (creep.memory.state == 1){
                        	var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        		if(targets.length) {
        			creep.moveTo(targets[0]);
        			creep.build(targets[0]);
        		}
        		else if (storage){
        		                
                creep.moveTo(storage);
        		creep.transferEnergy(storage);
            
        		}
        		else{
        		    creep.moveTo(creep.room.controller);
        		    creep.upgradeController(creep.room.controller);
        		}
            }
        }
    }
    
    if (creep.memory.role == 'starter2'){
        var storage = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_STORAGE }})[0]
        if (Game.flags['Build3'].roomName != creep.room.name){
            creep.moveTo(Game.flags['Build3']);
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
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
                if (sources[0]){
                    creep.moveTo(sources[0]);
            		creep.harvest(sources[0]);
                }
            }
            if (creep.memory.state == 1){
                        	var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        		if(targets.length) {
        			creep.moveTo(targets[0]);
        			creep.build(targets[0]);
        		}
        // 		else if (storage){
        		                
        //         creep.moveTo(storage);
        // 		creep.transferEnergy(storage);
            
        // 		}
        		else{
        		    creep.moveTo(creep.room.controller);
        		    creep.upgradeController(creep.room.controller);
        		}
            }
        }
    }
    
    if (creep.memory.role == 'invader2'){
        var flagTarget = Game.flags['Invasion3'].pos.findInRange(FIND_STRUCTURES, 0)
    	

    	if (flagTarget.length){
    	    creep.moveTo(flagTarget[0]);
    	    creep.attack(flagTarget[0])
    	}
    	else{
            creep.moveTo(Game.flags['Invasion3']);
    	}
    }
     if (creep.memory.role == 'invader3'){
        if (creep.memory.state == undefined){
            creep.memory.state = 1;
        }
        if (creep.hits <= (creep.hitsMax - 1000)){
            creep.memory.state = 0;
        }
        if (creep.hits == creep.hitsMax){
            creep.memory.state = 1;
        }
        
        
        if (creep.memory.state == 0){
            creep.moveTo(Game.flags['heal1']);
        }
        
        else{
        
            if (Game.flags['POint1'].roomName != creep.room.name){
                creep.moveTo(Game.flags['POint1']);
            }
            
            else{
            	var hostiles = creep.room.find(FIND_HOSTILE_CREEPS);
            	var enemySpawns = creep.room.find(FIND_HOSTILE_SPAWNS);
            	var enemyController = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_CONTROLLER }});
            	var enemyExtensions = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION}});
            	var enemyRamp = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_RAMPART }})[0]
            	
            	var flagTarget = Game.flags['POint1'].pos.findInRange(FIND_STRUCTURES, 0)
            	
            	var hostileCreepsAREA = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 1);
            	
            	if (flagTarget.length){
            	    creep.moveTo(flagTarget[0]);
            	    creep.attack(flagTarget[0])
            	}
            // 	  else if (enemyExtensions.length){
            // 	    creep.moveTo(enemyExtensions[0]);
            // 	    creep.attack(enemyExtensions[0]);
            // 	}
            	
            // 	else if (hostileCreepsAREA.length){
            // 	    creep.moveTo(hostileCreepsAREA[0]);
            // 	    creep.attack(hostileCreepsAREA[0]);
            // 	}
            	
            	else if (enemySpawns.length){
            	    creep.moveTo(enemySpawns[0]);
            	    creep.attack(enemySpawns[0]);
            	}
            
            // 	else if (hostiles.length) {
            	    
            // 		creep.moveTo(hostiles[0]);
            // 		creep.attack(hostiles[0]);
            // 	}
            	else if (enemyExtensions.length){
            	    creep.moveTo(enemyExtensions[0]);
            	    creep.attack(enemyExtensions[0]);
            	}
            // 	else if (enemyRamp){
            // 	    creep.moveTo(enemyRamp);
            // 	    creep.attack(enemyRamp);
            // 	}
            // 	        	        	else if (enemyRamp){
            // 	    creep.moveTo(enemyRamp);
            // 	    creep.attack(enemyRamp);
            // 	}
            // 	        	else if (enemyController[0].level == 0 && enemyController[0].owner== undefined){
            // 	   // creep.moveTo(enemyController[0]);
            // 	   // creep.claimController(enemyController[0]);
            // 	}
            	else{
            	    creep.moveTo( Game.flags['POint1'])
            	}
            	
            // 	if(enemyController[0].ticksToDowngrade == 5){
            // 	    Game.notify('Invasion spinning up.');
            // 	}
            }
        }
    	
	    
    }
    
    if (creep.memory.role == 'healer'){
        if (Game.flags['heal1'].roomName != creep.room.name){
            creep.moveTo(Game.flags['heal1']);
        }
        else{
        var healyCreeps = Game.flags['heal1'].pos.findInRange(FIND_MY_CREEPS, 2);
        for (var i = 0; i < healyCreeps.length; i++){
            if (healyCreeps[i].hits < healyCreeps[i].hitsMax){
                creep.moveTo(healyCreeps[i]);
                creep.heal(healyCreeps[i]);
            }
            else {
                creep.moveTo(Game.flags['heal1']);
            }
        }
        if (healyCreeps.length == 0){
                creep.moveTo(Game.flags['heal1']);
            
        }
        }

    }
    
     if (creep.memory.role == 'dummy'){

            creep.moveTo(Game.flags['dum1']);


    }
        
    
}

//Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], 'Worker1' );