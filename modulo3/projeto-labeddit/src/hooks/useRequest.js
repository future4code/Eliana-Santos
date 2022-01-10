import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequest = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        alert(error.response.message)
      })
  }, [url])

  return (data)
}

export default useRequest