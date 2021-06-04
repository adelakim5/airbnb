import { useEffect, useState } from 'react';

const useFetch = (url: string): any => {
    // data가 반환되는 형태가 다양해서 일단은 unknown으로 함
    // 이 훅을 사용하는 부분에서 any로 받아야하는 문제가 있는 것 같음

    const storedObj = sessionStorage.getItem(url);
    if (storedObj) return [JSON.parse(storedObj), false];

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
            sessionStorage.setItem(url, JSON.stringify(json));
        })();
    }, [url]);

    console.log(data);

    return [data, loading];
};

export default useFetch;
