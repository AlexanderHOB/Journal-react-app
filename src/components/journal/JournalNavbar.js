import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { JournalLink } from './JournalLink';
import {links} from '../../data/links';

export const JournalNavbar = (isActive) => {
    const logOut={
        'name':'Log Out',
        'icon':'log-out',
        'color':'#fff'
    }
    useEffect(() => {
    }, [])
    return (
        <div className={`journal__nav ${isActive.value?'journal__nav-show':null}`}>
            <nav className="nav">
                <div>
                    <Link to='/' className='journal__nav-logo'> 
                        <box-icon name='layer' color='#fff' type='solid' className='journal__nav-icon'></box-icon>
                        <span className="journal__nav-name">Alexander</span>
                    </Link> 
                    <div className="journal__nav-list">
                        {
                            links.map(
                                link=> (<JournalLink key={link.name} {...link} />)
                            )
                        }
                    </div>
                </div>
                <JournalLink key={logOut.name} {...logOut} />
            </nav>
        </div>
    )
}
