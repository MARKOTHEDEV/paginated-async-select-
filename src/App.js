import React, { useState } from "react";
import Select from "react-select";
import SelectAsyncPaginate from "./SelectAsyncPaginate";


const App = ()=> {
  
  const [selectValue, setSelectValue] = useState(null);
  return (
    <div className="App">
      <div className="content">
        <div className="mt-5">
         
          <div row>
            <label for="region" sm={1} className="text-left">
              Paginated React Select
            </label>
            <div sm={8}>
              <SelectAsyncPaginate
              value={selectValue}
             onChange={(value)=>setSelectValue(value)}
              SelectValue={(option) => option.name}
              SelectLabel={(option) => option.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App


