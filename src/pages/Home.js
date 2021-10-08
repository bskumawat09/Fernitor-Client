import React from 'react'
// import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Collection from '../components/collection/Collection'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import Featured from '../components/featured/Featured'

const Home = () => {
    return (
        <div>
            {/* <Announcement /> */}
            <Navbar />
            <Header />
            <Collection />
            <Banner />
            <Featured />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home
