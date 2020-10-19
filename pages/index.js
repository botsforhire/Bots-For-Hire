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
          <style>{'body { background-color: #50c878; }'}</style>
          <title>Bots For Hire</title>
        </head>
        
				<h1>Bots For Hire</h1>
				<p>Free Discord Bots made for everyone. </p>
				<Link href="/plans"><Button variant="outline-primary">See Plans</Button></Link> { ' ' }
				<Link href="/contact"><Button variant="outline-info">Contact Us</Button></Link>
				<br/><br/><br/>
				
        <h3>15+ discord bots made.</h3>
      </Layout>
    )
  }
}

export default HomePage