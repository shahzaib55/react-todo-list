import React, { useState } from "react";
// const [todo,setTodo] = "";
import { TbCircleDot } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

function Form() {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);
  const [editItm,setEditItm] = useState("");
  const [toggleBtn,setToggleBtn] = useState(true);
  const Onedit = (id) =>{
    let editItem = item.find((elem)=>{
      return elem.id === id;
    })
    console.log(editItem);
    setToggleBtn(false);
    setData(editItem.name);
    setEditItm(id);
  }
  const Ondelete = (index) => {
    // console.log(index);
    const updateData = item.filter((elem) => {
      return index !== elem.id;
    });
    setItem(updateData);
  };
  const OnFormSubmit = (e) => {

    e.preventDefault();
    if(!toggleBtn){
      setItem(item.map((elem)=>{
        if(elem.id === editItm){
          return{...elem, name:data}
        }
        return elem;
      }))
      setToggleBtn(true);
      setData("");
      setEditItm("");
    }else{
      const allInputData = { id: new Date().getTime().toString(), name:data}
      console.log(new Date().getTime().toString());
      setItem([...item, allInputData]);
      setData("");
    }
    
  };
  return (
    <>
      <div className="todo-form">
        <div className="form col-md-12 ">
          <form onSubmit={OnFormSubmit}>
            <div className="input-parent col-md-12 ">
              <input
                type="text"
                name="text"
                placeholder="Enter data "
                required
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              {
                toggleBtn ? <button className="btn btn-danger" type="submit" name="submit">
                Add
              </button>
              :
              <button className="btn btn-danger" type="submit" name="submit">
                Edit
              </button>
              }
              
            </div>
            {item.map((elem) => (
              <div key={elem.id} className="form-main">
                <div className="text-parent">
                  <TbCircleDot className="text-white" />
                  <p>{elem.name}</p>
                  <div className="form-icons">
                  <AiFillEdit
                      className="pd-5 icon"
                      onClick={() => Onedit(elem.id)}
                      size={20}
                    />
                    <MdDelete
                      className="pd-5 icon"
                      onClick={() => Ondelete(elem.id)}
                      size={20}
                    />
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
