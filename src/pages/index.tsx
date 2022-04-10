import { Header } from '../components/Header'

function Landing() {
  return (
    <div className="landing m-0">
      <Header />

      <main>
        <div className="w-screen h-screen p-4 flex flex-col justify-center items-center">
          <h1 className="font-poppins text-4xl text-center">
            What about a better managing todos life?
          </h1>

          <p className="text-center">
            Luna is a managing todo web-app that makes everything better, easier
            and intuitive, and is free, so check it out now!
          </p>

          <div>
            <a className="mr-2" href="#">
              Learn more
            </a>
            <button className="bg-white text-black rounded-md p-2">
              Begin now
            </button>
          </div>
        </div>

        <img
          className="-z-[1] absolute right-0 bottom-[-200px]"
          src="moon.jpg"
          alt="Moon"
        />
      </main>
    </div>
  )
}

export default Landing
