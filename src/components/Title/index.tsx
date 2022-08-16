import styles from './styles.module.scss';
// interface dos atributos do titulo 
interface TitleProps {
  numberOfTasks: number,
  numberOfTasksCompleted: number,
}
/* o component 'Title' vai renderizar o numero de tarefas criadas
,  o numero de tarefas completadas e o total de tarefas
*/
export function Title({ 
  numberOfTasks, 
  numberOfTasksCompleted, 
}: TitleProps) {
  return (
    <div className={styles.title}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <span>{numberOfTasks}</span>
      </div>
      <div className={styles.completedTasks}>
        <strong>Concluídas</strong>
        <span>{numberOfTasksCompleted} de {numberOfTasks}</span>
      </div>
    </div>
  );
}