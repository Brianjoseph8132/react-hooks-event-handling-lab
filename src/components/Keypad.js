// Code Keypad Component Here

function Keypad (){

    const handleclick=() =>{
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={handleclick}></input>
        </div>
    )
}

export default Keypad;