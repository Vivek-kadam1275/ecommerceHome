import React from "react"
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HighlightsSection from '../components/HighlightsSection'
import JamesSection from '../components/JamesSection'
import MaurisSection from '../components/MaurisSections'
import ZeroSection from '../components/ZeroSection'
import SecondBooksSection from '../components/SecondBooksSection'
import TypewriterSection from '../components/TypewriterSection'
import MaurisSecondSection from '../components/MaurisSecondSection'
import CommodoSection from '../components/CommodoSection'
import InstaSection from '../components/InstaSection'
import FooterSection1 from '../components/FooterSection1'
import FooterSection2 from '../components/FooterSection2'
const HomePage = (props) => {
    return (
        <div className=' overflow-x-hidden'>
            <Navbar />
            <HeroSection />
            <HighlightsSection />
            <JamesSection />
            <MaurisSection />
            <ZeroSection />
            <SecondBooksSection />
            <TypewriterSection />
            <MaurisSecondSection />
            <CommodoSection />
            <InstaSection />
            <FooterSection1 />
            <FooterSection2 />

        </div>
    )
};

export default HomePage;
