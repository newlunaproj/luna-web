/* eslint-disable @next/next/no-img-element */
import { Header } from '../components/Header'

function Landing() {
  return (
    <div className="landing m-0">
      <Header />

      <main className="pt-[90px] xl:pt-0 xl:flex xl:justify-between xl:items-center min-h-screen">
        <div className="mt-10 max-w-[100%] h-auto p-5  sm:p-14 xl:items-baseline flex flex-col justify-center items-center sm:ml-6">
          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl xl:mb-5 text-center mb-4 leading-tight xl:leading-snug max-w-[650px]">
            What about a better <i>To&#8209;Do</i> management experience?
          </h1>

          <p className="text-center mb-6 text-white/90 font-light max-w-[650px]">
            Luna is a free To-Do manager that offer a better, easier and
            intuitive alternative for the traditional tasks apps, start your
            account right now! 😉
          </p>

          <div className="flex flex-col items-center sm:flex-row">
            <button className="mb-3 bg-white text-black rounded-sm py-3 px-6 sm:mb-0 sm:mr-5">
              Begin now
            </button>
            <a className="" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="xl:flex xl:justify-center xl:items-center xl:h-auto xl:w-full">
          <div className="max-h-[660px] w-full flex justify-center overflow-hidden z-[-1] bottom-0 xl:relative xl:overflow-auto xl:max-h-[none] xl:block xl:w-[40vw] xl:max-w-[800px]">
            {/* <img
              className="w-full h-full sm:hidden"
              src="moon.png"
              alt="Moon"
            /> */}
            <video
              src="moon.m4v"
              autoPlay={true}
              loop={false}
              muted={true}
              // playsinline={true}
              controls={false}
              preload={'auto'}
              className=""
            ></video>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing
