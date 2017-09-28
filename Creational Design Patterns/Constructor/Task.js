var Task = function (name){
	this.name = name;
	this.completed = false;
	
	
}

//creating function in prototype
Task.prototype.complete = function(){
		console.log('completing task '+this.name);
		this.completed = true;
	}
Task.prototype.save = function(){
		console.log("saving task "+ this.name);
	}
var Task1 = new Task('create a demo constructor');
var Task2 = new Task('create a demo constructor2');

var Task3 = new Task('create a demo constructor3');

var Task4 = new Task('create a demo constructor4');

Task1.complete();
Task2.save();

Task3.save();

Task4.save();

