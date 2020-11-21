import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card, Carousel } from "react-bootstrap"

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout style={{ textAlign: 'center' }}>
        <head>
          <style>{'body { background-color: black; color: white;}'}</style>
          <title>Bots For Hire</title>
        </head>
        
				<img 
          src="https://bots.wtf/logos/logo.png"
          alt="Bots For Hire Image"
          style={{ 
            width: '120px',
            height: '120px'
          }}
        />

        <h1>Bots For Hire</h1>
        <p>300+ free discord bots created</p><br/>

        <Button variant="primary" onClick={()=>{ location.href = `https://discord.gg/Pgr4FJn` }}>Discord Server</Button> { ' ' }
        <Button onClick={()=>{ location.href = `mailto:staff@bots.wtf`}} variant="primary">Contact Us</Button>
      </Layout>
    )
  }
}

export default HomePage