// pages/index.js

import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Welcome to The Shift Planning Tool</h1>
      <ul>
        <li>
          <Link href="/instructions">Instructions</Link>
        </li>
        <li>
          <Link href="/shiftdata">Shift Data</Link>
        </li>
        <li>
          <Link href="/roster">Roster</Link>
        </li>
        <li>
          <Link href="/shiftassignments">Shift Assignments</Link>
        </li>
        <li>
          <Link href="/groceryheatmap">Grocery Heat Map</Link>
        </li>
        <li>
          <Link href="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
}
