import { useRef, useState } from 'react'

const Practice = () => {

    const first = useRef();
    const [count, setCount] = useState(0);
    const [remaining, setRemaining] = useState(50);
    const [error, setError] = useState(false);
    const [warning, setWarning] = useState("");


    const catchs = (e) => {
        const val = first.current.value;
        console.log(e.target.value);
        setCount(val.length)
        setRemaining(50 - val.length)
        if(val.length > 50){
            setError(true);
            setWarning("You have exceeded the character limit");
        }else{
            setError(false);
            setWarning("");
        }

        if(remaining <= 10 && remaining >= 0){
            setWarning(`⚠ Only ${remaining} characters left!`);
        }
    }  

    return <>
            <div>
                <textarea ref={first} onChange={catchs} name="" id="">

                </textarea>

                <p>Frequenct of chracter : {count}</p>
                <p>Remaining : {remaining}</p>

                {error && <p style={{color:"red"}}>{warning}</p>}
                {!error && warning && <p style={{color:"orange"}}>{warning}</p>}
            </div>
        </>
    

}

export default Practice