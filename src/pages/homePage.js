import React from 'react'
import DetailsPage from '../component/DetailsPage'
import Footer from '../component/Footer'
import FooterTop from '../component/FooterTop'
import HeaderBottom from '../component/HeaderBottom'
import HomeHeader from '../component/HomeHeader'

const homePage = () => {
    return (
        <>
            <HomeHeader />
            <HeaderBottom />
            <DetailsPage />
            <FooterTop />
            <Footer />
        </>
    )
}

export default homePage
