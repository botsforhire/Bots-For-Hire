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
        
				<div id="main" style={{ backgroundColor: 'black', color: 'white'}}>
          <h1 style={{ color: '#50c878'}}>Bots For Hire</h1>
        <p>We offer free discord bots.</p>
        <br/>
        <Button variant="outline-primary" href="mailto:contact@bots.wtf">Contact Us</Button>{ ' ' }
        <Button variant="outline-primary" href="https://discord.gg/Pgr4FJn">Discord Server</Button>
        </div><br/><br/>

        <div id="reviews" style={{ backgroundColor: 'white', color: 'black', height: '240px'}}>
        <br/>
          <h1 style={{ color: '#50c878'}}>Reviews</h1>
          <p>What do our customers think?</p>

          <p>Review #1</p>
        </div>
      </Layout>
    )
  }
}

export default HomePage