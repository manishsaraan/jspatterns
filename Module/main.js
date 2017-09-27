var Repo = require("./taskRepository");
var Task = require("./Task");
var Task1 = new Task(Repo.get("1"));
//calling complete from task.js
Task1.complete();
Task1.save();