import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";

const Filter = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    taskService
      .getAllCategories()
      .then((categories) => setCategories(categories));
  }, []);

  const handleSelect = (event, value) => {
    props.setFilters(value);
  };

  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={categories}
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
      onChange={handleSelect}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Filter Categories"
          placeholder="Filter Categories"
        />
      )}
    />
  );
};

export default Filter;
