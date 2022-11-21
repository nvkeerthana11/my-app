import React from 'react';
import AsyncSelect from "react-select/async";
const App = () =>{
  const options = [

  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];
const handleChange =  (selectedOption) => 
{
  console.log("handleChange",selectedOption);
};
const loadOptions =(searchValue,callback) => {
  setTimeout(() => {
    const filteredOptions = options.filter((option) =>
       option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    callback(filteredOptions);
  },2000);
};
return (<AsyncSelect loadOptions={loadOptions} 
  defaultOptions onChange ={handleChange} isMulti />);
};
export default App;
