// React
import { useState, useContext, type FormEvent } from "react";
// Styles
import * as S from './styles'
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
    <S.InputWrapper
      onSubmit={(e: FormEvent<HTMLFormElement>) => addNewTask(e)}
    >
      <S.InputTextField
        type="text"
        value={value}
        placeholder="Dê um título para a tarefa"
        onChange={
          (e: FormEvent<HTMLInputElement>) => {
            setValue((e.target as HTMLInputElement).value)
          }
        }
      />
      <S.InputSubmit>
        <span className="addTitle">
          Adicionar Tarefa
        </span>
        <div className="addIcon">
          <FiPlus size={22}/>
        </div>
      </S.InputSubmit>
    </S.InputWrapper>
  )
}