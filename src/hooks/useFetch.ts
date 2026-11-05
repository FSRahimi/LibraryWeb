import { useEffect, useState } from "react";

export function useFetch<T> (url: string | null) {

    const [data, setData ] = useState <  T | null > (null);


    const [error, setError] = 
    useState<  string| null>(null);

    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        let ignore = false;

        const controller = new AbortController();

        setData(null);
        setError(null)

        if(!url) {
            setLoading(false);
            return () =>{
                ignore = true;
                controller.abort()
            };
        }
        setLoading(true)
    })
}