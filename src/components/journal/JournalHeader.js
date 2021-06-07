import React, {useState} from 'react'
import {defaultImages} from '../../helpers/images';
import 'boxicons';
import { JournalNavbar } from './JournalNavbar'



export const JournalHeader = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = ()=>{
        setActive(!isActive);
    }

    return (
    <>
        <header className={`journal__header ${isActive?'journal__pd':''}`}>
            <div className="journal__header-toggle" onClick={handleToggle}>
                {
                    !isActive 
                    ? (<box-icon name='menu' id='journal__toogle-icon'></box-icon>)
                    : (<box-icon name='x' animation='tada' color='#000' ></box-icon>)
                }
                
            </div>
            <div className="journal__header-img">
                <img 
                src={defaultImages("./ale.png").default } 
                alt='ale' />
            </div>
        </header>
        <JournalNavbar value={isActive}/>

    </>
    )
}
