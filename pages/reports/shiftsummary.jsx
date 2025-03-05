import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ShiftSummary() {
  const router = useRouter(); // for the back button

  // Example states for hours
  const [totalAssociateHours, setTotalAssociateHours] = useState(0);
  const [totalWorkLoadHours, setTotalWorkLoadHours] = useState(0);

  // Computed difference
  const associateHoursToWorkLoad = totalAssociateHours - totalWorkLoadHours;
  
  // Departments Not Worked
  const [notWorked, setNotWorked] = useState([]);
  const departments = [
    'Grocery',
    'Frozen',
    'Dairy',
    'Infants',
    'Paper',
    'Kitchen & Dining',
    'Furniture & Luggage',
    'Toys',
    'L&G',
    'Seasonal',
    'Apparel',
    // ...
  ];

  // Shift Notes
  const [wins, setWins] = useState('');
  const [opportunities, setOpportunities] = useState('');
  const [barriers, setBarriers] = useState('');
  const [notes, setNotes] = useState('');

  // Extra fields
  const [hoursPVA, setHoursPVA] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [callOutPercent, setCallOutPercent] = useState(0);
  const [uLearnsCompleted, setULearnsCompleted] = useState(0);

  // Handlers
  const handleNotWorkedChange = (e, index) => {
    const updated = [...notWorked];
    updated[index] = e.target.value;
    setNotWorked(updated);
  };

  const addNotWorkedRow = () => {
    setNotWorked((prev) => [...prev, '']);
  };

  const removeNotWorkedRow = (index) => {
    const updated = [...notWorked];
    updated.splice(index, 1);
    setNotWorked(updated);
  };

  const handleEmailSummary = () => {
    // In real usage: open a mailto link or call a backend to send the email
    console.log('Email Summary triggered!');
    console.table({
      totalAssociateHours,
      totalWorkLoadHours,
      associateHoursToWorkLoad,
      notWorked,
      wins,
      opportunities,
      barriers,
      notes,
      hoursPVA,
      totalVolume,
      callOutPercent,
      uLearnsCompleted,
    });
    alert('Email Summary triggered! Check the console for data.');
  };

  return (
    <>
      {/* Set the page title in the browser tab */}
      <Head>
        <title>Shift Summary | Shift Planning Tool</title>
      </Head>

      <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded">
        {/* Back button using router.back() */}
        <button
          onClick={() => router.back()}
          className="mb-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
         ← Back to Previous Page
        </button>

        <h2 className="text-2xl font-bold mb-4 text-blue-700">Shift Summary</h2>

        {/* Hours Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block font-semibold">Total Associate Hours</label>
            <input
              type="number"
              className="w-full p-2 border bg-blue-100"
              value={totalAssociateHours}
              onChange={(e) => setTotalAssociateHours(Number(e.target.value) || 0)}
            />
          </div>
          <div>
            <label className="block font-semibold">Total Work Load Hours</label>
            <input
              type="number"
              className="w-full p-2 border bg-blue-100"
              value={totalWorkLoadHours}
              onChange={(e) => setTotalWorkLoadHours(Number(e.target.value) || 0)}
            />
          </div>
          <div>
            <label className="block font-semibold">Associate Hours to Work Load</label>
            <input
              type="number"
              disabled
              className="w-full p-2 border"
              value={associateHoursToWorkLoad}
              style={{
                backgroundColor: associateHoursToWorkLoad < 0 ? '#ffe6e6' : '#e6ffe6',
                color: associateHoursToWorkLoad < 0 ? 'red' : 'green',
              }}
            />
          </div>
        </div>

        {/* Departments Not Worked */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Departments Not Worked</h3>
          <table className="border w-full">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 border">Department</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notWorked.map((dept, idx) => (
                <tr key={idx}>
                  <td className="p-2 border bg-blue-100">
                    <select
                      className="w-full p-2 border"
                      value={dept}
                      onChange={(e) => handleNotWorkedChange(e, idx)}
                    >
                      <option value="">-- Select Department --</option>
                      {departments.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-2 border text-center">
                    <button
                      className="px-2 py-1 bg-red-500 text-white rounded"
                      onClick={() => removeNotWorkedRow(idx)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className="p-2 text-center">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={addNotWorkedRow}
                  >
                    + Add Department
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Extra Fields */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block font-semibold mb-2">Hours PVA (Yellow)</label>
            <input
              type="number"
              className="w-full p-2 border bg-yellow-100"
              value={hoursPVA}
              onChange={(e) => setHoursPVA(Number(e.target.value) || 0)}
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2">Total Volume (Yellow)</label>
            <input
              type="number"
              className="w-full p-2 border bg-yellow-100"
              value={totalVolume}
              onChange={(e) => setTotalVolume(Number(e.target.value) || 0)}
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2">Call Out % (Yellow)</label>
            <input
              type="number"
              className="w-full p-2 border bg-yellow-100"
              value={callOutPercent}
              onChange={(e) => setCallOutPercent(Number(e.target.value) || 0)}
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-2">ULearns Completed (Yellow)</label>
            <input
              type="number"
              className="w-full p-2 border bg-yellow-100"
              value={uLearnsCompleted}
              onChange={(e) => setULearnsCompleted(Number(e.target.value) || 0)}
            />
          </div>
        </div>

        {/* Shift Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-yellow-100 p-3">
            <label className="block font-semibold">Wins:</label>
            <textarea
              className="w-full border mt-1"
              rows={2}
              value={wins}
              onChange={(e) => setWins(e.target.value)}
            />
            <label className="block font-semibold mt-2">Opportunities:</label>
            <textarea
              className="w-full border mt-1"
              rows={2}
              value={opportunities}
              onChange={(e) => setOpportunities(e.target.value)}
            />
          </div>
          <div className="bg-yellow-100 p-3">
            <label className="block font-semibold">Barriers:</label>
            <textarea
              className="w-full border mt-1"
              rows={2}
              value={barriers}
              onChange={(e) => setBarriers(e.target.value)}
            />
            <label className="block font-semibold mt-2">Notes:</label>
            <textarea
              className="w-full border mt-1"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        {/* Email Shift Summary Button */}
        <div className="text-center">
          <button
            onClick={handleEmailSummary}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Email Shift Summary
          </button>
        </div>
      </div>
    </>
  );
}
