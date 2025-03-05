import React, { useState } from 'react';
import BackButton from '../components/BackButton';

// 1) ROSTER SECTION
function RosterSection() {
  const [roster, setRoster] = useState([
    { name: 'Jane Doe', finalHours: 6 /* plus other fields */ },
  ]);

  // ...Put all your Roster logic here...
  // e.g., handleCheckboxChange, calculateHours, removeAssociate, etc.

  return (
    <div className="bg-white p-4 shadow-md rounded mb-6">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Roster</h2>
      <p>(Roster UI goes here)</p>
    </div>
  );
}

// 2) GROCERY HEAT MAP SECTION
function GroceryHeatMapSection() {
  const [lanes, setLanes] = useState([
    {
      laneNumber: 1,
      aisles: ['A1', 'A6'],
      cph: 47,
      assignment: '',
      caseTotals: [0, 0],
      combinedTotals: 0,
      totalHours: 0,
    },
    {
      laneNumber: 2,
      aisles: ['A8', 'A9'],
      cph: 47,
      assignment: '',
      caseTotals: [0, 0],
      combinedTotals: 0,
      totalHours: 0,
    },
  ]);

  // ...Put all GroceryHeatMap logic here...
  // e.g. handleCaseTotalsChange, handleAssignmentChange, handleCPHChange

  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Grocery Heat Map</h2>
      <p>(Grocery Heat Map table UI goes here)</p>
    </div>
  );
}

// 3) ONE DEFAULT EXPORT - The actual Next.js page
//    This page merges Roster and Grocery Heat Map together.
export default function CombinedPage() {
  return (
    <div className="p-4">
      {/* If you want a universal Back button */}
      <BackButton label="← Back to Previous Page" />

      {/* Roster Section */}
      <RosterSection />

      {/* Grocery HeatMap Section below */}
      <div className="mt-6">
        <GroceryHeatMapSection />
      </div>
    </div>
  );
}
