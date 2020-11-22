import Document, { Html, Head, Main, NextScript } from "next/document"

class DocumentP extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/logos/logo.png" />

          <meta name="title" content="Bots For Hire"/>
          <meta name="tags" content="bots, discord-bots, bots-for-hire, free-bots, bot, discord, discordapp, wumpus, bth"/>
          <meta name="theme-color" content="#50c878" />
          <meta name="og:title" content="Bots For Hire" />
          <meta name="og:description" content="Bots For Hire is a organization that gives out free custom bots. No need to buy a discord bot with modmail for $3 when you can get one for free at Bots For Hire. Feel free to check out our awesome staff at our discord server. They work 24/7 to make sure that everyone who needs a bot will get one." /><meta name="description" content="Bots For Hire is a organization that gives out free custom bots. No need to buy a discord bot with modmail for $3 when you can get one for free at Bots For Hire. Feel free to check out our awesome staff at our discord server. They work 24/7 to make sure that everyone who needs a bot will get one."/>
          <meta name="og:image" content="/logos/logo.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Bots For Hire" />
          <meta name="twitter:description" content="Bots For Hire is a organization that gives out free custom bots. No need to buy a discord bot with modmail for $3 when you can get one for free at Bots For Hire. Feel free to check out our awesome staff at our discord server. They work 24/7 to make sure that everyone who needs a bot will get one." />
          <meta name="twitter:image" content="/logos/logo.png" />
          <meta name="twitter:site" content="@plop_daniel" />


          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-176091657-2"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-176091657-2');
        `,
            }}
          />

					<script async src="https://arc.io/widget.min.js#8BsJZj7h"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentP