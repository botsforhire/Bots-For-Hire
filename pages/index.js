import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card, Carousel } from "react-bootstrap"

function Staff({ id, children }){
  return (
    <div style={{ display: 'inline-block', marginLeft: '12px'}}>
      <img 
        src={`https://davatar.bots.wtf/${id}`}
        alt={`${id}`}
        width={`70px`}
        height={`70px`}
        style={{
          borderRadius: `50%`,
          display: `inline-block`
        }}
      />
      {children}
    </div>
  )
}

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout style={{ textAlign: 'center' }}>
        <style jsx>{`
          *{
            font-family: "Times New Roman", Times, serif;
          }

          .step{
            width: 290px;
            height: 290px;
            display: inline-block;
            margin: 9px;
          }

          h2{
            font-family: Minya; 
          }

        `}</style>
        <head>
          <style>{'@font-face { font-family: DisposableDroidBB; src: url(DisposableDroidBB.ttf) }; @font-face { font-family: Minya; src: url(minya.ttf) };'}</style>
          <title>Bots For Hire</title>
        </head>
        <br/><br/>

        <h1 style={{ fontFamily: 'DisposableDroidBB', fontSize: '90px'}}>Bots For Hire</h1>

        <i className="text-muted">Over 300 free discord bots made!</i><br/><br/>

        <Link href="https://discord.gg/Pgr4FJn"><a><Button variant="primary">Discord Server</Button></a></Link>

        { ' ' }

        <Link href="mailto:partners@bots.wtf"><Button variant="warning">Sponsor Us</Button></Link>

        <br/><hr/>

        <div>
          <h2>How It Works</h2>
          <i className="text-muted">It only takes 3 very easy steps!</i><br/><br/>

          <div className="step">
            <h4>Planning</h4>
            <p>First, you join our server, then you create a ticket. You provide us with all the nesscarry information we need to create your bot. Prefix, server id, bot's token and the features.</p>
          </div>

          <div className="step">
            <h4>Development</h4>
            <p>Next, one of our awesome staff is tasked with creating your bot. They will be given all the information that you sent. Our system will pick the best staff for your order.</p>
          </div>

          <div className="step">
            <h4>Deployment!</h4>
            <p>Once the staff is done building and deploying your bot, a invite link will be generated for your bot based on the permissions it need. This is the testing stage.</p>
          </div>
        </div>

        <br/><hr/>
        <div>
          <h2>Our AMAZING Staff!</h2><br/>

          <Staff id={'714544278478520331'}>
            <p>Hackermon</p>
          </Staff>

          <Staff id={'709022047673516043'}>
            <p>C970</p>
          </Staff>

          <Staff id={'691494864126214235'}>
            <p>Adithya Kalany</p>
          </Staff>

          <Staff id={'719909192000864398'}>
            <p>AJ GAMERZ</p>
          </Staff>

          <Staff id={'656478684315910163'}>
            <p>Lethdev2019</p>
          </Staff>

          <Staff id={'622859111737982986'}>
            <p>Lime sus</p>
          </Staff>

          <Staff id={'483375587176480768'}>
            <p>seb.go</p>
          </Staff>

          <Staff id={'701681797926223962'}>
            <p>Shivank_best</p>
          </Staff>
        </div>

        <br/>
        <hr/>
      </Layout>
    )
  }
}

export default HomePage