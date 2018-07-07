import * as React from 'react';
import Navbar from './navbar';
import About from './about';
import Projects from './projects';

export default () => {
  return (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Navbar />
      <div className="p-1">
        <p style={{fontFamily: 'Barlow', color: '#FFFFFF', fontSize: '48px'}}>W e l c o m e</p>
      </div>
      <div className="sectional">
        <About />
      </div>
      <div className="p-2"></div>
      <div className="sectional">
        <Projects />
      </div>
      <div className="p-3"></div>
    </div>
  )
}
