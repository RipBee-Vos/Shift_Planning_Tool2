import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ShiftAssignments() {
  const router = useRouter(); // so we can call router.back()

  const [assignments, setAssignments] = useState([
    {
      associateName: 'John Doe',
      assignment1: '',
      assignment2: '',
      assignment3: '',
    },
  ]);

  const departments = [
    'Foods',
    'Liquids',
    'Frozen',
    'Dairy',
    'Infants',
    'Paper',
    // ...
  ];

  const addRow = () => {
    setAssignments((prev) => [
      ...prev,
      {
        associateName: '',
        assignment1: '',
        assignment2: '',
        assignment3: '',
      },
    ]);
  };

  const removeRow = (index) => {
    const updated = [...assignments];
    updated.splice(index, 1);
    setAssignments(updated);
  };

  const handleChange = (idx, field, val) => {
    const updated = [...assignments];
    updated[idx][field] = val;
    setAssignments(updated);
  };

  const totalCount = assignments.length;

  return (
    <div className="bg-white p-4 shadow-md rounded">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Back to Previous Page      </button>

      <h2 className="text-xl font-bold mb-4 text-blue-700">
        Shift Assignments
      </h2>

      <table className="min-w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Associate Name</th>
            <th className="border p-2">Assignment 1</th>
            <th className="border p-2">Assignment 2</th>
            <th className="border p-2">Assignment 3</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((row, idx) => (
            <tr key={idx}>
              <td className="border p-2 bg-yellow-100">
                <input
                  type="text"
                  className="border w-full"
                  value={row.associateName}
                  onChange={(e) =>
                    handleChange(idx, 'associateName', e.target.value)
                  }
                />
              </td>
              <td className="border p-2 bg-yellow-100">
                <select
                  className="border w-full"
                  value={row.assignment1}
                  onChange={(e) =>
                    handleChange(idx, 'assignment1', e.target.value)
                  }
                >
                  <option value="">-- Select --</option>
                  {departments.map((dep) => (
                    <option key={dep} value={dep}>
                      {dep}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border p-2 bg-yellow-100">
                <select
                  className="border w-full"
                  value={row.assignment2}
                  onChange={(e) =>
                    handleChange(idx, 'assignment2', e.target.value)
                  }
                >
                  <option value="">-- Select --</option>
                  {departments.map((dep) => (
                    <option key={dep} value={dep}>
                      {dep}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border p-2 bg-yellow-100">
                <select
                  className="border w-full"
                  value={row.assignment3}
                  onChange={(e) =>
                    handleChange(idx, 'assignment3', e.target.value)
                  }
                >
                  <option value="">-- Select --</option>
                  {departments.map((dep) => (
                    <option key={dep} value={dep}>
                      {dep}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border p-2 text-center">
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => removeRow(idx)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5} className="p-2 text-center">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={addRow}
              >
                + Add Row
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Total Count: </strong> {totalCount}
      </p>
    </div>
  );
}
