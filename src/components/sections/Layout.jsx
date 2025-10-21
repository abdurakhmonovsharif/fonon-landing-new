import { Outlet } from 'react-router-dom'
import Preloader from '../common/Preloader'
import BackToTop from '../common/BackToTop'


import QuickViewModal from '../modals/QuickViewModal'
import NewsletterModal from '../modals/NewsletterModal'
import Header from "../layout/Header.jsx";
import OffCanvasPanel from "../layout/OffCanvasPanel.jsx";
import Footer from "../layout/Footer.jsx";
import ServiceHighlights from "./home-page/home-page-components/ServiceHighlights.jsx";

const Layout = () => {
    return (
        <div >
            <Preloader />
            <Header />
            <OffCanvasPanel />

            <main>
                <Outlet />
            </main>

            <BackToTop />
            {/*<ServiceHighlights />*/}
            <Footer />
            <QuickViewModal />
            <NewsletterModal />
        </div>
    )
}

export default Layout;