// React
import { useContext, useRef } from 'react';
// Icons
import { FiCheck, FiTrash2, FiRotateCcw } from "react-icons/fi";
import { MdDragIndicator } from "react-icons/md";
// Styles
import styles from './index.module.css';
// Context
import { TaskListContext } from '../../context/tasklist';
import { useDrag, useDrop } from 'react-dnd';
import { ITaskListContextValueProps } from '../../context/types';

interface ITaskItemProps {
  title: string
  order: number
  id: string,
  finished?: boolean
}

export default function TaskItem({
  title,
  order,
  id,
  finished
}: ITaskItemProps) {
  const {
    removeTask,
    finishTask,
    reopen,
    reorderList
  } = useContext(TaskListContext) as ITaskListContextValueProps;
  
  const ref = useRef<any>(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: {
      id,
      order,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: any, monitor: any) {
      const draggedIndex = item.order;
      const targetIndex = order;

      if(draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }
      
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      reorderList(draggedIndex, targetIndex)

      item.order = targetIndex;
    }
  })

  dragRef(dropRef(ref));

  return (
    <div
      ref={ref}
      data-uuid={id}
      className={`
        ${styles.taskItem}
        ${finished && styles.finished}
        ${isDragging && styles.isDragging}
      `}
    >
      <div className={styles.title}>
        <MdDragIndicator size={22}/>
        <span>{title}</span>
      </div>
      <div className={styles.buttons}>
        {!finished ? (
          <>
            <button
              onClick={() => removeTask(id)}
              style={{ borderColor: '#db4343' }}
            >
              <FiTrash2 size="22" color="#db4343" />
            </button>
            <button
              onClick={() => finishTask(id)}
              style={{ borderColor: '#22ae16' }}
            >
              <FiCheck size="22" color="#22ae16" />
            </button>
          </>
        ) : (
          <button
            onClick={() => reopen(id)}
            style={{ borderColor: '#22ae16' }}
          >
            <FiRotateCcw size="22" color="#22ae16" />
          </button>
        )}
      </div>
    </div>
  )
}