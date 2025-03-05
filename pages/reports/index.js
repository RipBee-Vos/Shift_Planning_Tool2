import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ReportsHome() {
  const router = useRouter();

  return (
    <div style={{ padding: '1rem' }}>
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: '1rem',
          backgroundColor: '#0072CE',
          color: '#fff',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        ← Back to Previous Page
      </button>

      <h2 style={{ marginBottom: '1rem' }}>Reports</h2>
      <ul>
        <li>
          <Link href="/reports/shiftsummary">Shift Summary</Link>
        </li>
        {/* Add more links for other reports as needed */}
      </ul>
    </div>
  );
}
