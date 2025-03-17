import { useEffect, useState } from "react";
import classes from './styles.module.css'
import TodoItem from "./components/todo-items";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";


function App() {

  const [todolist, setTodolist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchTodoDetail(getTodoId) {
    try {
      setLoading(true);
      const singleTodo = await (await fetch(`https://dummyjson.com/todos/${getTodoId}`)).json();
      if (singleTodo) {
        setLoading(false);
        setTodoDetails(singleTodo);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg('Cannot load details.')
    }
  }

  async function fetchTodos() {
    try {
      setLoading(true);
      const todoList = await (await fetch('https://dummyjson.com/todos')).json();
      if (todoList.todos && todoList?.todos.length > 0) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
        setTodolist(todoList?.todos);
      }
      else {
        setTodolist([]);
        setLoading(false);
        setErrorMsg('');
      }

    } catch (e) {
      console.log(e);
      setErrorMsg('Error on loading todo list.')
    }
  }
  useEffect(() => {
    fetchTodos();
  }, [])
  return (
    <>
      <div className={classes.mainWrapper}>
        {
          loading ? <Skeleton variant="rectangular" width={650} height={50} /> :
            <>
              <div className={classes.headerTitle}>To do list</div>
              <div className={classes.todolistWrapper}>
                {
                  todolist && todolist.length > 0 ?
                    todolist.map(item => <TodoItem key={item.id} fetchTodoDetail={fetchTodoDetail} todo={item} />) : <p>No record found</p>
                }
              </div>
              <TodoDetails todoDetails={todoDetails} openDialog={openDialog} setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails} />
            </>
        }
      </div>
    </>
  )
}

export default App
