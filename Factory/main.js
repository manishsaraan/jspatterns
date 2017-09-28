var Task = require('./task');
var repoFactory = require('./repoFactoryWithCache');
var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

task2.save();
task1.save();