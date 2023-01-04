import { useLoaderData } from "react-router-dom"


export default function Stocks(){

   const stock = useLoaderData()
   console.log(stock)

    return(
        <div className="stocks">
            <h1>{stock[0].symbol}</h1>
            <h1>${stock[0].grossProfit}.00</h1>
        </div>
    )

}