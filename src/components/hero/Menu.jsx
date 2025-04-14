import React, {useState} from 'react'
import Atom from '../hero/Atom'
import '../hero/Menu.css';
import { Link } from 'react-router-dom';

import MoonPhase1 from '../../assets/events/phase-1.png'
import MoonPhase2 from '../../assets/events/phase-2.png'
import MoonPhase3 from '../../assets/events/phase-3.png'
import MoonPhase4 from '../../assets/events/phase-4.png'
import MoonPhase5 from '../../assets/events/phase-5.png'
import MoonPhase6 from '../../assets/events/phase-6.png'
import MoonPhase7 from '../../assets/events/phase-7.png'
import MoonPhase8 from '../../assets/events/phase-8.png'

const Menu = () => {
  let [hoveredTitle, setHoveredTitle] = useState("Find Your Possibilities");
  return (
    <div className='container'>
      {/* <div className="heroTitle">Find Your Possibilities</div> */}
        <div className="img">
          <div className="menu-icons">
            <div className="icons" style={{'--i': 1}} onMouseOver={()=>setHoveredTitle("Home")} onMouseOut={()=>setHoveredTitle("Find your Possibilities")}>
              <Link to="/"><img className='moon-icons' src={MoonPhase1} alt="" width='70px' height='70px' /></Link>
            </div>
            <div className="icons" style={{'--i': 2}} onMouseOver={()=>setHoveredTitle("Who We are?")} onMouseOut={()=>setHoveredTitle("Find your Possibilities")}>
              <Link to="/about"><img className='moon-icons' src={MoonPhase2} alt="" width='70px' height='70px' /></Link>
            </div>
            <div className="icons" style={{'--i': 3}} onMouseOver={()=>setHoveredTitle("Our Projects")} onMouseOut={()=>setHoveredTitle("Find your Possibilities")}>
              <Link to="/projects"><img className='moon-icons' src={MoonPhase3} alt="" width='70px' height='70px' /></Link>
            </div>
            <div className="icons" style={{'--i': 4}} onMouseOver={()=>setHoveredTitle("Our Events")} onMouseOut={()=>setHoveredTitle("Find your Possibilities")}>
              <Link to="/events"><img className='moon-icons' src={MoonPhase4} alt="" width='70px' height='70px' /></Link>
            </div>
            <div className="icons" style={{'--i': 5}} onMouseOver={()=>setHoveredTitle("Our Timeline")} onMouseOut={()=>setHoveredTitle("Find your Possibilities")}>
              <Link to="/timeline"><img className='moon-icons' src={MoonPhase5} alt="" width='70px' height='70px' /></Link>
            </div>
            <div className="icons" style={{'--i': 6}} onMouseOver={()=>setHoveredTitle("Our Team")} onMouseOut={()=>setHoveredTitle("Find your Possibilities")}>
              <Link to="/team"><img className='moon-icons' src={MoonPhase6} alt="" width='70px' height='70px' /></Link>
            </div>
            <div className="icons" style={{'--i': 7}} onMouseOver={()=>setHoveredTitle("Watch Us")} onMouseOut={()=>setHoveredTitle("Find your Possibilities")}>
              <Link to="/gallery"><img className='moon-icons' src={MoonPhase7} alt="" width='70px' height='70px' /></Link>
            </div>
            <div className="icons" style={{'--i': 8}} onMouseOver={()=>setHoveredTitle("Talk to Us")} onMouseOut={()=>setHoveredTitle("Find your Possibilities")}>
              <Link to="/contact"><img className='moon-icons' src={MoonPhase8} alt="" width='70px' height='70px' /></Link>
            </div>
          </div>
          <div className="atom-icon">
            <Atom/>
          </div>
        </div>
        <div className='hoveredTitle'>{hoveredTitle}</div>
    </div>
  )
}

export default Menu
