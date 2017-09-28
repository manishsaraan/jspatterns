var repoFactory = function(){
   this.getRepo = function(repoType){

   	  if(repoType==="task"){
        if(this.taskRepo){     
           console.log('getting from cache')            
         return  this.taskRepo;
        }
        else{
           this.taskRepo = require('./taskRepo')();        
         return  this.taskRepo;
        }
   	  	
   	  }
   	  if(repoType==="user"){
   	  	 var taskRepository = require('./userRepo')();
   	  	 return taskRepository;
   	  }
         if(repoType==="project"){
          var taskRepository = require('./projectRepo')();
          return taskRepository;
        }
   }
}
module.exports = new repoFactory();