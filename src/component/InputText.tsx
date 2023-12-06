import {ChangeEvent} from "react";

type InputText ={
    input:(s:string)=>void
}
export default function InputText(props:InputText) {
    function inputCallback (s:ChangeEvent<HTMLInputElement>){
        props.input(s.target.value)
    }

    return (
        <>
            <input onChange={inputCallback}/>
        </>
    )
}
