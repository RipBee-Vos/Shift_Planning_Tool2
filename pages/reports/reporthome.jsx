// pages/reports/reporthome.jsx
import Link from 'next/link';

export default function ReportsHome() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Reports</h2>
      <ul>
        <li>
          <Link href="/reports/shiftsummary">Shift Summary</Link>
        </li>
        {/* More reports if needed */}
      </ul>
    </div>
  );
}
