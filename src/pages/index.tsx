/* eslint-disable @next/next/no-img-element */
import { Header } from '../components/Header'

function Landing() {
  return (
    <div className="landing m-0">
      <Header />

      <main className="xl:flex xl:justify-between xl:items-center">
        <div className="max-w-[100%] h-screen p-4 xl:items-baseline flex flex-col justify-center items-center sm:ml-6">
          <h1 className="font-poppins text-4xl text-center mb-2">
            What about a better managing todos life?
          </h1>

          <p className="text-center mb-5">
            Luna is a managing todo web-app that makes everything better, easier
            and intuitive, and is free, so check it out now!
          </p>

          <div className="flex flex-col items-center sm:flex-row">
            <a className="mb-2 sm:mb-0 sm:mr-4" href="#">
              Learn more
            </a>
            <button className="bg-white text-black rounded-md p-2 px-5">
              Begin now
            </button>
          </div>
        </div>
        <div className="xl:flex xl:justify-center xl:items-center xl:h-screen xl:w-full">
          <div className="max-h-[195px] w-full flex justify-center overflow-hidden z-[-1] absolute bottom-0 xl:relative xl:overflow-auto xl:max-h-[none] xl:block xl:w-[40vw] xl:max-w-[800px]">
            <img className="w-full h-full" src="moon.png" alt="Moon" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing
