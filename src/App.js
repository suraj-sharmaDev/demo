import React from 'react';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
function App() {
  const [state, updateState] = React.useState(true);
  return (
    state ? <Student update={() => updateState(false)} /> : <Teacher/>
  );
}

export default App;
