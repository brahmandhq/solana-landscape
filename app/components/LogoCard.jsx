import React from 'react'
import { Card, Row } from '@nextui-org/react'

export default function LogoCard({ item, onClick, showLaunchYear }) {
  const { logo, title, name, launch_year } = item

  return (
    <Card
      hoverable
      clickable
      onClick={onClick}
      style={{ minWidth: "fit-content", padding: "2px" }}
      className="logo-card relative z-10 hover:text-blue-500 bg-white text-black dark:bg-gray-800 dark:text-white shadow-xl dark:shadow-[0_4px_16px_0_rgba(255,255,255,0.26),0_4px_22px_0_rgba(80,120,220,0.13)] border border-gray-200 dark:border-gray-700"
    >
      <Card.Body css={{ p: 0 }}>
        <div className="item-logo-container my-2 mx-auto">
          <img
            src={logo}
            className="item-logo"
            alt={title}
          />
        </div>
      </Card.Body>
      <Card.Footer style={{ padding: "8px" }}>
        <div className='text-center w-full'>
          <p className='font-semibold text-gray-600 dark:text-white text-xs text-center w-full single-line' style={{ maxWidth: "84px" }}>{name}</p>
          {showLaunchYear && <p className='text-xs text-gray-400 dark:text-gray-200'>{launch_year}</p>}
        </div>
      </Card.Footer>
    </Card>
  )
}
