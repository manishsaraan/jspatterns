var Repo = function(){
	var called = 0;
	var save = function(task){
		called++;
		console.log('saveing '+task+' called '+called+" times");
	}
	console.log('neweing up task repo');
	return {
		save: save
	}
}
module.exports = Repo();