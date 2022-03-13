const controllers=require("../controllers/index")
module.exports=(app,mainpath)=>{
    app.route(mainpath+'/get-all-tasks').get(controllers.get_all_tasks)
    app.route(mainpath+'/add-new-task').post(controllers.add_new_task)
}