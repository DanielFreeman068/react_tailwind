import React, { useState } from "react";

const Forms = () => {
    const [selectedOption, setSelectedOption] = useState("")
    const [formActive, setFormActive] = useState(false)

    function handleOption(variable){
        if(variable){
            setSelectedOption(variable)
            setFormActive(true)
        }
    }
    return (
        <>
        {!formActive &&
            <div className="flex w-[800px] justify-between mx-auto mt-10">
                <button className="bg-blue-500 w-[150px] h-[75px] rounded-lg" onClick={()=>handleOption("test")}>Options1</button>
                <button className="bg-blue-500 w-[150px] h-[75px] rounded-lg" onClick={()=>handleOption("test2")}>Options2</button>
                <button className="bg-blue-500 w-[150px] h-[75px] rounded-lg" onClick={()=>handleOption("test3")}>Options3</button>
                <button className="bg-blue-500 w-[150px] h-[75px] rounded-lg" onClick={()=>handleOption("test4")}>Options4</button>
            </div>
        }

        {formActive &&
            <button onClick={()=>setFormActive(false)}>Exit</button>
        }

        {selectedOption === "test" && formActive && <h1>test1</h1>}
        {selectedOption === "test2" && formActive && <h1>test2</h1>}
        {selectedOption === "test3" && formActive && <h1>test3</h1>}
        {selectedOption === "test4" && formActive && <h1>test4</h1>}
        </>
    );
};

export default Forms;