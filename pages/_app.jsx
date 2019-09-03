import App, { Container } from 'next/app'
import React from 'react';
import Nav from '../components/Nav';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Nav/>
        <Component {...pageProps} />
      </Container>
    )
  }
}