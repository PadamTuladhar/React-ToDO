import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import classes from '../../styles.module.css';

export default function TodoDetails({ todoDetails, openDialog, setOpenDialog, setTodoDetails }) {

    return (
        <>
            {/* also can use <Fragment></Fragment> to return multiple html elements */}
            <Dialog open={openDialog}>
                <DialogTitle>{todoDetails?.todo}</DialogTitle>
                <div className={classes.dialogWrapper}>
                    <p>UserId: {todoDetails?.userId}</p>
                    <p>Completed: {todoDetails?.completed ? 'Yes' : 'No'}</p>
                </div>
                <DialogActions>
                    <Button onClick={() => { setOpenDialog(false); setTodoDetails(null); }} className={classes.button}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )

}