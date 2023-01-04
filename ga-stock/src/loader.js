

export const stockLoader = async ({params}) => {

    const symbol = params.symbol
    const apiKey = "4c24503c7935e21ca5605d9b48819918"

    return (await fetch(
        `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=120&apikey=${apiKey}`
    )).json()
}