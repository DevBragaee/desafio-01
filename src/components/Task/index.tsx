// imports of libraries
import { Check, Trash} from 'phosphor-react';
import styles from './styles.module.scss';




 import { toast } from 'react-toastify'
 //import 'react-tostify/dist/ReactToastify:min.css'


 // interface dos atributos de cada tarefa 
interface TaskCardProps {
  id: string,
  content: string,
  isCompleted: boolean,
  onDeleteTask: (id: string) => void;
  onCompletedTask: (id: string) => void;
  //onUpdatedCongratulationTaskComplete:( countNumberOfTasksComplete: any) => void;

}
export function Task({ id, content, isCompleted, onDeleteTask, onCompletedTask }: TaskCardProps) {
  return (
    <div className={styles.task}>
      <label>
        <input type="checkbox" className={styles.toggleInput} />
        <button onClick={() => onCompletedTask(id)} className={styles.checkbox}>
          <Check size={14} weight="bold" />
        </button>
      </label>
      <p className={isCompleted ? styles.checked : ''}>{content}</p>
      <button type="button" onClick={() => onDeleteTask(id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}

