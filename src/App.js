import React from 'react';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact name="Georgia Fletcher" avatar="https://randomuser.me/api/portraits/women/40.jpg" online />
      <Contact name="Ana Hale" avatar="https://randomuser.me/api/portraits/women/15.jpg" />
      <Contact name="Ben Young" avatar="https://randomuser.me/api/portraits/men/65.jpg" online />
    </div>
  );
}

export default App;
