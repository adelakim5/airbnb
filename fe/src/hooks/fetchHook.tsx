import React, { useEffect, useState } from 'react';

const useFetch = (url: string): any => {
    // any 타입 변경하기

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    }, []);

    return [data, loading];
};

export default useFetch;
