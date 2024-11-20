import { useEffect, useState } from "react"
let currency ="inr"
let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

function UseCurrencyInfo(currency) {
    const [data,setData]=useState({})
    useEffect(()=> {
        fetch(url)
        .then(res=> res.json())
        .then((data)=>{
            setData(data)
        })
        // console.log("data2",data);
    },[currency])
    // console.log("data3",data);
    return data
    
}

export default UseCurrencyInfo
