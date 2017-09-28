var myrepo = require('./repo');
var taskHandler = function(){
	return {
		save: function(){
			myrepo.save('feom task handelr');
		}
	}
}
module.exports = taskHandler();