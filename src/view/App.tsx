import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HandleStudent from './ListStudent/HandleStudent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
           Danh sách sinh viên
        </h1>
        <HandleStudent />
          
      </header>
    </div>
  );
}

export default App;
