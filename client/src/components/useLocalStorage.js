import {useState} from 'react';

export const useLocalStorage = (key, initVal) => {
    const [stored, setStored] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initVal;
    })
    const value = v => {
        setStored(v)
        window.localStorage.setItem(key, JSON.stringify(v))
    }
    return [stored, setStored, value]
}