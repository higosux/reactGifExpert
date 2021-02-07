import { randomFillSync } from "crypto";

import React, { useState } from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {


    // const categories = 
    const [categories, setCategories] = useState(['Dragon Ball F'])
    
    

    return (
        <>
            <h2 className="animate__animated animate__bounce">GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>



            <ol>
                {
                    categories.map( (category) => 
                        <GifGrid
                            key={ category } 
                            category={ category} />
                    )
                }
            </ol>
        </>
    )
}
