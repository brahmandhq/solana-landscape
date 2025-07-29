import { useState } from 'react'
import Head from 'next/head'
import { useTheme } from '../context/ThemeContext'
import lodash from 'lodash'
import { Bebas_Neue,Dancing_Script } from 'next/font/google'
import LogoCard from '../components/LogoCard'
import ToolModal from '../components/ToolModal'

import data from '../data/landscape.json'

const groupByResult = lodash.groupBy(data, (tool) => tool.category)
const categoryNames = [...new Set(data.map((tool) => tool.category))]
const categoriesData = categoryNames.map((category) => ({
  name: category,
  items: groupByResult[category],
}))

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // use weights you need
})
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
      <div className="solana-watermark" />
      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
        <div className='h-full w-full fixed'>
                   {/* <Aurora
         colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
         blend={0.5}
         amplitude={1.0}
         speed={0.5}
        /> */}
        </div>
        <Head>
          <title>Solana Developer Tooling Landscape | TechKareer</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <ToolModal
          visible={visible}
          setVisible={setVisible}
          currentItem={currentItem}
        />
        <main className="max-w-10xl mx-auto   flex flex-col fade-in relative justify-center items-center" style={{ position: 'relative', zIndex: 1 }}>
          
          <div   style={{
            
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(1px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  }}className='w-[100vw] -mt-1 px-5 bg-black/40 backdrop-blur-[100px] border border-neutral-400/20  py-5 relative rounded-b-[7rem] bg-opacity-10'>
            <div className=" flex justify-between items-center  w-full">
              
              <div className="absolute top-7 left-7 lg:mb-0">
                <img
                  className="w-48 lg:w-52 h-auto"
                  src="https://www.techkareer.com/logo.webp"
                  alt="TechKareer Logo"
                />
              </div>
              <div className="lg:text-center flex-1 pb-8 mx-16">
                <span className={`${bebasNeue.className} block text-xl md:text-2xl xl:text-5xl font-semibold text-gray-800  dark:text-neutral-400`}>
                  <p className={`${dancingScript.className} text-7xl text-white`}>Solana</p> <p className=' bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 '>Ecosystem Portal</p>
                </span>
                <p className="font-mono w-full hidden xl:block text-gray-600 dark:text-white text-sm mt-2 lg:mx-auto opacity-50">
                  {`Your one-stop destination for everything Solana: discover top dApps, tools, career opportunities, and the vibrant community powering the Solana blockchain.`}
                </p>
              </div>
              <div className="header-actions flex flex-row absolute right-10 items-center pb-10 gap-4 ml-auto" style={{height: '48px'}}>
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
<svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sunrise"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" /><path d="M3 21l18 0" /><path d="M12 9v-6l3 3m-6 0l3 -3" /></svg>
                  ) : (
<svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sunset"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" /><path d="M3 21l18 0" /><path d="M12 3v6l3 -3m-6 0l3 3" /></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div  className="h-full  mt-4 lg:my-0 flex-1 w-full ">
            <div
              className="mb-8 grid grid-cols-4 gap-x-12 gap-y-16 px-4 text-center w-full py-5"
              style={{
                width: 'max-content',
                height: 'max-content',
              }}
            >
              {categories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-md font-bold pb-1 text-gray-800 dark:text-white">{category.name}</h2>
                  <div className="category-heading-bar" />
                  <div>
                    <div  className="grid grid-cols-3 gap-2 items-center justify-center w-full ">
                      {category.items.map((item, index) => (
                        <LogoCard
                          item={item}
                          onClick={() => {
                            setVisible(true)
                            setCurrentItem(item)
                          }}
                          key={index}
                          showLaunchYear={true}
                          size={index === 0 ? 3 : index === 1 ? 2 : index === 2 ? 1.5 : 1}
                          badge={index === 0 ? 'Most Popular' : index === 1 ? 'Top 2' : index === 2 ? 'Top 3' : undefined}
                          cardHeight={index < 3 ? 180 : 140}
                          logoWidth={index < 3 ? 100 : 80}
                          logoHeight={index < 3 ? 100 : 80}
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
