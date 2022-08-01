import { useCallback, useState } from 'react';


export interface IUseDialog {
    open: boolean;
    onOpen: () => void;
    onClose: (...args: any[]) => void;
}

export const useDialog = (initialState: boolean = false): IUseDialog => {
    const [open, setOpen] = useState(initialState);


    const onOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setOpen(false);
    }, []);

    return {
        open,
        onOpen,
        onClose,
    };
};