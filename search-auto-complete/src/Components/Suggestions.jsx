import React from 'react'

const Suggestions = ({data}) => {
  return (
    <div className='user-list'>
      <ul>
        {
            (data && data.length > 0) ?
            data.map((item, index) => (
                <li key={index}>{item}</li>
            ))
            : null
        }
      </ul>
    </div>
  )
}

export default Suggestions
