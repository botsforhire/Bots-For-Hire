import Link from "next/link"
import { Navbar, Nav, Button } from "react-bootstrap"
import { FaPatreon } from 'react-icons/fa'

function Layout(props) {
  return (
    <div>
      <style>{`#navbar *{display: inline-block;}`}</style>
      <div id="navbar" style={{ backgroundColor: '#50c878', width: `100%`, padding: `10px 10px`, display: `inline-block`}}>
        <img
          src={`/logos/logo.png`}
          width={`50px`}
          height={`50px`}
          alt={`Bots For Hire Logo`}
          style={{ display: `inline-block`, borderRadius: `50%`}}
        />

        <h5>Bots For Hire</h5>

        <Link href="https://patreon.com/botsforhire"><div style={{ marginLeft: '15px', cursor: 'pointer'}}><a><FaPatreon/></a></div></Link>
      </div><br/>

      <div style={props.style}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout