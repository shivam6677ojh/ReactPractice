// ...existing code...
import React, { useState } from 'react';

const Toggle = ({ checked, onChange }) => {
  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChange(!checked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      onKeyDown={handleKey}
      className={`inline-flex items-center gap-3 focus:outline-none`}
    >
      <span className={`relative inline-block w-14 h-8 rounded-full p-1 transition-colors duration-200 ${checked ? 'bg-green-500' : 'bg-gray-300'}`}>
        <span className={`block bg-white w-6 h-6 rounded-full shadow transform transition-transform duration-200 ${checked ? 'translate-x-6' : 'translate-x-0'}`} />
      </span>
      <span className="select-none text-sm font-medium text-gray-800">{checked ? 'On' : 'Off'}</span>
    </button>
  );
};

function App() {
  const [on, setOn] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 bg-white rounded-lg shadow-md flex items-center gap-6">
        <Toggle checked={on} onChange={setOn} />
        <div className="text-sm">
          <div className="font-medium">Status</div>
          <div className="text-gray-600">{on ? 'On' : 'Off'}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
