import React from 'react';
import '../hero/Atom.css';

const Atom = () => {
  return (
    <div className='frame'>
      <div className="atom">
        <div className="orbit"><span className="electron" style={{'--duration': '4s'}}></span></div>
        <div className="orbit"><span className="electron" style={{'--duration': '4s'}}></span></div>
        <div className="orbit"><span className="electron" style={{'--duration': '4s'}}></span></div>
        <div className="core"></div>
      </div>
    </div>
  )
}

export default Atom
