import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

class FAQ extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
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
        <details>
          <summary>What is Bots For Hire?</summary>
          <p>Bots For Hire is a company that creates discord bots for FREE. Just send us some information and in minutes you'll have your very own discord bot.</p>
        </details>
        <details>
          <summary>How do I get the premium plan?</summary>
          <p>To get the premium plan, send us a email at therealhackermon@gmail.com and we'll get in touch with you.</p>
        </details>
        <details>
          <summary>Partnerships?</summary>
          <p>We don't do partnerships yet.</p>
        </details>
        <details>
          <summary>How do I get the free plan?</summary>
          <p>Join our discord server (https://discord.gg/EzecfUX) and we'll talk.</p>
        </details>
      </Layout>
    )
  }
}

export default FAQ