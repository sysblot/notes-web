import React from 'react';
import { getNotes } from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-solid-svg-icons'
import './style.css';

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {notes : []};
        getNotes().then(async response => this.setState({notes : await response.json()}))
    }
    render(){
        return (<div className="container">
            {this.state.notes.map((note)=><File noteName={note.name}/>)}
         </div>)
    }
}

const File = function({noteName}){
    
    return (
        <div className="icon-wrapper">
            <FontAwesomeIcon icon={faFile} className="container-icon" size="3x" />
            <span>{noteName}</span>
        </div>
    )
}

export default Container;