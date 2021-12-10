import axios from 'axios'
import { useState, useEffect } from 'react'

const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    auth: token
                }
            })
            .then((res) => setData(res.data))
            .catch((error) => console.log(error))
    }, [url]);

    return data;
}
export default useRequestData;