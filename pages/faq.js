import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Accordion, Card, Button} from "react-bootstrap"

class FAQ extends React.Component {
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
          <title>Bots For Hire - FAQ</title>
        </Head>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What is Bots For Hire?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Bots For Hire is a company that creates discord bots for FREE. Just send us some information and in minutes you'll have your very own discord bot.</Card.Body>
            </Accordion.Collapse>
          </Card>
           <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                How do I get the premium plan?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>To get the premium plan, send us a email at therealhackermon@gmail.com and we'll get in touch with you.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                I would like to partner with your startup
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Contact us with the button above and we'll talk about it.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                How do I get the free plan?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>You can either contact us or join our discord below: discord.gg/Pgr4FJn</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Layout>
    )
  }
}

export default FAQ