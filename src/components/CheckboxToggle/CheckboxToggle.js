import React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const CheckboxToggle = ({item,changeChecked}) => {

    const { checked, label, id } = item;
  return (
    <div>
    <FormControlLabel
      control={
        <Checkbox
          size='small'
          checked={checked}
          onChange={() => changeChecked(id)}
          inputProps={{ 'aria-label': 'checkbox with small size' }}
        />
      }
      label={label}
    />
  </div>
  )
}

export default CheckboxToggle