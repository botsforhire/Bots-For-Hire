import Link from "next/link"

function Layout(props){
  return (
    <div>
    <style jsx>{`
      #navbar{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: red;
        color: white;
      }

      #navbar img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        vertical-align: 0.5%;
        margin-right: 5px;
      }
      #navbar *{
        display: inline-block;
      }

      #navbar #links{
        margin-left: 29px;
      }

      #navbar #links a{
        margin-left: 15px;
      }
    `}</style>
      <div id="navbar">
        <img src="/logos/logo.png"/>
        <h2>Bots For Hire</h2>
        <div id="links">
          <Link href="/"><a>Home</a></Link>
          <Link href="/faq"><a>FAQ</a></Link>
        </div>
      </div>
      <br/><br/><br/>
      <div style={props.style}>{props.children}</div>
      <p>We're not affiliated with Discord</p>
    </div>
  )
}

export default Layout