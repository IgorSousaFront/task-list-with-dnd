// React
import { useContext } from 'react';
// Components
import Title from './components/title';
import AddTask from './components/addTask';
import TaskItem from './components/taskItem';
// Context
import { TaskListContext } from './context/tasklist';
import type { ITaskListContextValueProps, ITaskProps } from './context/types';

function App() {
  const { taskList } = useContext(TaskListContext) as ITaskListContextValueProps

  return (
    <div className="App">
      <div className="container">
        <div className="header-title">
          <Title>Adicionar tarefa</Title>
        </div>
        <AddTask />
        {taskList.length > 0 && (
          <>
            <Title>Lista de tarefas</Title>
            <ul className="task-list">
              {taskList.map((task: ITaskProps, idx: number) => (
                <li key={idx}>
                  <TaskItem
                    order={idx}
                    title={task.title}
                    id={task.id}
                    finished={task.finished}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
