import { useEffect, useState } from "react"
let currency ="inr"
let url = `https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_7dCqhNdbHkG5K5MpZ1rvS9QAigfh71VlDFtUatXE&currencies=EUR%2CUSD%2CCAD`


function UseCurrencyInfo(currency) {
    const [data,setData]=useState({})
    useEffect(()=> {
        fetch(url)
        .then(res=> res.json())
        .then((data)=>{
            setData(data)
        })
    },[currency])
    return data   
}

export default UseCurrencyInfo
