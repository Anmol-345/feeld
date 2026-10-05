import '../styles/globals.css';
import { stripSensitiveParams, googleTagManager, ldJson } from '../lib/inlineScripts';
import { metadataContent } from './content';

export const metadata = {
  metadataBase: new URL('https://x.com/TokenMngle'),
  title: metadataContent.title,
  description: metadataContent.description,
  openGraph: {
    title: metadataContent.title,
    description: metadataContent.description,
    images: ['/assets/image/upload/v1699963585/AppIcon.png'],
  },
  other: {
    'apple-itunes-app': 'app-id=887914690',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon.png', type: 'image/png' },
    ],
    apple: '/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="/" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/feeld/_next/static/chunks/265yk3hg0i-95.css" />
        <link rel="stylesheet" href="/feeld/_next/static/chunks/2fw_j___47scg.css" />
        <script
          id="strip-sensitive-params"
          dangerouslySetInnerHTML={{ __html: stripSensitiveParams }}
        />
        <script
          id="appsflyer-smart-script"
          src="/appsflyer-smart-script_2_10_0.js?v=25da71885a3e652a1ac3e1d8ffd9ca78abaa9f7d"
          defer
        />
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{ __html: googleTagManager }}
        />
        <script
          src="//script.crazyegg.com/pages/scripts/0127/1570.js"
          type="text/javascript"
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson }}
        />
      </head>
      <body style={{ overflow: 'unset' }}>
        {children}
      </body>
    </html>
  );
}
