import { ReactNode } from "react";

export interface ITaskProps {
  id: string
  title: string
  finished?: boolean
}

export interface ITaskListContextProps {
  children: ReactNode
}

export interface ITaskListContextValueProps {
  taskList: ITaskProps[]
  addTask: (title: string) => void
  removeTask: (id: string) => void
  finishTask: (id: string) => void
  reopen: (id: string) => void
  reorderList: (from: number, to: number) => void
}