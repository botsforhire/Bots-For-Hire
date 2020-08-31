import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card} from "react-bootstrap"

class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Layout>
      <head>
        <style>{'body { background-color: #50c878; }'}</style>
        <title>Bots For Hire</title>
      </head>
      <div id="title" className="text-center">
        <h1>Bots For Hire</h1>
        <p>Discord Bots made easier.</p>
        <Button variant="outline-primary" href="#pricing">Pricing</Button>
      </div>
      
      <br/>
      <hr/>
      <div id="bots" className="text-center">
        <h1>Bots</h1>
        <p>Coming Soon</p>
      </div>
      <br/>
      <hr/>
       
      <div id="pricing" className="text-center">
        <h1>Pricing</h1>

        {/* Free Plan */}
        <Card style={{width: '15rem', height: '18rem', display: 'inline-block'}} className="text-center">
          <Card.Body>
            <Card.Title><h2>Free</h2></Card.Title>
            <Card.Text>
              <ul className="fa-ul">
                <li>Moderation Commands</li>
                <li>Custom Presence</li>
                <li>Basic Fun Command</li>
                <li>Custom name and profile pic</li>
              </ul>
            </Card.Text>
            <Button variant="primary" href="/faq" >Get Started</Button>
          </Card.Body>
        </Card>

        {/* Premium Plan */}
        <Card style={{width: '15rem', height: '18rem', display: 'inline-block', marginLeft: '2px'}} className="text-center">
          <Card.Body>
            <Card.Title><h2>Premium</h2></Card.Title>
            <Card.Text>
              <ul className="fa-ul">
                <li>Everything from Free</li>
                <li>Music</li>
                <li>Custom Moderation System</li>
                <li>Custom Role In Server</li>
              </ul>
            </Card.Text>
            <br/>
            <Button variant="primary" href="https://discord.gg/EzecfUX" >Contact Us</Button>
          </Card.Body>
        </Card>
      </div>
      </Layout>
    )
  }
}

export default HomePage