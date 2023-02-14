import React from 'react'
import './TopButtons.css'

function TopButtons() {
    const cities = [
        {
            id: 1,
            title: 'Chicago',
        },
        {
            id: 2,
            title: 'Rio de Janeiro',
        },
        {
            id: 3,
            title: 'Paris',
        },
        {
            id: 4,
            title: 'Tokyo',
        },
        {
            id: 5,
            title: 'Sydney',
        }
    ]
  return (
    <div className='cities'>
        {cities.map((city) => (
            <button key={city.id} className="top-button">{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons