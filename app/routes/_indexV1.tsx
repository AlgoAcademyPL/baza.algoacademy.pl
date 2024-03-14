import {
  Link,
  useLoaderData,
} from '@remix-run/react'
import { json } from '@remix-run/node'
import { Carbon } from '~/components/Carbon'
import { twMerge } from 'tailwind-merge'
import {   FaGithub,   } from 'react-icons/fa'
import { Footer } from '~/components/Footer'
import { LinkOrA } from '~/components/LinkOrA'
import discordImage from '~/images/discord-logo-white.svg'
import { FcIdea } from "react-icons/fc";

const textColors = [
  `text-rose-500`,
  `text-yellow-500`,
  `text-teal-500`,
  `text-blue-500`,
]

const gradients = [
  `from-rose-500 to-yellow-500`,
  `from-yellow-500 to-teal-500`,
  `from-teal-500 to-violet-500`,
  `from-blue-500 to-pink-500`,
]

const libraries = [
  {
    name: 'AlgoAcademy OI Table',
    getStyles: () =>
      `shadow-xl shadow-blue-700/20 dark:shadow-lg dark:shadow-blue-500/30 text-blue-500 border-2 border-transparent hover:border-current`,
    to: '/SUBJECT_NAME',
    tagline: `Headless UI for building powerful tables & datagrids`,
    description: `Supercharge your tables or build a datagrid from scratch for TS/JS, React, Vue, Solid & Svelte while retaining 100% control over markup and styles.`,
  },
]

export const loader = async () => {
  return json({
    randomNumber: Math.random(),
  })
}

function sample(arr: any[], random = Math.random()) {
  return arr[Math.floor(random * arr.length)]
}

export default function Index() {
  const {  randomNumber } = useLoaderData<typeof loader>()
  const gradient = sample(gradients, randomNumber)

  return (
    <>
      <div
        className="flex flex-wrap py-2 px-4 items-center justify-center text-sm
          md:text-base md:justify-end"
      >
        {[
          {
            label: (
              <div className="flex items-center gap-1">
                <FaGithub className="text-lg" /> GitHub
              </div>
            ),
            to: 'https://github.com/AlgoAcademyPLpl/algoacademy',
          },
          {
            label: (
              <div className="flex items-center gap-1">
                <FcIdea className="text-lg" /> AlgoAcademy
              </div>
            ),
            to: 'https://algo.academy/',
          },
        ]?.map((item, i) => {
          const label = (
            <div className="p-2 opacity-90 hover:opacity-100">{item.label}</div>
          )

          return (
            <div key={i} className="hover:underline">
              {item.to.startsWith('http') ? (
                <a href={item.to} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ) : (
                <Link to={item.to} prefetch="intent">
                  {label}
                </Link>
              )}
            </div>
          )
        })}
      </div>
      <div className="flex flex-col items-center gap-6 text-center px-4 py-12 lg:py-24">
        <div className="flex gap-2 lg:gap-4 items-center">

          <h1
            className={`inline-block
            font-black text-5xl
            md:text-6xl
            lg:text-8xl`}
          >
            <span
              className={`
            inline-block text-transparent bg-clip-text bg-gradient-to-r ${gradient}
            underline decoration-4 md:decoration-8 underline-offset-[.5rem] md:underline-offset-[1rem] decoration-gray-200 dark:decoration-gray-800
            mb-2
            `}
            >
              Baza Algo Academy
            </span>
          </h1>
        </div>
        <h2
          className="font-bold text-2xl max-w-md
            md:text-3xl
            lg:text-5xl lg:max-w-2xl"
        >
          High-quality open-source software for{' '}
          <span className="underline decoration-dashed decoration-yellow-500 decoration-3 underline-offset-2">
            web developers.
          </span>
        </h2>
        <p
          className="text opacity-90 max-w-sm
            lg:text-xl lg:max-w-2xl"
        >
          Headless, type-safe, & powerful utilities for State Management,
          Routing, Data Visualization, Charts, Tables, and more.
        </p>
      </div>
      <div className="h-8" />
      <div className="px-4 lg:max-w-screen-lg md:mx-auto">
        <h3 className={`text-4xl font-light`}>Open Source Libraries</h3>
        <div
          className={`mt-4 grid grid-cols-1 gap-8
            sm:grid-cols-2 sm:gap-4
            lg:grid-cols-3`}
        >
          {libraries.map((library, i) => {
            return (
              <LinkOrA
                key={library.name}
                to={library.to ?? '#'}
                className={twMerge(
                  `border-4 border-transparent rounded-lg shadow-lg p-4 md:p-8 text-white transition-all bg-white dark:bg-gray-800`,
                  library.getStyles()
                )}
                style={{
                  zIndex: i,
                }}
                prefetch="intent"
              >
                <div className="flex gap-2 justify-between items-center">
                  <div className={`text-2xl font-extrabold `}>
                    {library.name}
                  </div>
                  {library.badge ?? null}
                </div>
                <div className={`text-lg italic font-light mt-2`}>
                  {library.tagline}
                </div>
                <div className={`text-sm mt-2 text-black dark:text-white`}>
                  {library.description}
                </div>
              </LinkOrA>
            )
          })}
        </div>
      </div>
      <div className="h-20" />
      <div className={`lg:max-w-[400px] px-4 mx-auto`}>
        <div className="flex flex-col gap-4">
          <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:text-white">
            <Carbon />
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-screen-lg">
        <div
          className={`
          rounded-md p-4 grid gap-6
          bg-discord text-white overflow-hidden relative
          shadow-xl shadow-indigo-700/30
          sm:p-8 sm:grid-cols-3`}
        >
          <div
            className={`absolute transform opacity-10 z-0
            right-0 top-0 -translate-y-1/3 translate-x-1/3
            sm:opacity-20`}
          >
            <img alt="Discord" src={discordImage} width={300} height={300} />
          </div>
          <div className={`sm:col-span-2`}>
            <h3 className={`text-3xl`}>Algo Academy on Discord</h3>
            <p className={`mt-4`}>
              The official AlgoAcademyPL community to ask questions, network and make
              new friends and get lightning fast news about what's coming next
              for AlgoAcademyPL!
            </p>
          </div>
          <div className={`flex items-center justify-center`}>
            <a
              href="https://discord.com/invite/WrRKjPJ"
              target="_blank"
              rel="noreferrer"
              className={`block w-full mt-4 px-4 py-2 bg-white text-discord
                text-center rounded shadow-lg z-10 uppercase font-black`}
            >
              Join AlgoAcademyPL Discord
            </a>
          </div>
        </div>
      </div>
      <div className={`py-20`} />
      <Footer />
    </>
  )
}