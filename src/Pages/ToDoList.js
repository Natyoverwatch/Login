import React from 'react';
import '../Styles/ToDoList.scss'
import { useState } from 'react';
import { Form, Input,} from 'antd';

const ToDoList = () => {
    const [datos, setDatos] = useState([]);
    const [notes, setNotes] = useState([]);
    let [counter, setCounter] = React.useState(0);
  //destructurng
  //React.useState => [value, function to update the value];
    const contador = (value) => {
        setCounter(counter + value);
    };


    const AgregarNota =() =>{
        const newNote = {
            name: datos,
            uid: counter,
        }
        setNotes([...notes, newNote])
    };

    return(
        <>
            <Form
                name="basic"
                layout="vertical"
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                name="Usuario"
                rules={[{ required: true, message: 'Por favor diligencie su usuario!' }]}
                >
                <Input onClick={() => contador(1)} value={datos} onChange={e => setDatos(e.target.value)} />
                </Form.Item>
            </Form>
            <ul >
                {notes.map((user) => (
                    <li key={user.uid}>
                        {user.name}
                        
                    </li>
                ))}
            </ul>
            <button onClick={AgregarNota}> Agregar a la lista </button>
        </>
    )
}

function ToDo() {
    return(
        <div>
            Actualizar notas
            <ToDoList/>
        </div>
    )
}

export default ToDo;