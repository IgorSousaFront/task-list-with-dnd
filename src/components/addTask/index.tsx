// React
import { useState, useContext, type FormEvent, useEffect } from "react";
// Styles
import * as S from './styles'
// Context
import { TaskListContext } from "../../context/tasklist";
// Icons
import { FiPlus } from "react-icons/fi";
// Types
import { ITaskListContextValueProps } from "../../context/types";
import Toast, { ToastTypeEnum } from "../toast";

export default function AddTask() {
  const { addTask } = useContext(TaskListContext) as ITaskListContextValueProps;

  const [value, setValue] = useState('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const clearText = () => setValue('')

  useEffect(() => {
    if(showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }, [showToast]);

  const addNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(value !== '') {
      addTask(value);
      clearText();
    } else {
      setShowToast(true);
    }
  }

  return (
    <S.InputWrapper
      onSubmit={(e: FormEvent<HTMLFormElement>) => addNewTask(e)}
    >
      <S.InputTextField
        type="text"
        data-testid="addtask-inputfield"
        value={value}
        placeholder="Dê um título para a tarefa"
        onChange={
          (e: FormEvent<HTMLInputElement>) => {
            setValue((e.target as HTMLInputElement).value)
          }
        }
      />
      <S.InputSubmit data-testid="addtask-submit">
        <span className="addTitle">
          Adicionar Tarefa
        </span>
        <div className="addIcon">
          <FiPlus size={22}/>
        </div>
      </S.InputSubmit>

      <Toast
        data-testid="toast-error-message"
        type={ToastTypeEnum.ERROR}
        visible={showToast}
        message="Não é possível criar tarefas sem título."
      />
    </S.InputWrapper>
  )
}