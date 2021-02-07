import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
         getGifs(category)
            .then( (imgs) => 
         
                setState({
                    data:imgs,
                    loading: false
                })
            )

    }, [category])// cuando la categoria cambia se dispara el useEffect

    return state;


}