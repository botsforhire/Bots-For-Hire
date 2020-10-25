import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card, ListGroup, Image} from "react-bootstrap"

class Staff extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout style={{ textAlign: 'center' }}>
        <head>
          <style>{'body { background-color: #50c878;}'}</style>
          <title>Bots For Hire - Staff</title>
        </head>
        
        <h2>Developers</h2><br/>
				<ListGroup style={{ width: '220px', margin: 'auto'}}>
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/714544278478520331"
            alt="Hackermon Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          Hackermon
          </ListGroup.Item>
        </ListGroup><br/>
        <a href="mailto:staff@bots.wtf"><p className="text-muted">We're looking for developers</p></a>

        <br/>
        <h2>Staff</h2>
        <ListGroup style={{ width: '220px', margin: 'auto'}}>
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/714544278478520331"
            alt="Hackermon Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          Hackermon
          </ListGroup.Item>
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/691494864126214235"
            alt="Hackermon Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          Adithya Kalany</ListGroup.Item>
        </ListGroup><br/>
        <a href="mailto:staff@bots.wtf"><p className="text-muted">We're looking for more staff</p></a>
      </Layout>
    )
  }
}

export default Staff