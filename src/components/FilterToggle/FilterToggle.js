import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const FilterToggle = ({options,value,selectToggle}) => {
  return (
    <>
    <ToggleButtonGroup
    color="primary"
    value={value}
    exclusive
    onChange={selectToggle}
  >
 
  {
    options.map((item)=><ToggleButton key={item.id} value={item.value}>{item.label}</ToggleButton>)
  }
  </ToggleButtonGroup>
  </>
  )
}

export default FilterToggle