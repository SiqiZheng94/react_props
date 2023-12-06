import {useState} from "react";
import InputText from "./InputText.tsx";
import Button from "./Button.tsx";


export default function Blog(){
    const [example, setExample] = useState<string>("")
    function handleEvent(){
        alert("Successful!")
    }

    const [num, setNum] = useState<number>(0)
    function handleEvent2(){
        setNum(num+1)
    }
    function handleEvent3(){
        setNum(num-1)
    }
    return(
        <>

            <div>
                <p>{example}</p>
                <InputText input={setExample}/>
            </div>
            <div>
                <Button input={()=>alert("Successful!")} name="click me"/>
                <Button input={handleEvent} name="click me"/>
            </div>
            <div>
                <h5>{num}</h5>
                <Button name="+" input={handleEvent2}/>
                <Button name="-" input={handleEvent3}/>
            </div>




            <img src="src/images/java.gif" alt="test2" />
            <img src="https://images.unsplash.com/photo-1534516662716-0a7cccf1df88?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bild"/>
        </>
    )
}