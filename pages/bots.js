import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

import { Button, Card } from "react-bootstrap"

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <Head>
          <style>{'body { background-color: #50c878; }'}</style>
          <title>Bots For Hire - Our Bots</title>
        </Head>

        <style jsx>{`
          #bots{
            text-align: center;
          }

          .bot{
            display: inline-block;
            padding: 20px 20px;
            border: 2px solid #333;
            margin-right: 12px;
          }

          .bot img{
            border-radius: 50%;
            width: 50px;
            height: 50px;
            padding: 5px 5px;
          }
        `}</style>
        <div id="bots">
          <div className="bot">
            <img src="https://cdn.discordapp.com/avatars/714544278478520331/a_75dbffc61787fb8dee616f4b8b75b6c8.webp"/>
            <h2>Noobit</h2>
          </div>

          <div className="bot">
            <img src="https://cdn.discordapp.com/avatars/714544278478520331/a_75dbffc61787fb8dee616f4b8b75b6c8.webp"/>
            <h2>Test</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomePage