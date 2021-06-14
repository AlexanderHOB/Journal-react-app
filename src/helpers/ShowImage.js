import {defaultImages} from './images'

export const ShowImage = ({width,path})=>{
    return (width >=600) 
    ? (<img src={defaultImages(`${path}`).default} alt={path} />)
    : (<></>)
}