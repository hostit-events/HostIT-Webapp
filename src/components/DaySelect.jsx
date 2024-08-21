import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DaySelect = ({day, handleDayChange}) => {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          label="Day"
          required
          onChange={handleDayChange}
        >
          <MenuItem value='0'>Day 1</MenuItem>
          <MenuItem value='1'>Day 2</MenuItem>
          <MenuItem value='2'>Day 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default DaySelect;