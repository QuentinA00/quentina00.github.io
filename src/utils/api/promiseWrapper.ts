// import { AppTextInterfaces } from "../../interfaces/appTextInterfaces"
import { simpleFetch } from "./fetcher"

export const promiseWrapper = (promiseToWrap: Promise<any>) => {

    let currentPromiseStatus: 'pending' | 'success' | 'error' = 'pending'
    let fetchedDataOrError: any | Error

    const suspender = promiseToWrap.then(
        (data: any) => {
            currentPromiseStatus = 'success'
            fetchedDataOrError = data
        },
        (error: Error) => {
            currentPromiseStatus = 'error'
            fetchedDataOrError = error
        }
    )

    return () => {
        switch (currentPromiseStatus) {
            case "pending": throw suspender
            case "error": throw fetchedDataOrError
            default: return fetchedDataOrError
        }
    }
}

export const fetchWithPromise = (urlEndpoint: string) => promiseWrapper(simpleFetch(urlEndpoint))