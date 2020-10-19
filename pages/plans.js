import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card, ListGroup} from "react-bootstrap"

class Plans extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout style={{ textAlign: 'center' }}>
        <head>
          <style>{'body { background-color: #50c878; }'}</style>
          <title>Plans - Bots For Hire</title>
        </head>
        
				<h1>Our Plans</h1>

				<Card style={{ width: '18rem', display: 'inline-block'}}>
					<Card.Body>
						<Card.Title>Free</Card.Title>
						<ListGroup variant="flush">
							<ListGroup.Item>Discord Bot</ListGroup.Item>
							<ListGroup.Item>Custom Name and Profile</ListGroup.Item>
							<ListGroup.Item>Custom Status</ListGroup.Item>
							<ListGroup.Item>Free VPS</ListGroup.Item>
  					</ListGroup>
						<Card.Link href="https://discord.gg/Pgr4FJn">Get Started</Card.Link>
					</Card.Body>
				</Card> { ' ' }

				<Card style={{ height: '18rem', width: '18rem', display: 'inline-block'}}>
					<Card.Body>
						<Card.Title>Premium</Card.Title>
						<ListGroup variant="flush">
							<ListGroup.Item>Everything from free</ListGroup.Item>
							<ListGroup.Item>Music</ListGroup.Item>
							<ListGroup.Item>Auto Responses</ListGroup.Item>
							<ListGroup.Item>Custom Commands</ListGroup.Item>
  					</ListGroup>
						<Card.Link href="https://discord.gg/Pgr4FJn">Contact Us</Card.Link>
					</Card.Body>
				</Card>
      </Layout>
    )
  }
}

export default Plans