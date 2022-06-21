import React, {useState} from 'react';
import './style.css'

import {Card} from '../../components/cards';

export function Home() {
  const [MudarNomeInput, setMudarNomeInput] = useState('');
  const [students, setStudents] = useState([]);

  function AdicionarEstudante(){
    const newStudent:  {
      nome: string | number | boolean  | null | never; 
      time: string | number | boolean | null | never;}  = {
      nome: MudarNomeInput,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    setStudents(prevState => [...prevState, newStudent]);
  }


  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>

        <div>
          <strong>Maia</strong>
          <img src='https://github.com/maiatech-solution.png' alt="logo" />
        </div>
      </header>
      <input type="text" placeholder='Digite seu nome: '
      onChange={e => setMudarNomeInput(e.target.value)}/>
      <button type='button' onClick={AdicionarEstudante}>Adicionar</button>

      {
        students.map(student => 
        <Card
          key={student.time}
          nome={student.nome} 
          time={student.time}/>)
        
      }
    </div>

  )
}
