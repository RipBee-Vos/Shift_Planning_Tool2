// components/BackButton.jsx
import { useRouter } from 'next/router';

export default function BackButton({ label = '← Back' }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
      {label}
    </button>
  );
}
