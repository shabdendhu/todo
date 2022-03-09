const controllers=require("../controllers/index")
module.exports=(app,mainpath)=>{
    app.route(mainpath+'/get-all-tasks').get(controllers.get_all_tasks)
}