import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AsyncPaginate } from "react-select-async-paginate";
import axios from "axios"
// normally u would not do this use ur Brain 😂
const  TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0Nzg5MzM4LCJqdGkiOiI4MTg0ZDRhZWIzYjA0MWVjODczMDRlZjIwOTI5N2IwMiIsInVzZXJfaWQiOjEsImVtYWlsIjoiaW5mb0BzYXZ2eXNjaG9vbHMub25saW5lIiwidXVpZCI6IjQ1Mjk4Y2I5LTQwMjYtNDE4MC05MWJiLWViMjQ3Y2Y0ZWQ0MCIsInVzZXJfcm9sZSI6InN1cGVyX2FkbWluIn0.YrQEQlAbfC8jPeQroQ5Y65nhpuXZ9YbTWc52XvBZfJk`

const SelectAsyncPaginate = (props) => {

  const loadOptions = async (searchQuery, loadedOptions, { page }) => {


          const config = {
            headers: { Authorization: `Bearer ${TOKEN}` }
          };
          //page is a number 
          //the page should be where the url requires it
          const response = await axios.get(`thisshould be ur url ?page=${page}`,
          config
          )
        

          return {
          //this should be a list of the data u want return dont worry about it structure(Just list of anything(number,obj,or ur head))
          options: response.data.data,
          //boolean that checks if there is still new page..(Write Your Logic)
          hasMore: response.data.next!==null,
          additional: {
          //increment page by one
          page:  page + 1

          }
          };
  };

  const onChange = (option) => {
    if (typeof props.onChange === "function") {
      props.onChange(option);
    }
  };

  return (
    <AsyncPaginate
      key={JSON.stringify( Symbol('newstuff'))}
      value={props.value || ""}
      loadOptions={loadOptions}
      // from the list that was givin in loadOptions func this will help u get the Value 
      getOptionValue={props.SelectValue}
      // from the list that was givin in loadOptions func this will help u get the Label that is Showed 
      
      getOptionLabel={props.SelectLabel}
      onChange={onChange}
      isSearchable={true}
      placeholder="Select Stuff"
      additional={{
        page: 1
      }}
    />
  );
};

SelectAsyncPaginate.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
};

export default SelectAsyncPaginate;
