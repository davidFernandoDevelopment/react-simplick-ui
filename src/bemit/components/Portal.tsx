import { Container } from '@generic/setting';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


export interface PortalProps {
    children?: React.ReactNode;
    disablePortal?: boolean;
    container?: Container;
}

const getContainer = (container?: Container) => {
    return typeof container === 'function' ? container() : container;
};

const Portal = ({ children, container, disablePortal = false }: PortalProps) => {

    const [mountNode, setMountMode] = useState<Element | null>(null);

    useEffect(() => {
        if (!disablePortal) {
            setMountMode(getContainer(container) || document.body);
        }
    }, [container, disablePortal]);


    return (
        <>
            {mountNode ? ReactDOM.createPortal(children, mountNode) : children}
        </>
    );
};


export default Portal;