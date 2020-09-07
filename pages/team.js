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
          <Card style={{ width: '18rem', display: 'inline-block'}}>
            <Card.Img variant="top" src="https://davatar.pwnsquad.net/714544278478520331" style={{height: '20rem'}}></Card.Img>
            <Card.Body>
              <Card.Title>
              Hackermon#0001
            </Card.Title>
            <Card.Text>Hackermon is a 13 year old that lives in Pennsylvanisa, USA. He loves to program and he is part of our development team which makes the bot and stuff. Feel free to ask him questions about your bot or other things.</Card.Text>
            </Card.Body>
          </Card>
          {' '}
          <Card style={{ width: '18rem', display: 'inline-block'}}>
            <Card.Img variant="top" src="https://davatar.pwnsquad.net/554052094718640129" style={{height: '20rem'}}></Card.Img>
            <Card.Body>
              <Card.Title>
              Caecilius#7031
            </Card.Title>
            <Card.Text>Caecilius#7031 is the second developer at Bots For Hire, he helps with the bot and you can also ask him some questions if you want. He is part of our development team. <br/><br/></Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Layout>
    )
  }
}

export default TeamPage