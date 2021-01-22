import Header from './components/Header';
import Tasks from './components/Tasks'
import {useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day:  'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Lecture',
      day:  'Feb 26th at 1:30pm',
      reminder: true,
    
    },
    {
      id: 3,
      text: 'Food shopping',
      day:  'Feb 6th at 3:30pm',
      reminder: false,
    },
  ])

  //delete task

  const deleteTask =(id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header  />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
