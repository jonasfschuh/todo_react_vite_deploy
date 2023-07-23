import { useState } from 'react'

const TodoForm = ( {addTodo} ) => {
  const [value, SetValue] = useState("");
  const [category, SetCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    console.log("enviou form!");
    console.log(value, category);
    // add todo da classe principal app passando por parametro 
    addTodo(value, category);
    //limpar os campos
    SetValue("");
    SetCategory("");
  }

  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input  type="text" 
                    placeholder="Digite o título"
                    value={value} 
                    onChange={(e) => SetValue(e.target.value)}/>
            <select value={category} 
                    onChange={(e) => SetCategory(e.target.value)}>
                <option value="">Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm