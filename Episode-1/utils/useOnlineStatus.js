// Our Custom hook which will be used to show Either this user is online or Offline

import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOffline = () => {
            setOnlineStatus(false);
        }
        const handleOnline = () => {
            setOnlineStatus(true);
        }

        // Setup
        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);

        // cleanUp
        return () => {
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        }
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;