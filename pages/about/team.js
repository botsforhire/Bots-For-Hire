import Head from "next/head"
import Layout from "../../components/Layout.js"
import Link from "next/link"

import { Button, Card } from "react-bootstrap"

class TeamPage extends React.Component {
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
        
        <h1>Our Team</h1>
      </Layout>
    )
  }
}

export default TeamPage