import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './layout.css';

const Layout2 = props => {
        return (

                <div className="item">
                        <div className="checkbox">
                                <input type="checkbox" onChange={props.handleChange}  />
                        </div>
                        <p>
                                <input type="text"
                                value={props.title}
                                onChange= {props.editField}
                                className={props.done == true ? 'done' : ''}
                                />
                        </p>
                        <a href='#' onClick={props.deleteItem}>X</a>
                </div>
                

        );
        
}
export default Layout2;