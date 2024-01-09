import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

const TaskListContext = createContext();

const TaskListProvider = ({children}) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (title) => {
    const uuid = uuidv4()
    const newTask = {
      id: uuid,
      title: title
    }
    setTaskList([...taskList, newTask])
  }

  const removeTask = (id) => {
    const updatedList = taskList.filter(item => item.id !== id)

    setTaskList(updatedList)
  }

  const finishTask = (id) => {
    const updatedList = taskList.map(task => {
      if(task.id === id) {
        return {
          ...task,
          finished: true
        }
      }
      return task
    })

    setTaskList(updatedList);
  }

  const reopen = (id) => {
    const updatedList = taskList.map(task => {
      if(task.id === id) {
        return {
          ...task,
          finished: false
        }
      }
      return task
    })

    setTaskList(updatedList);
  }

  const reorderList = (from, to) => {
    setTaskList(produce(taskList, draft => {
      const dragged = draft[from]
      draft.splice(from, 1)
      draft.splice(to, 0, dragged)
    }))
  }

  return(
    <TaskListContext.Provider value={{ taskList, addTask, removeTask, finishTask, reopen, reorderList }}>
      {children}
    </TaskListContext.Provider>
  )
}

export { TaskListContext, TaskListProvider };