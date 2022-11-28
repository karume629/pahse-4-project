import React from "react";
import Hero from "./home/Hero";

export default function Home({isAuthenticated}){

    return(
        <div>
            <Hero isAuthenticated={isAuthenticated} />
        </div>
    )

}
