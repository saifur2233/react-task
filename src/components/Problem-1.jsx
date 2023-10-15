import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "Active" },
    { name: "Task 2", status: "Completed" },
    { name: "Task 4", status: "Completed" },
    { name: "Task 3", status: "Pending" },
  ]);
  const [formData, setFormData] = useState({ name: "", status: "" });

  const handleClick = (val) => {
    setShow(val);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, formData]);
    setFormData({ name: "", status: "" });
  };

  const filteredAndSortedTasks = tasks
    .filter((task) => {
      if (show === "all") {
        return true;
      } else {
        return task.status === show;
      }
    })
    .sort((taskA, taskB) => {
      if (show === "all") {
        return tasks.indexOf(taskA) - tasks.indexOf(taskB);
      } else {
        if (taskA.status === "Active" && taskB.status !== "Active") {
          return -1;
        } else if (taskA.status === "Completed" && taskB.status !== "Active") {
          return -1;
        } else if (taskB.status === "Active" && taskA.status !== "Active") {
          return 1;
        } else if (taskB.status === "Completed" && taskA.status !== "Active") {
          return 1;
        } else {
          return tasks.indexOf(taskA) - tasks.indexOf(taskB);
        }
      }
    });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleFormSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
