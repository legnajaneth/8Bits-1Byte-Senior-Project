import React from "react";
import NavigationBar from "../components/navigationBar";

function MainLayout({children}) {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>{children}</div>
        </div>
    )
}

export default MainLayout