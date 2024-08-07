import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  // State to keep track of the currently selected item
  const [selected, setSelected] = useState(null);
  const [enableMultiSelections, setEnableMultiSelections] = useState(false); // State to track if multi selection is enabled or not
  const [multiple, setMultiple] = useState([]); 

  // Function to handle the selection of an accordion item
  const handleSingleSelection = (getCurrentId) => {
    // If the current id is already selected, set selected to null (collapse the item), otherwise set it to the current id
    // so that it will close if clicked again
    setSelected((getCurrentId === selected) ? null : getCurrentId);
  }

  const handleMultipleSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if(findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    }
    else{
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <>
      <div className="main">
        <button onClick={() => setEnableMultiSelections(!enableMultiSelections) } className='enabledBtn'>
          Enable multi selection
        </button>
        <div className="accordion">
          {/* If data is available, then map through the data array */}
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                {/* On click, call handleSingleSelection function with the item's id */}
                <div onClick={ 
                  enableMultiSelections
                ? () => handleMultipleSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)}
                className="title">
                
                  {/* Show question and +/- icon */}
                  <h3>{dataItem.question}</h3>
                  <span>{selected === dataItem.id ? '-' : '+'}</span>
                </div>
                {/* If the current item is selected, display the answer content */}
                { enableMultiSelections ? 
                  multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div> )
                  : selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                )}
              </div>
            ))
          ) : (
            // If no data is available, show "No data found"
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
