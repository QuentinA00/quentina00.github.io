import { promiseWrapper } from "./promiseWrapper"

export const simpleFetch = async (urlEndpoint: string) => {
    try {
        // here we are fetching the backend with the endpoint (baseUrl + urlEndpoint parameter) and wait for its response that we'll assign to responseFromBackend
        const responseFromBackend = await fetch(urlEndpoint)
        
        // when we receive the data in responseFromBackend, we parse it into json format
        const dataReceived = await responseFromBackend.json()
    
        // rise an error if the backend respond with an error
        if (!responseFromBackend.ok) {
            throw new Error(dataReceived.message || 'it seems like an error occured while fetching the datas.....')
        }
        return dataReceived
    }
    catch (error) {
        console.error('-----fetcher.ts-----','url: ', urlEndpoint, 'Fetch error:', error)
        throw new Error('Network error or API is down')
    }
}

// export const simpleFetchWithPromise = async (urlEndpoint:string) => {
//     try {
//         const promise = fetch(urlEndpoint)
//             .then((response) => response.json())

//         return promiseWrapper(promise)
//     } 
//     catch (error) {
//         console.error('-----fetcher.ts-----','url: ', urlEndpoint, 'Fetch error:', error)
//         throw new Error('Network error or API is down')
//     }
// }