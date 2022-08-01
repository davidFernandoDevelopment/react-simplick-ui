import { Dialog as DialogComponent } from './Dialog';
import DialogTitle from '../c-dialogTitle/DialogTitle';
import DialogActions from '../c-dialogActions/DialogActions';
import DialogContent from '../c-dialogContent/DialogContent';
import { useDialog } from './useDialog';


export const Dialog = Object.assign(DialogComponent, {
    useDialog,
    Title: DialogTitle,
    Content: DialogContent,
    Actions: DialogActions
});

export default Dialog;