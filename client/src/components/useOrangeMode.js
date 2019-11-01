import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useOrangeMode = (key, initVal) => {
    const [orange, setOrange] = useLocalStorage(key, initVal)

    const changeHandler = (e) => {
        setOrange(e.target.dark)
    }
    useEffect(() => {
        if (orange === true) {
            document.querySelector('body').classList.add('orange')
        } else {
            document.querySelector('body').classList.remove('orange')
        }
    }, [orange])
    return [orange, setOrange, changeHandler]
}


