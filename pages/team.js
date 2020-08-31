import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Accordion, Card, Button} from "react-bootstrap"

class TeamPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <style jsx>{`
        summary{
          cursor: pointer;
        }
        details{
          outline: none;
        }
      `}</style>
        <Head>
          <title>Bots For Hire - Team</title>
        </Head>
        <div className="text-center">
          <h1>Our Team</h1>
          <Card>
            <Card.Body>
              <Card.Title>
              Hackermon#0001
            </Card.Title>
            <Card.Text>Hackermon is a 13 year old that lives in Pennsylvanisa, USA. He loves to program and he is part of our development team which makes the bot and stuff. Feel free to ask him questions about your bot or other things.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Layout>
    )
  }
}

export default TeamPage