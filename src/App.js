import React, { useEffect } from 'react';
import Main from './Main';

function App() {
  useEffect(() => {
    document.title = "Calculator";
  },[]);
  return (
    <div >
      <Main />
    </div>
  );
}

export default App;
