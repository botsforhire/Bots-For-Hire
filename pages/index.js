import Head from "next/head"
import Layout from "../components/Layout.js"
import Link from "next/link"

class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Layout>
      <head>
        <style>{'body { background-color: #50c878; }'}</style>
        <title>Bots For Hire</title>
      </head>
      <style jsx>{`
        .container{
          width: 100%;
          height: 100%;
          background-color: #50c878;
        }
        .header{
          background-color: #50c878;
          text-align: center;
          width: 95%;
          padding: 10px 10px;
          border-bottom: 2px solid black;
        }
        
        .content{
          text-align: center;
        }

        #bots{
          border-bottom: 2px solid black;
          padding: 10px 10px;
        }

        .bot{
          padding: 5px 5px;

          width: 150px;
          border: 2px solid;
          display: inline-block;

          margin-left: 5px;
          margin-bottom: 2px;
        }

        .bot img{
          width: 50px;
          height: 50px;

          border-radius: 50%;
        }

        .price{
          width: 200px;
          height: 250px;
          background-color: whitesmoke;
          padding: 10px 10px;

          border: 1px solid;
          border-radius: 20px;

          display: inline-block;
          margin-left: 5px;
          margin-bottom: 2px;
        }
      `}</style>
        <div className="header">
          <h1>Discord Bots for Hire</h1>
          <p>Want a custom discord bot for your server? Well we create discord bots for FREE just check out our plans.</p>

          <a href="#pricing"><button>Pricing</button></a>
        </div>

        <div className="content">
          <div id="bots">
            <h1>Our Bots</h1>
            <div className="bot">
              <img src="https://cdn.discordapp.com/avatars/730093732279353414/5f665638eb9a038e7ce2da218006a4b6.png?size=256"/>
              <h3>Noobit</h3>
            </div>
            <div className="bot">
              <img src="https://cdn.discordapp.com/avatars/735923492004036681/9c9765c7f21182d03f4f7c9972817902.png?size=256"/>
              <h3>Luie</h3>
            </div>
             <div className="bot">
              <img src="https://cdn.discordapp.com/app-icons/738486369961246751/326886ebd0c49e3fed815770de9c10ae.png?size=256"/>
              <h3>AFA ABILITIES</h3>
            </div>
            <div className="bot">
              <img src="https://cdn.discordapp.com/app-icons/739886794648059985/13d850a027a833643d03b4d42d250724.png?size=256"/>
              <h3>AimBot Utilies</h3>
            </div>
            <div className="bot">
              <img src="https://cdn.discordapp.com/app-icons/743866593267810384/b2fa0f3ab829ef9f675ba0ed99b85bfe.png?size=256"/>
              <h3>India Army</h3>
            </div>
            <div className="bot">
              <img src="https://cdn.discordapp.com/app-icons/744585617165385809/110aaa102fda92a90c148413d0f93778.png?size=256"/>
              <h3>Adithya's Bot</h3>
            </div>
            <p>And more+</p>
          </div>

          <div id="pricing">
            <h1>Pricing</h1>
            <div className="price">
              <h3>FREE</h3>
              <p>This plan includes a basic discord bot with moderation, fun, info commands. Hosts for 24/7 with no downtime. </p>
              <a href="/faq"><button>Get Started</button></a>
            </div>
            <div className="price">
              <h3>Premium</h3>
              <p>Everything from free plus music, custom commands, custom moderation system</p>
              <br/>
              <br/>
              <a href="/faq"><button>Contact Us</button></a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomePage