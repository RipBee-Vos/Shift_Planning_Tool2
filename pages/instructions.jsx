import BackButton from '../components/BackButton';

export default function Instructions() {
  return (
    <div className="p-4">
      <BackButton label="← Back to Previous Page" />
      
      <div className="bg-white rounded shadow p-4 mt-4">
        <h2 className="text-2xl font-bold text-[#0072CE] mb-4">Instructions</h2>
        <p className="text-gray-800">
          Welcome to the Walmart Shift Planning Tool. Follow these steps
          to manage your shifts effectively...
        </p>
        {/* etc. */}
      </div>
    </div>
  );
}
