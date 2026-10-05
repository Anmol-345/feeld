import { Html, Head, Main, NextScript } from 'next/document';
import { stripSensitiveParams, googleTagManager } from '../lib/inlineScripts';

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Feeld connects open-minded people exploring love, desire, and alternative relationships in a safe, inclusive space." />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:image" content="/assets/image/upload/v1699963585/AppIcon.png" />
        <meta property="og:title" content="Feeld: The Dating App for Open-Minded Individuals" />
        <meta property="og:description" content="Welcome to Feeld, the modern dating app connecting like-minded individuals for fulfilling relationships. Embrace desires, explore intimacy, and join our vibrant community of self-discovery. Redefine connections on Feeld today." />
        <meta name="apple-itunes-app" content="app-id=887914690" />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" href="/favicons/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="preconnect" href="/" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/feeld/_next/static/chunks/265yk3hg0i-95.css" />
        <link rel="stylesheet" href="/feeld/_next/static/chunks/2fw_j___47scg.css" />
        <script id="strip-sensitive-params" dangerouslySetInnerHTML={{ __html: stripSensitiveParams }} />
        <script id="appsflyer-smart-script" src="/appsflyer-smart-script_2_10_0.js?v=25da71885a3e652a1ac3e1d8ffd9ca78abaa9f7d" defer />
        <script id="google-tag-manager" dangerouslySetInnerHTML={{ __html: googleTagManager }} />
        <script src="//script.crazyegg.com/pages/scripts/0127/1570.js" type="text/javascript" async />
      </Head>
      <body style={{ overflow: 'unset' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
