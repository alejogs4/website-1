import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/styles/Global';
import { theme } from '../components/styles/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:700,900&display=swap"
            rel="stylesheet"
          />
          <title>
            React LaConf - La primera conferencia de React para hispanoparlantes
            en Latinoamérica
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </>
    );
  }
}
