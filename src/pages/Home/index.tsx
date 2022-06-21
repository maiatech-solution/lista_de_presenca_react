import React, {useState, useEffect} from 'react';
import './style.css'

import {Card} from '../../components/cards';

export function Home() {
  const [MudarNomeInput, setMudarNomeInput] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({nome: '', avatar: ''});

  function AdicionarEstudante(){
    const newStudent = {
      nome: MudarNomeInput,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/maiatech-solution')
    .then(response => response.json())
    .then(data => {
      setUser({
        avatar: data.avatar_url,
        nome: data.name,
      })
    })
  })

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>

        <div>
          <strong>{user.nome}</strong>
          <img src={user.avatar} alt="logo" />
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
