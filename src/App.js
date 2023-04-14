import React from 'react';
import { Form, Input, Button, Checkbox, } from 'antd';
import './App.css';
import { useState } from 'react';
import logo from './5550463.png'

function App() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  
  return (
      <div className="form">
      
      <Form
        className='loginform'
        name="basic"
        layout="vertical"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <img className='image' src={logo}/>
        <Form.Item
          label="Usuario"
          name="Usuario"
          rules={[{ required: true, message: 'Por favor diligencie su usuario!' }]}
        >
          <Input value={usuario} onChange={e => setUsuario(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: 'Por favor diligencie su contraseña!' }]}
        >
          <Input.Password value={contraseña} onChange={e => setContraseña(e.target.value)}/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" >
          <Checkbox>Recordarme</Checkbox>
        </Form.Item>

        <Form.Item >
          <Button 
            type="default" 
            htmlType="submit"
            className='estilobotoningresar'
            onClick={() => console.log({usuario},{contraseña})}
          >
            Ingresar
          </Button>
          </Form.Item>

          <Form.Item >
          <Button 
            type="default" 
            htmlType="button" 
            className='estilobotoncancelar'
            onClick={() => console.log('canceló')}
          >
            Cancelar
          </Button>
        </Form.Item>
      </Form>
      </div>
    
  );
}

export default App;
