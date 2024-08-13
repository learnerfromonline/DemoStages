import { useEffect, useState } from "react";
// import classes from "../Components/todoos.css"
// import classess from "../Components/todoos.css"
import classes from "./style.module.css"
import TodoItem from "./todo-items";
import TodoDetails from "./todo-details";
function Todo(){
    const [todos,setTodos] = useState([])
    const [loading,setLoading] = useState(true)
    const [errmsg,setErrmsg]=useState('')
    const [toDetails,setTodoDetails] = useState(null)
    const [openDialog,setOpenDialog] = useState(false)
    async function frtchTodoId(getid) {
            const Apiid =await fetch(`https://dummyjson.com/todos/${getid}`)
            const detailRes = await Apiid.json()
            console.log(detailRes)
            setTodoDetails(detailRes)
            setOpenDialog(true)
        
    }
    async function fetchTodosList() {
        setLoading(true)
        const ApiRes = await fetch('https://dummyjson.com/todos')
        const result = await ApiRes.json()
        // console.log(result)
        if(result?.todos && result?.todos.length>0){
            setLoading(false)
            setTodos(result?.todos)
        }
        
    }
    useEffect(()=>{
        fetchTodosList();
    },[])
    // console.log(todos,"The Todos is")
    return(
        <>
        <div className={classes.wrapper}>
            <h1 className={classes.header}>This is sample Todo List</h1>
            <div className={classes.todoListWrapper}>
                {
                    todos && todos.length>0 ?
                    todos.map((todoItem)=><TodoItem 
                    frtchTodoId = {frtchTodoId}
                    todo={todoItem}/>)
                    :null
                }
                </div>
              
                    <TodoDetails setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails} openDialog={openDialog} toDetails={toDetails}/>
         
            </div>
        </>
    )
}
export default Todo;