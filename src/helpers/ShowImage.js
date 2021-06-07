import {defaultImages} from './images'

export const ShowImage = ({width,path})=>{
    return (width >=550) 
    ? (<img src={defaultImages(`${path}`).default} alt={path} />)
    : (<></>)
}