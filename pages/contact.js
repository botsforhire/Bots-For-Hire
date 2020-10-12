import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card } from "react-bootstrap"

class Contact extends React.Component {
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
        
				<a href="mailto:staff@bots.wtf">Email Us</a>{ ' ' }
				<a href="https://discord.gg/Pgr4FJn">Our Discord</a>
      </Layout>
    )
  }
}

export default Contact