import '@testing-library/jest-dom'
import { act, render, screen, fireEvent } from "@testing-library/react";
import AddTask from "."
import { TaskListProvider } from "../../context/tasklist";
import userEvent from '@testing-library/user-event';

describe('Component <AddTask />', () => {  
  it('Should render the component <AddTask /> correctly', () => {
    const { getByTestId } = render(<TaskListProvider><AddTask /></TaskListProvider>);

    expect(getByTestId('addtask-submit')).toBeInTheDocument();
    expect(getByTestId('addtask-inputfield')).toBeInTheDocument();
  })

  it('Should render a toast component when input is empty', async () => {
    render(<TaskListProvider><AddTask /></TaskListProvider>);

    const addTaskButton = screen.getByTestId('addtask-submit');
    const toastElement = screen.getByTestId('toast-error-message');

    act(() => {
      userEvent.click(addTaskButton);
    })

    expect(toastElement).toBeVisible();
  })

  it('Should not render a toast component when input is filled', () => {
    render(<TaskListProvider><AddTask /></TaskListProvider>);

    const addTaskButton = screen.getByTestId('addtask-submit');
    const addTaskField = screen.getByTestId('addtask-inputfield');
    const toastElement = screen.getByTestId('toast-error-message');

    act(() => {
      userEvent.type(addTaskField, 'Nome da tarefa');
      userEvent.click(addTaskButton);
    })

    expect(toastElement).not.toBeVisible();
  })
})