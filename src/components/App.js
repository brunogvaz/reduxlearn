import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardStats from "./cardstats/CardStats";
import SideNav from "./common/SideNav";
import TopNavBar from "./common/TopNavBar";
import PageContent from "./PageContent";
import Footer from "./common/Footer";

import ListaEmendas from "./listaEmendas/ListaEmendas";

function App() {
  return (
    <>
      <SideNav />
      <div className="main-content">
        <TopNavBar />

        <Header />
        <div className="container-fluid mt--7">
          
            <ListaEmendas />

            <Footer/>
          
        </div>
      </div>
    </>
  );
}

export default App;
