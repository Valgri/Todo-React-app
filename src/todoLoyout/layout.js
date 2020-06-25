import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


import './layout.css';

const Layout = props => {
        
        return (
                <div className='container container-my'>
                        <InputGroup className="mb-3">
                                <FormControl
                                type='text'
                                        onChange={props.handleInput}
                                        placeholder="Write your todo"
                                        aria-describedby="basic-addon2"
                                        value={props.title}
                
                                />
                                <InputGroup.Append>
                                        <Button variant="outline-secondary" onClick={props.handleAdd}>Add todo</Button>
                                </InputGroup.Append>
                        </InputGroup>
                </div>
                
        );

}

export default Layout;

