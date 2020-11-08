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
        
      <Card style={{ width: '18rem', display: 'inline-block' }}>
        <Card.Body>
          <Card.Title>Blurple Development</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Server Partnership</Card.Subtitle>
          <Card.Text>
            <img src="https://cdn.discordapp.com/emojis/762797873262755850.png?v=1" alt="Blurple Emoji" width="30px" height="30px"/> | Would you like to chill, or join a group of developers?  Blurple Development is the right place for you! Blurple development is the support server for many bots, and a non toxic community with a lot to offer! 
          </Card.Text>
          <Card.Link href="https://discord.gg/akzQqnC">Discord Server</Card.Link>
          <Card.Link href="https://blurple.gg/">Website</Card.Link>
        </Card.Body>
      </Card><br/>
      <Card style={{ width: '18rem', display: 'inline-block' }}>
        <Card.Body>
          <Card.Title>Echo Circle</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Server Partnership</Card.Subtitle>
          <Card.Text>
            Hey everyone! Welcome to Echo Circle! Fun things that you will enjoy: Nitro Events and Nitro Giveaways, and bot giveaways from Dank Memer! Lots of Role rewards, level rewards and invite rewards. Lots of fun channels. Fun bots to use! Active Chats! Have fun and meet new people! Economy shop and system from Logibot! 24/7 Music Bot in VC! Hi guys! If you are looking for a great community server then be sure to come and check out this server!
          </Card.Text>
          <Card.Link href="https://discord.gg/zdmzjqx">Discord Server</Card.Link>
          <Card.Link href="#">Website</Card.Link>
        </Card.Body>
      </Card>
      </Layout>
    )
  }
}

export default Partners