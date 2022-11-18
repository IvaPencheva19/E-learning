import { useState } from "react"

export const useLocalStorage = (key, defaultValue) => {

    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);


        const objStoredData = JSON.parse(storedData);
        const currentDate = new Date();
        if (objStoredData?.exp * 1000 <= currentDate.getTime()) {
            localStorage.setItem(key, JSON.stringify({}));
            return defaultValue;
        }

        return storedData ? JSON.parse(storedData) : defaultValue;
    });

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));

        setValue(newValue);
    }

    return [
        value,
        setLocalStorageValue
    ];
}