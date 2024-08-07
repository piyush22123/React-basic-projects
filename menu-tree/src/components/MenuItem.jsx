import React from 'react'
import MenuList from './MenuList'

const MenuItem = ({menus = []}) => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus}/>
    </div>
  )
}

export default MenuItem
