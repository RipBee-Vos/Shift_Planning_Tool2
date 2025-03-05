import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Instructions from './pages/Instructions';
import ShiftData from './pages/ShiftData';
import Roster from './pages/Roster';
import ShiftAssignments from './pages/ShiftAssignments';
import GroceryHeatMap from './pages/GroceryHeatMap';
import ReportsHome from './pages/Reports/ReportsHome';
import ShiftSummary from './pages/Reports/ShiftSummary';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-center">
          <h1 className="text-2xl font-bold text-blue-700">
            Shift Planning Tool
          </h1>
        </header>

        {/* Navigation Bar */}
        <nav className="bg-blue-50 py-3">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                to="/instructions"
                className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Instructions
              </Link>
            </li>
            <li>
              <Link
                to="/shift-data"
                className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Shift Data
              </Link>
            </li>
            <li>
              <Link
                to="/roster"
                className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Roster
              </Link>
            </li>
            <li>
              <Link
                to="/shift-assignments"
                className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Shift Assignments
              </Link>
            </li>
            <li>
              <Link
                to="/grocery-heat-map"
                className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Grocery Heat Map
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white"
              >
                Reports
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="p-6">
          <Routes>
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/shift-data" element={<ShiftData />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/shift-assignments" element={<ShiftAssignments />} />
            <Route path="/grocery-heat-map" element={<GroceryHeatMap />} />

            {/* Reports have sub-pages. We can nest them or use separate routes */}
            <Route path="/reports" element={<ReportsHome />} />
            <Route path="/reports/shift-summary" element={<ShiftSummary />} />

            {/* Default route */}
            <Route path="*" element={<Instructions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
