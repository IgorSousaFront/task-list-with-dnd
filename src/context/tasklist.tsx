import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";
// Types
import type { ITaskProps, ITaskListContextProps, ITaskListContextValueProps } from './types'

const TaskListContext = createContext<ITaskListContextValueProps | null>(null);

const TaskListProvider = ({children}: ITaskListContextProps) => {
  const [taskList, setTaskList] = useState<ITaskProps[]>([]);

  const addTask = (title: string) => {
    const uuid = uuidv4()
    const newTask = {
      id: uuid,
      title: title
    }
    setTaskList([...taskList, newTask])
  }

  const removeTask = (id: string) => {
    const updatedList = taskList.filter(item => item.id !== id)

    setTaskList(updatedList)
  }

  const finishTask = (id: string) => {
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

  const reopen = (id: string) => {
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

  const reorderList = (from: number, to: number) => {
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