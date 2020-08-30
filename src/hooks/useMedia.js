import { useState, useEffect, useCallback } from 'react'

const useMedia = (midia) => {

    const [midiaQuery, setMidiaQuery] = useState(null);

    const handlerMidiaQuery = useCallback(() => {

        const { matches } = window.matchMedia(midia);
        setMidiaQuery(matches);

    }, [midia],
    );

    useEffect(() => {

        window.addEventListener('resize', handlerMidiaQuery);

        return () => {
            window.removeEventListener('resize', handlerMidiaQuery);
        }

    }, [handlerMidiaQuery]);


    useEffect(() => {

        handlerMidiaQuery();

    }, [handlerMidiaQuery]);

    return midiaQuery;
}

export default useMedia;