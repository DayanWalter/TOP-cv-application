import { useState } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import CV from './CV';

export default function App() {
  return (
    <div className="app">
      <div className="left">
        {/* <Personal /> */}
        <Education />
        {/* <Experience /> */}
      </div>
      <div className="right">{/* <CV /> */}</div>
    </div>
  );
}
