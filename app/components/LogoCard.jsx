import React from 'react'
import { Card, Row } from '@nextui-org/react'

export default function LogoCard({ item, onClick, showLaunchYear, size = 1 }) {
  const { logo, title, name, launch_year } = item
  // Calculate logo size
  let logoSize = 36;
  let highlight = false;
  if (size === 3) { logoSize = 96; highlight = true; }
  else if (size === 2) { logoSize = 72; highlight = true; }
  else if (size === 1.5) { logoSize = 56; highlight = true; }

  return (
    <Card
      hoverable
      clickable
      onClick={onClick}
      style={{ minWidth: "fit-content", padding: "2px" }}
      className={
        `logo-card relative z-10 hover:text-blue-500 bg-white text-black dark:bg-gray-800 dark:text-white shadow-xl border border-gray-200 dark:border-gray-700 ${highlight ? 'popular-glow' : ''}`
      }
    >
      <Card.Body css={{ p: 0 }}>
        <div className="item-logo-container my-2 mx-auto" style={{ width: logoSize, height: logoSize }}>
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
