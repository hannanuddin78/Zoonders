import React from 'react'
import BlogPost from '../component/BlogPost'
import DetailsPage from '../component/DetailsPage'
import Footer from '../component/Footer'
import FooterTop from '../component/FooterTop'
import HeaderBottom from '../component/HeaderBottom'
import HomeHeader from '../component/HomeHeader'
import Img3D from '../component/Img3D'

const homePage = () => {
    return (
        <>
            <HomeHeader />
            <HeaderBottom />
            <DetailsPage />
            <Img3D />
            <BlogPost />
            <FooterTop />
            <Footer />
        </>
    )
}

export default homePage
