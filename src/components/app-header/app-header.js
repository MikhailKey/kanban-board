import React from 'react'
import blockList from './S-placeholder.svg';
import list from './list.svg'
import './app-header.css'
const AppHeader = () => {
    return (
       <div className="header">
           <h1 className="header-Title">Канбан-доска</h1>
           <button className="header-button" type="button"><img className="header-blockList" src={blockList}  alt="more"></img></button>
           <button className="header-button" type="button"><img className="header-list" src={list}  alt="list"></img></button>
       </div>
    )  
}
export default AppHeader;