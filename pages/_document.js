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
          <link rel="icon" href="/logos/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta name="title" content="Bots For Hire"/>
          <meta name="tags" content="bots, discord-bots, bots-for-hire, free-bots, bot, discord, discordapp, wumpus, bth"/>
          <meta name="theme-color" content="#50c878" />
          <meta name="og:title" content="Bots For Hire" />
          <meta name="og:description" content="Want a custom discord bot for your server? Well we create discord bots for FREE just check out our plans." /><meta name="description" content="Want a custom discord bot for your server? Well we create discord bots for FREE just check out our plans. Protected by Cloudfare."/>
          <meta name="og:image" content="/logos/favicon.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Bots For Hire" />
          <meta name="twitter:description" content="Want a custom discord bot for your server? Well we create discord bots for FREE just check out our plans. Protected by Cloudfare." />
          <meta name="twitter:image" content="/logos/favicon.png" />
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

					<script async src="https://arc.io/widget.js#8BsJZj7h"></script>
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