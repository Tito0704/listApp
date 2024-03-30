import React, {useState} from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  function handleSubmit() {
    if (inputText.trim() !== "") {
      props.onAdd(inputText);
      setInputText("");
    }
  }
  
  return (
    <div className="form">
      <input onChange={handleChange}  onKeyDown={handleKeyPress} type="text" value={inputText} />
      <button onClick={() => {
        props.onAdd(inputText);
        setInputText("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

