import * as MyReact from "../../lib";

const tasks = ['Wash clothes', 'Feed the dog', 'Take out the trash']

export default function App() {
  // return <TaskList tasks={tasks}/>;

  return MyReact.createElement(TaskList, {tasks: tasks});
}

function TaskList(props) {
  // return <ul>{ props.tasks.map(task => <Task task={task} />) }</ul>;

  return MyReact.createElement(
    'ul', 
    {}, 
    props.tasks.map(
      task => {
        return MyReact.createElement(Task, {task: task})
      }
    )
  );
}

function Task(props) {
  

  // return <li className='wwefw' style="">{props.task}</li>;


  return MyReact.createElement('li', {className: 'taskListItem'}, props.task);
} 
