var myrepo = require('./repo');
var taskHandler = function(){
	return {
		exicute: function(){
			myrepo.save('feom task exicute handler');
		}
	}
}
module.exports = taskHandler();