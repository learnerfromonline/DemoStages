// import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
// import { Fragment } from "react";

// function TodoDetails({toDetails,openDialog,setOpenDialog,setTodoDetails}){
//     return(
// <Fragment>
//     <Dialog onClose={()=>setOpenDialog(false)} open={openDialog}>
//         <DialogTitle>
//             {toDetails?.todo}
//         </DialogTitle>
//         <DialogActions >
//             <Button onClick={()=>{
//                 setOpenDialog(false);
//                 setTodoDetails(null);
//             }}>
//                 Close
//             </Button>
//         </DialogActions>
//     </Dialog>
// </Fragment>
//     )
// }
// export default TodoDetails
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

function TodoDetails({ toDetails, openDialog, setOpenDialog, setTodoDetails }) {
    return (
        <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
            <DialogTitle>
                {toDetails?.todo || "No details available"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={() => {
                    setOpenDialog(false);
                    setTodoDetails(null);
                }}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default TodoDetails;
