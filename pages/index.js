import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card } from "react-bootstrap"

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
        
				<h1>Bots For Hire</h1>
        <p>We offer free discord bots.</p>
        <br/>
        <Button variant="outline-primary" href="mailto:contact@bots.wtf">Contact Us</Button>{ ' ' }
        <Button variant="outline-primary" href="https://discord.gg/Pgr4FJn">Discord Server</Button>
      </Layout>
    )
  }
}

export default HomePage