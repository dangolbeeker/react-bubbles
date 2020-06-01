import React, { useState } from "react";
import { axiosWithAuth } from '../utilites/axioswithAuth';




const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, getColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const addC = color => {
    setAdding(true);
    setColorToAdd(color);
  };

  const deleteColor = (event, colorToEdit) => {
    event.preventDefault();
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${colorToEdit.id}`)
      .then(res => {
        console.log(res)
        const newArr = colors.filter(color => color.id !== colorToEdit.id)
        updateColors(newArr)
      })
      .catch(err => console.log(err.response))
  };

  const saveEdit = (event, colorToEdit) => {
    event.preventDefault();
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        console.log(res.data);
        updateColors(colors.map(color => color.id !== colorToEdit.id ? color : res.data))
        setColorToEdit(initialColor)
        // props.history.push('/bubblepage')
      })
      .catch(err => {
        console.log(err.response);
      });
  };


  const addColor = (event, colorToAdd) => {
    event.preventDefault();
    axiosWithAuth()
      .post(`http://localhost:5000/api/colors/`, colorToAdd)
      .then(res => {
        console.log(res)
        getColors();
        setColorToAdd(initialColor)
        // const newArr = colors.filter(color => color.id != colorToEdit.id)
        // updateColors(newArr)
      })
      .catch(err => console.log(err.response))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
                  <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit" onClick={(event) => saveEdit(event, colorToEdit)}>save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      {/* <div className="spacer" /> */}


      <form onSubmit={addColor}>
        <legend>add color</legend>
        <label>
          color name:
            <input
            onChange={e =>
              setColorToAdd({ ...colorToAdd, color: e.target.value })
            }
            value={colorToAdd.color}
          />
        </label>
        <label>
          hex code:
            <input
            onChange={e =>
              setColorToAdd({
                ...colorToAdd,
                code: { hex: e.target.value }
              })
            }
            value={colorToAdd.code.hex}
          />
        </label>
        <div className="button-row">
          <button type="submit" onClick={(event) => addColor(event, colorToAdd)}>save</button>
          <button onClick={() => setAdding(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ColorList;