const response = require("../response");

class Todo {
  async get_all_tasks(req, res) {
    let data = [
      {
        id: 1,
        taskName: "UX For App",
        remaingTime: "30Days Left",
        description: "xyz",
        startDate: "10-12-2020",
        endDate: "01-01-2022",
      },
      {
        id: 2,
        taskName: "UX For App",
        remaingTime: "30Days Left",
        description: "xyz",
        startDate: "10-12-2020",
        endDate: "01-01-2022",
      },
      {
        id: 3,
        taskName: "UX For App",
        remaingTime: "30Days Left",
        description: "xyz",
        startDate: "10-12-2020",
        endDate: "01-01-2022",
      },
      {
        id: 4,
        taskName: "UX For App",
        remaingTime: "30Days Left",
        description: "xyz",
        startDate: "10-12-2020",
        endDate: "01-01-2022",
      },
    ];
    res.json(response(true, "fetch successfully", data));
  }
}
module.exports = new Todo();
