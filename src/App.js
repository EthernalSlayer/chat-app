import React from 'react';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact name="Georgia Fletcher" avatar="https://randomuser.me/api/portraits/women/40.jpg" online={true} />
      <Contact name="Ana Hale" avatar="https://randomuser.me/api/portraits/women/15.jpg" online={false} />
      <Contact name="Ben Young" avatar="https://randomuser.me/api/portraits/men/65.jpg" online={true} />
    </div>
  );
}

export default App;
