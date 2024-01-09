// React
import { useState, useContext } from "react";
// Styles
import styles from './index.module.css'
// Context
import { TaskListContext } from "../../context/tasklist";
// Icons
import { FiPlus } from "react-icons/fi";

export default function AddTask() {
  const [value, setValue] = useState('');
  const { addTask } = useContext(TaskListContext);

  const clearText = () => setValue('')

  const addNewTask = (e) => {
    e.preventDefault()
    if(value !== '') {
      addTask(value);
      clearText();
    } else {
      alert('O campo está vazio')
    }
  }

  return (
    <form onSubmit={(e) => addNewTask(e)} className={styles.inputWrapper}>
      <input
        className={styles.inputTextField}
        type="text"
        value={value}
        placeholder="Dê um título para a tarefa"
        onChange={(e) => setValue(e.target.value)}
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