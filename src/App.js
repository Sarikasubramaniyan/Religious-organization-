import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home';
import Dn1 from './pages/dn1';
import Dn2 from './pages/dn2';

function App() {
  return (
    <div>
      <Home />
      <Dn1 />
      <Dn2 />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

