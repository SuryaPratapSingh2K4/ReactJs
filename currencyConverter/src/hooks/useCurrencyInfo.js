// import { useEffect, useState } from "react";

// const useCurrencyInfo = (currency) => {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         if (!currency) return;
//         const fetchData = async () => {
//             try {
//                 const res = await fetch(
//                     `https://api.exchangerate-api.com/v4/latest/${currency}`
//                 );
//                 const json = await res.json();
//                 setData(json.rates || {});
//             } catch (error) {
//                 setData({});
//             }
//         };
//         fetchData();
//     }, [currency]);

//     return data;
// };

// export default useCurrencyInfo;

import { useEffect,useState } from "react";


function useCurrencyInfo(currency,from,to){
    const [data,setData] = useState({})
    useEffect(
    //     () => {
    //     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0
    //         /currency-api@latest/v1/currencies
    //         /${currency}.json`).then((res) => res.json())
    //         .then((res) => setData(res[currency]))
    // },
    () => {
        fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
        .then((res) => res.json())
        .then((res) => setData(res(from,to,currency)))
    },
    
    [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;