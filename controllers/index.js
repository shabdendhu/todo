const response = require("../response");
const moment =require('moment')
let data = [
  {
    id: 1,
    taskName: "UX For App",
    remaingTime: "30Days Left",
    description: "xyz",
    date: "10-12-2020",
    time:"20-03 pm",
    priority: "normal",
  },
  {
    id: 2,
    taskName: "UX For App",
    remaingTime: "30Days Left",
    description: "xyz",
    date: "10-12-2020",
    time:"20-03 pm",
    priority: "heigh",
  },
  {
    id: 3,
    taskName: "UX For App",
    remaingTime: "30Days Left",
    description: "xyz",
    date: "10-12-2020",
    time:"20-03 pm",
    priority: "normal",
  },
  {
    id: 4,
    taskName: "UX For App",
    remaingTime: "30Days Left",
    description: "xyz",
    date: "10-12-2020",
    time:"20-03 pm",
    priority: "normal",
  },
  {
    id: 5,
    taskName: "UX For App",
    remaingTime: "30Days Left",
    description: "xyz",
    date: "10-12-2020",
    time:"20-03 pm",
    priority: "heigh",
  },
  {
    id: 6,
    taskName: "UX For App",
    remaingTime: "30Days Left",
    description: "xyz",
    date: "10-12-2020",
    time:"20-03 pm",
    priority: "low",
  },
  {
    id: 7,
    taskName: "UX For App",
    remaingTime: "30Days Left",
    description: "xyz",
    date: "10-12-2020",
    time:"20-03 pm",
    priority: "low",
  },
];

class Todo {
  async get_all_tasks(req, res) {
    // data.map((e,i)=>(
    //   e.remaingTime=moment(e.endDate).diff(e.date,'hours')
    // ))
    res.json(response(true, "fetch successfully", data));
  }
  async add_new_task(req, res) {
    data.push(req.body);
    res.json(response(true, "added successfully", {}));
  }
}
module.exports = new Todo();
