var Task = require('./task');
var repoFactory = require('./repoFactory');
var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(90);

task2.save();
task1.save();