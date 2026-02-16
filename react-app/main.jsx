import React from 'react';
import ReactDOM from 'react-dom/client';

const region = import.meta.env.VITE_REGION || "UNKNOWN";

function App() {
  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h1>🌍 Azure Geo Routing Demo</h1>
      <h2>Region: {region}</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
