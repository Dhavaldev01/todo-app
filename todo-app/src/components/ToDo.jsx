import React from 'react';
import {AiFillEdit} from "react-icons/ai";
import{RxCross1} from "react-icons/rx";
import { baseURL } from '../utils/constant';
import axios from "axios";


const ToDo = ({text,id , setUpdateUI, setshowPopup ,setPopupContent}) =>{

    const deleteTodo =() =>{
        axios.delete(`${baseURL}/delete/${id}`)
        .then(res =>{
            console.log(res.data)
            setUpdateUI((prevState) => !prevState)
        })
    }

const updateToDo = () =>{
    setPopupContent({text , id});
    setshowPopup(true)
}
    return (
        <div className="toDo">
            {text}
            <div className="icons">
                <AiFillEdit className="icon" onClick={updateToDo} data-testid="edit-icon"/>
                <RxCross1 className="icon" onClick={deleteTodo} data-testid="delete-icon"/>
            </div>
        </div>
    );
};

export default ToDo;