import React from 'react'
import { Card, Row } from '@nextui-org/react'

export default function LogoCard({ item, onClick, showLaunchYear, size = 1, cardHeight, logoWidth = 80, logoHeight = 80 }) {
  const { logo, title, name, launch_year } = item
  let highlight = false;
  if (size === 3) { highlight = true; }
  else if (size === 2) { highlight = true; }
  else if (size === 1.5) { highlight = true; }

  return (
    <Card
      hoverable
      clickable
      onClick={onClick}
      style={{ width: '100%', height: cardHeight, padding: "2px" }}
      className={
        `logo-card relative z-10 hover:text-blue-500 bg-white text-black dark:bg-gray-800 dark:text-white shadow-xl border border-gray-200 dark:border-gray-700 ${highlight ? 'popular-glow' : ''}`
      }
    >
      <Card.Body css={{ p: 0 }} style={{ height: '100%' }}>
        <div
          className="item-logo-container my-2 mx-auto"
          style={{
            width: logoWidth,
            height: '100%',
            minHeight: logoHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={logo}
            className="item-logo"
            alt={title}
            style={{ width: logoWidth, height: logoHeight, maxWidth: '100%', maxHeight: '100%' }}
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
