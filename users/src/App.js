import React, { useState } from 'react';
import { Row, Col, Btn, Table } from '@abymosa/develm-sg'
import axios from 'axios';

const App = () => {

  const [model, setModel] = useState({ users: [], isLoading: false });


  const fetchUsers = () => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => setIsLoading(false));
  }

  const setUsers = (x) => {
    setModel(prev => ({ ...prev, users: x }));
  }
  const setIsLoading = (x) => {
    setModel(prev => ({ ...prev, isLoading: x }));
  }

  return (
    <div className="App">
      <Row className='p-5'>
        <Col md12>
          <h2>Users</h2>
          <p>Click Btn below to fetch users ..</p>
          <Btn text='Fetch Users' onClick={fetchUsers} />

          {
            model.users.length === 0 && !model.isLoading ? null :

              <Table
                theme='error'
                isLoading={model.isLoading}
                grid={[.25, .25, .25, .25]}
                head={['Name', 'User Name', 'email', 'Website']}
                rows={model.users}
                renderRow={(user) => {
                  return (
                    <div>
                      <div>{user.name}</div>
                      <div>{user.username}</div>
                      <div>{user.email}</div>
                      <div>{user.website}</div>
                    </div>
                  )
                }}
              />
          }
        </Col>

      </Row>
    </div>
  );
};

export default App;
