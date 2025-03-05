import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const API_URL = "https://shift-planning-backend.azurewebsites.net";

function ShiftPlanner() {
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({ employee: "", shift: "", hours: "", extra: "" });
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/shifts`)
      .then(response => setShifts(response.data))
      .catch(error => setError("Failed to fetch shifts"));
  }, []);

  const handleInputChange = (e) => {
    setNewShift({ ...newShift, [e.target.name]: e.target.value });
  };

  const addShift = () => {
    if (!newShift.employee || !newShift.shift || !newShift.hours) {
      setError("All fields must be filled");
      return;
    }
    axios.post(`${API_URL}/shifts`, newShift)
      .then(response => setShifts([...shifts, response.data]))
      .catch(error => setError("Failed to add shift"));
    setNewShift({ employee: "", shift: "", hours: "", extra: "" });
    setError(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Shift Planner</h1>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        <div className="col-md-3">
          <input className="form-control" name="employee" placeholder="Employee Name" value={newShift.employee} onChange={handleInputChange} />
        </div>
        <div className="col-md-3">
          <input className="form-control" name="shift" placeholder="Shift" value={newShift.shift} onChange={handleInputChange} />
        </div>
        <div className="col-md-2">
          <input className="form-control" name="hours" placeholder="Hours" type="number" value={newShift.hours} onChange={handleInputChange} />
        </div>
        <div className="col-md-2">
          <input className="form-control" name="extra" placeholder="Extra Hours" type="number" value={newShift.extra} onChange={handleInputChange} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={addShift}>Add Shift</button>
        </div>
      </div>
      <h2 className="mt-4">Shift List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Shift</th>
            <th>Hours</th>
            <th>Extra Hours</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift, index) => (
            <tr key={index}>
              <td>{shift.employee}</td>
              <td>{shift.shift}</td>
              <td>{shift.hours}</td>
              <td>{shift.extra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShiftPlanner;
