//using class instead of constructor in es2015
'use strict';
class Task {
	constructor(name){
		this.name = name;
		this.completed = false;
	}

	complete(){
		console.log('completing task '+this.name);
		this.completed = true;
	}

	save(){
		console.log("saving task "+ this.name);
	}
}

var Task1 = new Task('create a demo constructor');
var Task2 = new Task('create a demo constructor2');
var Task3 = new Task('create a demo constructor3');
var Task4 = new Task('create a demo constructor4');
Task1.complete();
Task2.save();

Task3.save();

Task4.save();

