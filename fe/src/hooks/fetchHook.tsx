import { useEffect, useState } from 'react';

const useFetch = (url: string): unknown[] => {
    // data가 반환되는 형태가 다양해서 일단은 unknown으로 함
    // 이 훅을 사용하는 부분에서 any로 받아야하는 문제가 있는 것 같음

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
