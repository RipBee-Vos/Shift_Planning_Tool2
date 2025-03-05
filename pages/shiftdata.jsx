import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ShiftData() {
  const router = useRouter();

  // Example states
  const [foodConsumablesHours, setFoodConsumablesHours] = useState(0);
  const [generalMerchHours, setGeneralMerchHours] = useState(0);

  // Derived states
  const totalWorkLoadHours = foodConsumablesHours + generalMerchHours;

  // We might get totalAssociateHours from Roster or an API
  const [totalAssociateHours, setTotalAssociateHours] = useState(0);

  const associateHoursToWorkLoad = totalAssociateHours - totalWorkLoadHours;

  const resetData = () => {
    setFoodConsumablesHours(0);
    setGeneralMerchHours(0);
    // etc.
  };

  const saveData = () => {
    // Save logic here (to server, localStorage, etc.)
    alert('Shift Data saved!');
  };

  return (
    <div className="bg-white p-4 shadow-md rounded">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Back to Previous Page
      </button>

      <h2 className="text-xl font-bold mb-4 text-blue-700">Shift Data</h2>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="block">Food & Consumables Hours</label>
          <input
            type="number"
            className="border p-1 bg-yellow-100"
            value={foodConsumablesHours}
            onChange={(e) => setFoodConsumablesHours(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block">General Merch Hours</label>
          <input
            type="number"
            className="border p-1 bg-yellow-100"
            value={generalMerchHours}
            onChange={(e) => setGeneralMerchHours(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="block font-semibold">Total Associate Hours</label>
          <input
            type="number"
            className="border p-1 bg-blue-100"
            value={totalAssociateHours}
            onChange={(e) => setTotalAssociateHours(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block font-semibold">Total Workload Hours</label>
          <input
            type="number"
            disabled
            className="border p-1 bg-blue-100"
            value={totalWorkLoadHours}
          />
        </div>
        <div>
          <label className="block font-semibold">Associate Hours to Workload</label>
          <input
            type="number"
            disabled
            className="border p-1 bg-blue-100"
            style={{ color: associateHoursToWorkLoad < 0 ? 'red' : 'green' }}
            value={associateHoursToWorkLoad}
          />
        </div>
      </div>

      <div className="space-x-2">
        <button
          onClick={resetData}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Reset
        </button>
        <button
          onClick={saveData}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
