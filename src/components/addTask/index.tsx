// React
import { useState, useContext, type FormEvent } from "react";
// Styles
import styles from './index.module.css'
// Context
import { TaskListContext } from "../../context/tasklist";
// Icons
import { FiPlus } from "react-icons/fi";
// Types
import { ITaskListContextValueProps } from "../../context/types";

export default function AddTask() {
  const [value, setValue] = useState('');
  const { addTask } = useContext(TaskListContext) as ITaskListContextValueProps;

  const clearText = () => setValue('')

  const addNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(value !== '') {
      addTask(value);
      clearText();
    } else {
      alert('O campo está vazio')
    }
  }

  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => addNewTask(e)} className={styles.inputWrapper}>
      <input
        className={styles.inputTextField}
        type="text"
        value={value}
        placeholder="Dê um título para a tarefa"
        onChange={
          (e: FormEvent<HTMLInputElement>) => {
            setValue((e.target as HTMLInputElement).value)
          }
        }
      />
      <button className={styles.inputSubmit} type="submit">
        <span className={styles.addTitle}>
          Adicionar Tarefa
        </span>
        <div className={styles.addIcon}>
          <FiPlus size={22}/>
        </div>
      </button>
    </form>
  )
}