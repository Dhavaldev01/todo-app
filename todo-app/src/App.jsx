import React, { useEffect ,useState} from 'react';
import ToDo from './components/ToDo';

import { baseURL } from "./utils/constant"
import axios from 'axios';
import Popup from './components/Popup';

const App =() => {

    const [toDos, seToDos ] = useState([]);
    const [input , setInput] = useState("");
    const [updateUI , setUpdateUI] = useState(false)
    const [showPopup , setshowPopup ] = useState(false)
    const [popupContent, setPopupContent ] = useState({})

    useEffect(()=>{
        axios
        .get(`${baseURL}/get`)
        .then((res)=> seToDos(res.data))
        .catch((err)=> console.log(err));
    },[updateUI] );

const saveToDo = () =>{
    axios.post(`${baseURL}/save`, {toDo : input})
    .then (res =>{
        console.log(res.data);
        setUpdateUI((prevState) => !prevState)
        setInput("")
    })
    .catch((err)=> console.log(err));
};

    return (
        <main>
            <div className="container">
                <h1 className="title">ToDo App</h1>
                <div className="input_holder">

                    <input value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="Add a ToDo.."
                     />
                <button onClick={saveToDo}  data-testid="add-todo-button " >Add</button>
                </div>

                <div className="list">
              {toDos.map(el => <ToDo
               key={el._id} 
               text={el.toDo} 
               id = {el._id} 
               setUpdateUI={setUpdateUI}
               setshowPopup= {setshowPopup}
               setPopupContent = {setPopupContent}               
               />)}
                </div>
            </div>
            {showPopup && <Popup setshowPopup= {setshowPopup} popupContent={popupContent} setUpdateUI ={setUpdateUI}/>}
        </main>
    );
};

export default App ; 