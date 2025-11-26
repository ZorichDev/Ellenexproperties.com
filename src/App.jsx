import React from "react"; // ⚠️ Needed for JSX
import { useState } from 'react';
import reactLogo from './assets/img/logo.png';
import EllenexProperties from './assets/EllenexProperties.jsx'; // ⚠️ Include extension if needed
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EllenexProperties />
    </>
  );
}

export default App;
