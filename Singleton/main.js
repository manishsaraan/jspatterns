var taskHandler = require('./taskHandler');
var taskHandlerExicute = require('./taskHandlerExicute');

var myrepo = require('./repo');

myrepo.save('From main repo');
myrepo.save('From main repo');
myrepo.save('From main repo');

taskHandler.save();
taskHandler.save();

taskHandler.save();

taskHandler.save();

taskHandlerExicute.exicute();

