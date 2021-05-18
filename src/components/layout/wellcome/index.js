import Footer from '../../footer'
import Header from '../../header'
import React from 'react'

function WellComeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default WellComeLayout