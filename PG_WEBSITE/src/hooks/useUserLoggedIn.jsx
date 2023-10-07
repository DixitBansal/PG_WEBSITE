import { useState, useEffect } from 'react'

function useUserLoggedIn(url) {
    const [userData, setUserData] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [hasFetched, setHasFetched] = useState(false)

    async function getUserProfile() {
        let response = await fetch(url, {
            method: "GET",
            credentials: "include",
        })

        response = await response.json()

        if (response.msg === "successfull") {
            setIsLoggedIn(true)
            setUserData(response.data)
        }
        setHasFetched(true)

    }

    useEffect(() => {
        getUserProfile()
    }, [])

    return [userData, isLoggedIn, hasFetched]
}

export default useUserLoggedIn