import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CheckSquareOutlined from '@ant-design/icons/CheckSquareOutlined'
import DeleteTwoTone from '@ant-design/icons/DeleteTwoTone'
import CarryOutOutlined from '@ant-design/icons/CarryOutOutlined'
import CalendarTwoTone from '@ant-design/icons/CalendarTwoTone'
import TextField from '@ant-design/icons/FileTextFilled'

export default function App() {
  const [items, setItems] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentDueDate, setCurrentDueDate] = useState("");

  const handleAdd = () => {
    if (currentTitle === "") alert("Please add a title");
    else if (currentDescription === "") alert("Please add a description");
    else if (currentDueDate === "") alert("Please add a due date");
    else {
      setItems([
        ...items,
        {
          title: currentTitle,
          description: currentDescription,
          dueDate: currentDueDate,
        },
      ]);
      setCurrentTitle("");
      setCurrentDescription("");
      setCurrentDueDate("");
    }
  };

  const TodoItem = ({ item }) => {
    const [checkedOff, setCheckedOff] = useState(false);

    const handleCheckOff = () => {
      setCheckedOff(!checkedOff);
    };
   
    
    const handleDelete = () => {
     
      setItems(items.filter((i) => i !== item));
    };

    return (
      <div
        style={{
          border: "1px solid black",
          textAlign: "left",
          padding: "20px",
          minWidth: "200px",
          display: "flex",
          flexDirection: "column",
          background: "antiquewhite",
        }}
      >
        {checkedOff ? (
          <h1>
            <strike>{item.title}</strike>
          </h1>
        ) : (
          <>
            <h1 style={{ margin: 0 }}>{item.title}</h1>
            <p style={{ margin: 5 }}>{item.description}</p>
            <p style={{ margin: 5 }}>Due: {item.dueDate}</p>
          </>
        )}
        
      
        <Button 
        color="primary"
        size="medium"
        startIcon={<CarryOutOutlined />}
       onClick={handleCheckOff} style={{ marginBottom: "10px" }}>
        check off
        </Button>
       

        <Button  variant="contained"
        color="secondary"
        size="medium"
        startIcon={<DeleteTwoTone />} onClick={handleDelete}>Delete</Button>
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <label style={{ marginBottom: "10px" }}>
          {"Title: "}
          <input
          placeholder="insert title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          {"Description: "}
          <input
          
          placeholder="insert description"
            value={currentDescription}
            onChange={(e) => setCurrentDescription(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          {"Due Date: "}
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          <input
           id="date"
           
        type="date"
          placeholder="insert due date"
            value={currentDueDate}
            onChange={(e) => setCurrentDueDate(e.target.value)}
          />
        </label>
        
      </div>

  <Button startIcon={<CalendarTwoTone/>} size="small" type="primary" color="secondary" variant="outlined" disableFocusRipple="true" onClick={handleAdd} style={{ marginBottom: "20px" }}>
        Add Todo Item
      </Button>
    
      {items.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );


  
      }
    