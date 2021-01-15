import {useState, useEffect} from 'react';
import { backendUrl } from '../config/config';
import axios from 'axios';

// const baseUrl = 'https://24rolls.retailcrm.ru/app/api/';

export default (url) => {
    const baseUrl = backendUrl;
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [resOption, setResOption] = useState({method: "GET"});
    
    useEffect(() => {
        if(!isLoading) {
            setIsLoading(true)
        }
        axios(baseUrl + url, resOption)
            .then(res => {
                setResponse(res.data);
                console.log(res, res.data)
            })
            .catch(err => {
                setError(err);
                console.log(err, err.response);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [url, resOption])
    return [response, error, isLoading]
}
