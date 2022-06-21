import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import './style.css';

export function Card(props: { nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; time: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }){
    return(
        <div className='cards'>
            <strong>{props.nome}</strong>
            <small>{props.time}</small>
        </div>
    )
}