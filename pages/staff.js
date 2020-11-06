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
        
        <Image
          src="https://davatar.bots.wtf/714544278478520331"
          alt="Hackermon Image"
          width="171"
          height="180"
          roundedCircle
          style={{ marginRight: '7px'}}
          title="Hackermon (Owner and Developer)"
        />

        <Image
          src="https://davatar.bots.wtf/409035116367577088"
          alt="Lemonexus Image"
          width="171"
          height="180"
          roundedCircle
          style={{ marginRight: '7px'}}
          title="Lemonexus ( Developer)"
        />


        <Image
          src="https://davatar.bots.wtf/622859111737982986"
          alt="Lime Sus Image"
          width="171"
          height="180"
          roundedCircle
          style={{ marginRight: '7px'}}
          title="Lime Sus ( Head Of Staff and Bot Staff )"
        />

        <Image
          src="https://davatar.bots.wtf/691494864126214235"
          alt="Adithya Image"
          width="171"
          height="180"
          roundedCircle
          style={{ marginRight: '7px'}}
          title="Adithya ( Bot Staff )"
        />

        <Image
          src="https://davatar.bots.wtf/716306888492318790"
          alt="CuteDog5695 Image"
          width="171"
          height="180"
          roundedCircle
          style={{ marginRight: '7px'}}
          title="CuteDog5695 ( Bot Staff )"
        />

        {/*
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
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/409035116367577088"
            alt=" Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          Lemonexus
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
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/409035116367577088"
            alt="Lemonexus Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          Lemonexus
          </ListGroup.Item>
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/478660635148681218"
            alt="oofquest Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          oofquest
          </ListGroup.Item>
           <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/720718574397947995"
            alt="𝕯𝖊𝖆𝖉 Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          𝕯𝖊𝖆𝖉
          </ListGroup.Item>
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/611505491956465685"
            alt="SteveTheMonkey Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          SteveTheMonkey
          </ListGroup.Item>
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/622859111737982986"
            alt="LimeSus Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          Lime Sus
          </ListGroup.Item>
          <ListGroup.Item>
          <Image
            src="https://davatar.bots.wtf/716306888492318790"
            alt="CuteDog5695 Image"
            width="50"
            height="50"
            rounded
            style={{ marginRight: '7px'}}
          />
          CuteDog5695
          </ListGroup.Item>
        </ListGroup><br/>
        */}
      </Layout>
    )
  }
}

export default Staff