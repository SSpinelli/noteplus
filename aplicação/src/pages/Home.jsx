import React, { useState, useEffect } from 'react';

function Home (_props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = () => {
    fetch('/home')
      .then((res) => res.json())
      .then((resJson) => setUsers(resJson))
      .catch((error) => console.error(error))
  }

  const handleRemove = ({ target: { name } }) => {
    fetch(`/home/${name}`, {
      method: 'DELETE',
    });

    const newUsers = users.filter((user) => user.id !== Number(name));

    setUsers(newUsers);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{ user.id }</td>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <button onClick={ handleRemove } name={ user.id } type="button">Excluir</button>
              <button name={ user.id } type="button">Editar</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home;
