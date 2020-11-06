import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card, Carousel } from "react-bootstrap"

class Partners extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout style={{ textAlign: 'center' }}>
        <head>          
          <style>{'body { background-color: #50c878;}'}</style>
          <title>Bots For Hire ( Our Partners )</title>
        </head>
        
        <h2>No partners yet :(</h2>
        <a href="https://discord.gg/Pgr4FJn"><p className="text-muted">We're looking for partners 😉</p></a>
      </Layout>
    )
  }
}

export default Partners