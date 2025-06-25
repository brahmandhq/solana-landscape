import { useState } from 'react'
import Head from 'next/head'
import { useTheme } from '../context/ThemeContext'

import lodash from 'lodash'

import LogoCard from '../components/LogoCard'
import ToolModal from '../components/ToolModal'

import data from '../data/landscape.json'

const groupByResult = lodash.groupBy(data, (tool) => tool.category)
const categoryNames = [...new Set(data.map((tool) => tool.category))]
const categoriesData = categoryNames.map((category) => ({
  name: category,
  items: groupByResult[category],
}))

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [categories, setCategories] = useState(categoriesData)
  const [visible, setVisible] = useState(false)
  const [currentItem, setCurrentItem] = useState({
    name: '',
  })

  const orgAndRepo = 'brahmandhq/solana-landscape'
  const githubLink = 'https://github.com/' + orgAndRepo
  const starsImage = `https://img.shields.io/github/stars/${orgAndRepo}?style=social`

  return (
    <>
      <div className="accent-bar" />
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
        <Head>
          <title>Solana Developer Tooling Landscape | TechKareer</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <ToolModal
          visible={visible}
          setVisible={setVisible}
          currentItem={currentItem}
        />
        <main className="max-w-10xl mx-auto px-4 py-4 lg:py-6 lg:px-8 flex flex-col fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <div>
            <div className="flex flex-wrap flex-col lg:flex-row w-full items-baseline lg:pb-6 lg:pt-2 position-relative">
              <div className="mb-2 lg:mb-0">
                <img
                  className="w-36 lg:w-36 h-auto"
                  src="https://www.techkareer.com/logo.webp"
                  alt="TechKareer Logo"
                />
              </div>
              <div className="lg:text-center flex-1 pb-8">
                <h1 className="block text-xl md:text-2xl xl:text-3xl font-extrabold text-gray-800 dark:text-white">
                  Solana Developer Tooling Landscape
                </h1>
                <p className="w-full hidden xl:block text-gray-600 dark:text-white text-xs lg:mx-auto">
                  {`This landscape represents a comprehensive list of tools that developers use when developing smart contracts on Solana and Solana-compatible chains.`}
                  <br />
                  {`Scroll horizontally and vertically to view the whole landscape. Click on any tool to view additional details.`}
                </p>
              </div>
              <div className="header-actions flex flex-row items-center gap-4 ml-auto" style={{height: '48px'}}>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-800 dark:text-white m-0 p-2"
                  aria-label="Star on GitHub"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="github-logo">
                    <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span className="github-star-text">Star</span>
                </a>
                <button
                  onClick={toggleTheme}
                  className="bg-transparent p-0 m-0 shadow-none border-none outline-none focus:outline-none text-2xl transition-colors flex items-center justify-center"
                  aria-label="Toggle dark mode"
                  style={{ lineHeight: 1, height: '40px', width: '40px' }}
                >
                  {theme === 'dark' ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="px-2 mt-4 lg:my-0 flex-1 w-full overflow-scroll">
            <div
              className="mb-8 grid grid-cols-4 gap-x-12 gap-y-16 px-4 text-center"
              style={{
                width: 'max-content',
                height: 'max-content',
              }}
            >
              {categories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-md font-bold pb-1 text-gray-800 dark:text-white">{category.name}</h2>
                  <div>
                    <div className="grid grid-cols-3 gap-2 items-center justify-center">
                      {category.items.map((item, index) => (
                        <LogoCard
                          item={item}
                          onClick={() => {
                            setVisible(true)
                            setCurrentItem(item)
                          }}
                          key={index}
                          showLaunchYear={true}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
