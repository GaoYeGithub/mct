import React from 'react'
import Head from 'next/head'
import Nav from './nav'
import Document from './_document'
import MyApp from './_app'

const About = () => (
  <div>
    <Nav />

    <div className="container mx-auto text-center">
      <h1 className="text-6xl m-12">Macro Compliance Tracker!</h1>
      <p className="text-xl">
        This app will help you ensure your macros are within a selected range to help you achieve your New Years Resolution!
      </p>
    </div>
  </div>
)

export default About
