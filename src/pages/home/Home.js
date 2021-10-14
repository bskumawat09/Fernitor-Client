import React from 'react'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Featured from '../../components/featured/Featured'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Banner />
            <Featured />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home
