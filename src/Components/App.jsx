import React from 'react';
import Header from './Header';
import Section from './Section';  // Importing Section directly

const App = () => {
  return (
    <div className="mx-[1.5rem] my-[.5rem] max-w-85 content-center max-w-[74rem] mx-auto">
      <Header />
      <Section contentType={'world'} />
    </div>
  );
}

export default App;
