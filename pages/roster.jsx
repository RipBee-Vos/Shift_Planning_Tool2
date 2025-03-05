import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Roster() {
  const router = useRouter();

  // Example: track each associate with checkboxes
  const [roster, setRoster] = useState([
    {
      name: '',
      earlyIn8: false,
      earlyIn830: false,
      earlyIn9: false,
      callOut: false,
      lc1: false,
      lc2: false,
      lc3: false,
      lc4: false,
      finalHours: 6, // base
    },
  ]);

  const baseHours = 6;

  const handleCheckboxChange = (idx, field, value) => {
    const updated = [...roster];
    updated[idx][field] = value;
    updated[idx].finalHours = calculateHours(updated[idx]);
    setRoster(updated);
  };

  const calculateHours = (associate) => {
    // This mirrors your formula:
    // base 6 + (2 if earlyIn8 = true) + etc...
    let hours = baseHours;
    if (associate.earlyIn8) hours += 2;
    if (associate.earlyIn830) hours += 1.5;
    if (associate.earlyIn9) hours += 1;
    if (associate.callOut) hours -= 6;
    if (associate.lc1) hours -= 2.1;
    if (associate.lc2) hours -= 1.5;
    if (associate.lc3) hours -= 0.9;
    if (associate.lc4) hours -= 0.3;
    return hours;
  };

  const addAssociate = () => {
    setRoster([
      ...roster,
      {
        name: '',
        earlyIn8: false,
        earlyIn830: false,
        earlyIn9: false,
        callOut: false,
        lc1: false,
        lc2: false,
        lc3: false,
        lc4: false,
        finalHours: baseHours,
      },
    ]);
  };

  const removeAssociate = (index) => {
    const updated = [...roster];
    updated.splice(index, 1);
    setRoster(updated);
  };

  // Totals
  const totalCount = roster.length;
  const hoursWorkedByAssociate = totalCount * baseHours;
  const associateExtraHours = roster.reduce(
    (sum, assoc) => sum + (assoc.finalHours - baseHours),
    0
  );
  const finalTotalHours = hoursWorkedByAssociate - associateExtraHours;

  return (
    <div className="bg-white p-4 shadow-md rounded">
      {/* Back button at the top */}
      <button
        onClick={() => router.back()}
        className="mb-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
       ← Back to Previous Page
      </button>

      <h2 className="text-xl font-bold mb-4 text-blue-700">Roster</h2>

      <table className="min-w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Associate Name</th>
            <th className="border p-2">Early In 8</th>
            <th className="border p-2">Early In 8:30</th>
            <th className="border p-2">Early In 9</th>
            <th className="border p-2">Call Out</th>
            <th className="border p-2">LC1</th>
            <th className="border p-2">LC2</th>
            <th className="border p-2">LC3</th>
            <th className="border p-2">LC4</th>
            <th className="border p-2">Final Hours</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((assoc, idx) => (
            <tr key={idx}>
              <td className="border p-2 bg-yellow-100">
                <input
                  type="text"
                  className="border p-1"
                  value={assoc.name}
                  onChange={(e) => {
                    const updated = [...roster];
                    updated[idx].name = e.target.value;
                    setRoster(updated);
                  }}
                />
              </td>
              <td className="border p-2 bg-yellow-100 text-center">
                <input
                  type="checkbox"
                  checked={assoc.earlyIn8}
                  onChange={(e) =>
                    handleCheckboxChange(idx, 'earlyIn8', e.target.checked)
                  }
                />
              </td>
              <td className="border p-2 bg-yellow-100 text-center">
                <input
                  type="checkbox"
                  checked={assoc.earlyIn830}
                  onChange={(e) =>
                    handleCheckboxChange(idx, 'earlyIn830', e.target.checked)
                  }
                />
              </td>
              <td className="border p-2 bg-yellow-100 text-center">
                <input
                  type="checkbox"
                  checked={assoc.earlyIn9}
                  onChange={(e) =>
                    handleCheckboxChange(idx, 'earlyIn9', e.target.checked)
                  }
                />
              </td>
              <td className="border p-2 bg-yellow-100 text-center">
                <input
                  type="checkbox"
                  checked={assoc.callOut}
                  onChange={(e) =>
                    handleCheckboxChange(idx, 'callOut', e.target.checked)
                  }
                />
              </td>
              <td className="border p-2 bg-yellow-100 text-center">
                <input
                  type="checkbox"
                  checked={assoc.lc1}
                  onChange={(e) =>
                    handleCheckboxChange(idx, 'lc1', e.target.checked)
                  }
                />
              </td>
              <td className="border p-2 bg-yellow-100 text-center">
                <input
                  type="checkbox"
                  checked={assoc.lc2}
                  onChange={(e) =>
                    handleCheckboxChange(idx, 'lc2', e.target.checked)
                  }
                />
              </td>
              <td className="border p-2 bg-yellow-100 text-center">
                <input
                  type="checkbox"
                  checked={assoc.lc3}
                  onChange={(e) =>
                    handleCheckboxChange(idx, 'lc3', e.target.checked)
                  }
                />
              </td>
              <td className="border p-2 bg-yellow-100 text-center">
                <input
                  type="checkbox"
                  checked={assoc.lc4}
                  onChange={(e) =>
                    handleCheckboxChange(idx, 'lc4', e.target.checked)
                  }
                />
              </td>
              <td className="border p-2 bg-blue-100 text-center">
                {assoc.finalHours.toFixed(2)}
              </td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => removeAssociate(idx)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={11} className="text-center p-2">
              <button
                onClick={addAssociate}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                + Add Associate
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mb-4">
        <p>
          <strong>Total Count: </strong>
          {totalCount}
        </p>
        <p>
          <strong>Hours Worked by Associate: </strong>
          {hoursWorkedByAssociate.toFixed(2)}
        </p>
        <p
          style={{
            color: associateExtraHours < 0 ? 'red' : 'green',
          }}
        >
          <strong>Associate Extra Hours: </strong>
          {associateExtraHours.toFixed(2)}
        </p>
        <p>
          <strong>Final Total Hours: </strong>
          {finalTotalHours.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
