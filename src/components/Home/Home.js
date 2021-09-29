import React from 'react'
import Banner from '../Banner/Banner'
import Newsletter from '../Newsletter/Newsletter'
import Produtos from '../Produtos/Produtos'

const Home = () => {
  return (
    <main className="home">
      <Banner />
      <Produtos title="Mais Vendidos" />
      <Newsletter />
    </main>
  )
}

export default Home
