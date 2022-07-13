import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";
import PropTypes from "prop-types";
import octagon from "../../img/octagon.svg";
//Podiamos ter usado prpos.title, props são imutaveis
export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          /* return <div key={task.id}>{task.title}</div>; */
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </div>
      <button onClick={addTask} className="btn" img src={octagon} alt="octagon">
        Adicionar Tarefa
      </button>
    </div>
  );
}
//Validando o tipo de Props será permitido.
Tasklist.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
