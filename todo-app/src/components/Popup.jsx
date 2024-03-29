import axios from "axios";
import React, { useState } from "react";

import{RxCross1} from "react-icons/rx";
import { baseURL } from "../utils/constant";

const Popup = ({setshowPopup , popupContent ,setUpdateUI}) =>{

const [input, setInput] = useState(popupContent.text);
const updateToDo = () =>{
        axios
        .put(`${baseURL}/update/${popupContent.id}`, {toDo: input})
        .then((res)=> {
             console.log(res.data)
             setUpdateUI((prevState) => !prevState)
             setshowPopup(false)
        });
    }
    return (
        <div className="backdrop">
            <div className="popup">
                <RxCross1 className= "cross"  onClick={() => setshowPopup(false)}/>
                <h1>Update ToDo</h1>
                <div className="popup__input_holder">
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="Update ToDo.." />
                    <button onClick={updateToDo} data-testid="update-todo-button">Update</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;