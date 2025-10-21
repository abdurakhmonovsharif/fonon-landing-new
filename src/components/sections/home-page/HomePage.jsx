import HeroBanner from "./home-page-components/HeroBanner.jsx";
import InfoBanner from "./home-page-components/InfoBanner.jsx";
import IntroShowcase from "./home-page-components/IntroShowcase.jsx";
import VideoSection from "./home-page-components/VideoSection.jsx";
import LatestNews from "./home-page-components/LatestNews.jsx";
import CollectionShowcase from "./home-page-components/CollectionShowcase.jsx";
import ServiceHighlights from "./home-page-components/ServiceHighlights.jsx";

const HomePage = () => {
    return (
        <div>
            <HeroBanner />
            <InfoBanner />
            <IntroShowcase />
            <VideoSection />
            <LatestNews />
            <CollectionShowcase />
        </div>
    )
}

export default HomePage;