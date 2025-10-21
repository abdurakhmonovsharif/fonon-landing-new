import {Routes, Route} from "react-router-dom";
import Layout from "./components/sections/Layout.jsx";
import HomePage from "./components/sections/home-page/HomePage.jsx";
import StoreLocator from "./components/sections/store-locator-page/StoreLocator.jsx";
import CustomerService from "./components/sections/customer-service-page/CustomerService.jsx";
import Booking from "./components/sections/appointment-page/Appointment.jsx";
import Celebrities from "./components/sections/celebrities-page/Celebrities.jsx";
import About from "./components/sections/about/brand-page/About.jsx";
import Factory from "./components/sections/about/factory-page/Factory.jsx";
import Info from "./components/sections/about/info-page/Info.jsx";
import Certificate from "./components/sections/about/certificate-page/Certificate.jsx";
import Magazine from "./components/sections/about/magazine-page/Magazine.jsx";
import JobApplication from "./components/sections/about/vacancy-page/JobApplication.jsx";
import HighJewelry from "./components/sections/high-jewelry-page/HighJewelry.jsx";
import CallCenter from "./components/sections/callcenter-page/CallCenter.jsx";
import Vacancies from "./components/sections/about/vacancy-page/Vacancies.jsx";
import News from "./components/sections/latest-news/News.jsx";


const App = () => (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/store-locator" element={<StoreLocator/>}/>
            <Route path="/customer-service" element={<CustomerService/>}/>
            <Route path="/appointment" element={<Booking/>}/>
            <Route path="/mashhurlar/:name" element={<Celebrities/>}/>
            <Route path="/yangiliklar/:name" element={<News/>}/>
            <Route path="/fonon-haqida"/>
            <Route path={"/fonon-haqida/brend-haqida"} element={<About/>}/>
            <Route path={"/fonon-haqida/zavod-haqida"} element={<Factory/>}/>
            <Route path={"/fonon-haqida/bu-fonon"} element={<Info/>}/>
            <Route path={"/fonon-haqida/bizning-sertifikatlarimiz"} element={<Certificate/>}/>
            <Route path={"/fonon-haqida/jurnal"} element={<Magazine/>}/>
            <Route path={"/fonon-haqida/ishga-ariza"} element={<JobApplication/>}/>
            <Route path={"/fonon-haqida/ish-o'rinlari"} element={<Vacancies/>}/>
            <Route path="/qimmatbaho-zargarlik-sanati" element={<HighJewelry/>}/>
            <Route path="/callcenter" element={<CallCenter/>}/>
        </Route>
    </Routes>
);

export default App;
