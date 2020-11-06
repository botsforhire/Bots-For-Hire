import Head from "next/head"
import Layout from "../../components/Layout.js"
import Link from "next/link"

import { Button, Card } from "react-bootstrap"

class AboutPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout style={{ textAlign: 'center' }}>
        <head>
          <style>{'body { background-color: black; color: white;}'}</style>
          <title>Bots For Hire - About Us</title>
        </head>
        
        <h1>Bots For Hire</h1>
				<p style={{ width: '520px', display: 'inline-block'}}>Bots For Hire is a organization that gives out free custom bots. No need to buy a discord bot with modmail for $3 when you can get one for free at Bots For Hire. Feel free to check out our awesome staff at our discord server. They work 24/7 to make sure that everyone who needs a bot will get one.</p>
      </Layout>
    )
  }
}

export default AboutPage