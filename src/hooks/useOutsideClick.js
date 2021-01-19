import { useEffect, useRef } from "react";

export const useOutsideClick = (action) => {

    const domNode = useRef();

    useEffect(() => {

        const handler = (e) => {
            if(!domNode.current.contains(e.target)){
                action();
            }
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    }, [action])

    return domNode;
}
