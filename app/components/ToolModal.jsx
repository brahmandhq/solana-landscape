import { Modal } from '@nextui-org/react'

const extractTwitterUsernameFromUrl = (twitterUrl) => {
  try {
    return twitterUrl.replace(/\/$/, '').replace('https://twitter.com/', '@')
  } catch (e) {
    return ''
  }
}

const cleanUrl = (websiteUrl) => {
  try {
    return websiteUrl
      .replace(/\/$/, '')
      .replace('https://', '')
      .replace('www.', '')
  } catch (e) {
    return ''
  }
}

export default function ToolModal({ visible, setVisible, currentItem }) {
  const {
    name,
    full_name,
    description,
    website,
    title,
    logo,
    jobs,
    github,
    twitter,
    crunchbase,
    funding,
    launch_year,
  } = currentItem

  const closeHandler = () => {
    setVisible(false)
  }

  return (
    <Modal
      closeButton
      width="600px"
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      style={{ marginLeft: '16px', marginRight: '16px', background: 'transparent', boxShadow: 'none' }}
    >
      <Modal.Body className="p-0">
        <div className="p-6 bg-white text-black dark:bg-gray-900 dark:text-white rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 dark:shadow-2xl">
          <img
            src={logo}
            width={'48px'}
            height={'48px'}
            className="mb-4"
            alt={title}
          />
          <h1 className="font-bold text-xl mb-2">{full_name || name}</h1>
          <p className="mb-3">{description}</p>
          <div className="text-sm flex flex-col gap-2">
            <div className="detail">
              {launch_year && (
                <p>
                  <span className="font-semibold block mb-0.5 ">
                    Launched In
                  </span>{' '}
                  {launch_year}
                </p>
              )}
{Array.isArray(jobs) && jobs.length > 1 ? (
  <div className="flex flex-col gap-3">
    <h1 className="font-bold text-md">Jobs</h1>
    {jobs.map((e, idx) => (
      <span key={idx} className="flex gap-2 items-center">
        <p className='opacity-60'>{e.title}:</p>
        <a
          href={e.url}
          className="text-blue-500 flex text-md items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-link"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 15l6 -6" />
            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
          </svg>
        </a>
      </span>
    ))}
  </div>
) : null}


            </div>
            <div className="detail">
              {cleanUrl(website) && (
                <p>
                  <span className="font-semibold block mb-0.5 ">Website</span>{' '}
                  <a
                    href={website}
                    target="_blank"
                    className="text-blue-500 hover:font-semibold"
                  >
                    {cleanUrl(website)}
                  </a>
                </p>
              )}
            </div>
            <div className="detail">
              {extractTwitterUsernameFromUrl(twitter) && (
                <p>
                  <span className="font-semibold block mb-0.5 ">Twitter</span>{' '}
                  <a
                    href={twitter}
                    target="_blank"
                    className="text-blue-500 hover:font-semibold"
                  >
                    {extractTwitterUsernameFromUrl(twitter)}
                  </a>
                </p>
              )}
            </div>
            <div className="detail">
              {cleanUrl(github) && (
                <p>
                  <span className="font-semibold block mb-0.5 ">GitHub</span>{' '}
                  <a
                    href={github}
                    target="_blank"
                    className="text-blue-500 hover:font-semibold"
                  >
                    {cleanUrl(github)}
                  </a>
                </p>
              )}
            </div>
            <div className="detail">
              {cleanUrl(crunchbase) && (
                <p>
                  <span className="font-semibold block mb-0.5 ">
                    Crunchbase
                  </span>{' '}
                  <a
                    href={crunchbase}
                    target="_blank"
                    className="text-blue-500 hover:font-semibold"
                  >
                    {cleanUrl(crunchbase)}
                  </a>
                </p>
              )}
            </div>
            <div className="detail">
              {funding && (
                <p>
                  <span className="font-semibold block mb-0.5 ">Funding</span>{' '}
                  {funding}
                </p>
              )}
            </div>
            <div className="detail">
              {currentItem.career && (
                <p>
                  <span className="font-semibold block mb-0.5 ">Career</span>{' '}
                  <a
                    href={currentItem.career}
                    target="_blank"
                    className="text-blue-500 hover:font-semibold"
                  >
                    {currentItem.career.replace(/https?:\/\//, '').replace('www.', '')}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
