import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer/Footer";

interface IMainLayout {
    children: JSX.Element
}


const MainLayout = ({ children }: IMainLayout) => {

    return (
        <div className="main-wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
