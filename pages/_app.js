import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-family: 'Jost', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ESCQuiz - Quanto você sabe sobre Eurovision?</title>
        <link rel="icon" href="favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet" />

        <meta name="title" content="ESCQuiz - Quanto você sabe sobre Eurovision?" />
        <meta name="description" content="Quiz em português sobre o Eurovision Song Contest, maior competição musical do mundo." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://escquiz.fabs-silva.vercel.app/" />
        <meta property="og:title" content="ESCQuiz - Quanto você sabe sobre Eurovision?" />
        <meta property="og:description" content="Quiz em português sobre o Eurovision Song Contest, maior competição musical do mundo." />
        <meta property="og:image" content="https://escquiz.fabs-silva.vercel.app/images/background.jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://escquiz.fabs-silva.vercel.app/" />
        <meta property="twitter:title" content="ESCQuiz - Quanto você sabe sobre Eurovision?" />
        <meta property="twitter:description" content="Quiz em português sobre o Eurovision Song Contest, maior competição musical do mundo." />
        <meta property="twitter:image" content="https://escquiz.fabs-silva.vercel.app/images/background.jpeg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
