import React from 'react';
import blockList from './S-placeholder.svg';
import list from './list.svg';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './appHeader.sass'
const AppHeader = () => {
    return (
       <div className="header">
           <h1 className="header-Title">Канбан-доска</h1>
           <Link to='/'><button className="header-button" type="button"><img className="header-blockList" src={blockList}  alt="more"></img></button></Link>
           <Link to='/list'><button className="header-button" type="button"><img className="header-list" src={list}  alt="list"></img></button></Link>
       </div>
    )  
}
export default connect()(AppHeader);