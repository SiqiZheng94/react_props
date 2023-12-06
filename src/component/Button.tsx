type Button = {
    name:string
    input:()=>void
}
export default function Button(props:Button){
    function inputCallback (){
        props.input()
    }
    return(
        <>
            <button onClick={inputCallback}>{props.name}</button>

        </>
    )
}