import  { FormEvent, useState} from 'react';
import { FormCreate } from './components/FormCreate';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { Title } from './components/Title';
//import { Notification } from './components/Notify';
import {  toast, ToastContainer } from 'react-toastify';

import { v4 as createId } from 'uuid';

import styles from './styles/App.module.scss';
import './styles/global.scss';
//import 'react-tostify/dist/ReactToastify:min.css';
const tasksDefault = [
  
  
  
  {
    id: '1a4ca1e4c3749fa5b0f9dfec97da67c43052bb4c',
    content: 'Learn more React  and Vite ',
    isCompleted: false,
  },

  {
    id: '47e27685509090148cdb5d84fd49e2aa98518b48',
    content: 'Learn more deep sql and typeOrm',
    isCompleted: false,
  },
  {
    id: '75b7a1078ca80ee93e8f4d4aacef31b59d5acf87',
    content: 'Manter treino Capoeira,corrida e começar jiujitsu',
    isCompleted: false,
  },
  {
    id: '0f4614cef021d765d116f345251caa98492572e8',
    content: 'Manter-se Aprendendo  e focado sempre',
    isCompleted: false,
  }
  
  
]

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>(tasksDefault);
  const [changeInput, setChangeInput] = useState('');
  //const [updatedCongratulationTaskCompleted,setUpdatedCongratulationTaskCompleted] = useState('');
  //const congratulation = ('');
  const countNumberOfTasks = tasks.length;
  const countNumberOfTasksComplete = tasks.filter(task => task.isCompleted === true).length;
  const notify = () => toast("Wow so easy!");
  function handleCreateNewTask(value: string) {
    const createRandomId = createId();

    const data = {
      id: createRandomId,
      content: value,
      isCompleted: false
    }
      // operador spread
    setTasks([...tasks, data]);
    setChangeInput('');
  }

  function handleDeleteTask(id: string) {
    const deleteTask = tasks.filter(task => task.id !== id);

    setTasks(deleteTask);
  }

  function handleCompletedTask(id: string) {
   
    const updatedTask = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
      //eturn notify;
    });

    setTasks(updatedTask);
  }

  /*
  function handleCongratulationTaskCompleted(id: string) {
    const updatedCongratulationTaskCompleted = tasks.map(task => {
     
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
        const congratulation = task.isCompleted
      }

      return congratulation;
    });

    setUpdatedCongratulationTaskCompleted(congratulation);
  }
  document.write(congratulation) ; 
console.log(congratulation);

 <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
*/


  
      
  return (
    <>
       
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <FormCreate 
            onCreateNewTask={handleCreateNewTask}
            changeInput={changeInput}
            setChangeInput={setChangeInput}
            
          />
           
        </div>
        <Title 
          numberOfTasks={countNumberOfTasks}
          numberOfTasksCompleted={countNumberOfTasksComplete}
        
        />

        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
            onDeleteTask={handleDeleteTask}
            onCompletedTask={handleCompletedTask}
            //onUpdatedCongratulationTaskComplete={handleCongratulationTaskCompleted}
          />
       ))}
       
       
       
      </main>
    
    </>
    
  )
  
        }
        
 

export default App

