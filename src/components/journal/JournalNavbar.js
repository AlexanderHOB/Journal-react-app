import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { JournalLink } from './JournalLink';
import {links} from '../../data/links';
import { startLogOut } from '../../actions/auth';

export const JournalNavbar = (isActive) => {
    const dispatch = useDispatch();
    const logOut={
        'name':'Log Out',
        'icon':'log-out',
        'color':'#fff'
    }
    const handleLogOut = ()=>{
        dispatch(startLogOut())
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
                <p  href="/auth/login"
                    className='journal__nav-link'
                    onClick={handleLogOut}
                >
                    <box-icon name={logOut.icon} type='solid' color={logOut.color} ></box-icon>
                    <span>{logOut.name}</span>
                </p>
                {/* <JournalLink key={logOut.name} {...logOut} /> */}
            </nav>
        </div>
    )
}
