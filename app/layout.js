import Background from '../components/Background';
import { generateText } from '../utils';
import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='The portfolio of JavaScript developer Kevin Smith'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <title>kevinsmith.dev</title>
      </head>
      <body>
        <main className='App'>
          {children}
          <div id='background' role='presentation'>
            <div role='img'>{generateText()}</div>
            <Background />
          </div>
        </main>
      </body>
    </html>
  );
}
