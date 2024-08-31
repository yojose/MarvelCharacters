import React from "react"
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header"

export const MainPageLayout: React.FC = () => {
    return (
        <div id="root" className="app font-family">
            <Header />
            <main className="main" data-testid="main">
                <Outlet />
            </main>
        </div>
    )

}