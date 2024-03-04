import {useEffect} from 'react'

export default function useClickOutside(ref, f) {
    useEffect(() => {
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            f();
        }
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        }
    }, [ref , f]);
    
}
