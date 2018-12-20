module.exports = function(oldData){
	// The function of scan mind is to gather information for making any choices.
	// The object returned is bits of information used by the other minds
	// to determine actions.
	for(spawn in Game.spawns){
		var hostiles = Game.spawns[spawn].room.find((FIND_HOSTILE_CREEPS));
		var myCreeps = Game.spawns[spawn].room.find((FIND_MY_CREEPS));
		
	}
}