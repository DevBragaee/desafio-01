import { PlusCircle } from 'phosphor-react';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import styles from './styles.module.scss';
// interface  com as propriedades do formulario 
interface FormCreateProps {
  onCreateNewTask: (value: string) => void;
  changeInput: string;
  setChangeInput: Dispatch<SetStateAction<string>>;
}
  /* Aqui o componente "criarFormulario (uma funcao que recebe como paramento os atributos tipados da interface "FormCreateProps"
  que sao: o metodo 'onCreateNewTask' e as duas variaveis "changeInput e setChangeinput" 
  tendo como retorno a renderizacao do botao 'Criar*/
  
export function FormCreate({ onCreateNewTask, changeInput, setChangeInput}: FormCreateProps) {
  return (
    <form className={styles.formCreate} > 
      <input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} type="text" placeholder="Adicione uma nova tarefa" />
      <button type="button" onClick={() => onCreateNewTask(changeInput)}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}