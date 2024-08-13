import {Card, CardActions, CardContent, Typography} from "@mui/material"
function TodoItem({todo,frtchTodoId}){
    return(
        <div>
            <Card sx={{
                maxWidth:350,
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
            }}>
                <CardContent>
                    <Typography variant="h5" color={'text.secondary'}>

                    <p1>{todo.todo}</p1>
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    backgroundColor:"black",
                    color:"wheat",
                    opacity:'0.76',
                    '&:hover':{
                        opacity:'1'
                    }
                }}>
                    <button onClick={()=>{
                        frtchTodoId(todo.id)
                    }}>

                    Details
                    </button>
                </CardActions>

            </Card>
            {console.log(todo)}
        </div>
    )
}
export default TodoItem;