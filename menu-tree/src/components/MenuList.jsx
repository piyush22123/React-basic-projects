import React from 'react'
import MenuItem from './MenuItem'


const MenuList = ({list = []}) => {
  return (
    <div className='menu-list-container'>
      {
        (list && list.length > 0) ?
        list.map((listItem) => <MenuItem item = {listItem}/>) 
        : null
      }
    </div>
  )
}

export default MenuList
