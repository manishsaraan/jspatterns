var repo = function() {
       
        var db = { dbName:'taskDB',host:'localhost',username:'root'}
        var get = function(id) {        
            console.log('getting task ' + id + ' from db '+db.dbName);
            return {
                name: 'new task from db'
            }
        };

        var save = function(task) {
            console.log("saving " + task.name + " into the database");
        }
    return {
        get: get,
        save: save
    }
}

module.exports = repo();