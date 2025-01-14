import axios from "axios";

export const defaultInstance = axios.create({
    baseURL: '',
    timeout: 10000, 
    timeoutErrorMessage: 'An error occured please try again',
})