import './index.scss';
import React from 'react';
import GeneratedPassword from './Components/GeneratedPassword';
import PasswordGenerator from './Components/PasswordGenerator';

class App extends React.Component {
  render(){
  return (
    <div className="page-container">
      <div id="page-title">
        <span>Password Generator</span>
      </div>
      <main className="main-container">
        <GeneratedPassword/>
        <PasswordGenerator/>
      </main>
     
    </div>
  );
}
}

export default App;
