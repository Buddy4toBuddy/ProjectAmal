import React, { useState } from "react";
import axios from "axios";
import "./Table.css";

const Table = () => {
  const [addRow, setAddRow] = useState(1);
  const [form, setForm] = useState({
    task: "",
    discription: "",
    assigned: "",
    duration: "",
    completion_date: "",
    created_date: "",
    parent_task: "",
  });

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setForm((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  
  const saveForm = (event) => {
    event.preventDefault();
    console.log("form", form);
    var data ={
        "task": form.task,
        "discription": form.discription,
        "assigned": form.assigned,
        "duration": form.duration,
        "completion_date": form.completion_date,
        "created_date": form.created_date,
        "parent_task": form.parent_task,
      }
      return axios.post('http://localhost:5000/task', data)
  }

  return (
    <div>
      <table className="table  table-hover">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Task</th>
            <th>Discription</th>
            <th>Assigned To</th>
            <th>Duration</th>
            <th>Completion Date</th>
            <th>Created Date</th>
            <th>Parent Task</th>
            <th>
              <input
                type="button"
                className="button btn btn-primary buttn"
                value="Add"
                onClick={() => setAddRow(addRow + 1)}
              />
            </th>
            <th>
              <input
                type="button"
                className="button btn btn-primary buttn"
                value="Delete"
                onClick={() => setAddRow(addRow - 1)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(addRow)].map((elementInArray, index) => {
            return (
              <tr>
                <th scope="row">{index}</th>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Task"
                    aria-label="default input example"
                    onChange={inputHandle}
                    name="task"
                  />
                </td>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Discription"
                    aria-label="default input example"
                    onChange={inputHandle}
                    name="discription"
                  />
                </td>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Assigned To"
                    aria-label="default input example"
                    onChange={inputHandle}
                    name="assigned"
                  />
                </td>
                <td>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="Duration"
                    aria-label="default input example"
                    onChange={inputHandle}
                    name="duration"
                  />
                </td>
                <td>
                  <input
                    class="form-control"
                    type="date"
                    placeholder="Completion Date"
                    aria-label="default input example"
                    onChange={inputHandle}
                    name="completion_date"
                  />
                </td>
                <td>
                  <input
                    class="form-control"
                    type="date"
                    placeholder="Created Date"
                    aria-label="default input example"
                    onChange={inputHandle}
                    name="created_date"
                  />
                </td>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Parent Task"
                    aria-label="default input example"
                    onChange={inputHandle}
                    name="parent_task"
                  />
                </td>
                <th>
                  <input
                    type="button"
                    className="button btn btn-primary"
                    value="Sub Task"
                    onClick={() => setAddRow(addRow + 1)}
                  />
                </th>
                <th>
                    <input
                        type="submit"
                        className="button btn btn-primary"
                        value="Submit"
                        onClick={saveForm}
                    />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
};

export default Table;
