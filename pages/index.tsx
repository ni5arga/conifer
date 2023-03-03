import type { NextPage } from "next"
import Image from "next/image"
import Header from "../components/header"
import Meta from "../components/meta"

import hero from "../public/hero.png"

const Home: NextPage = () => {
  return (
      <div>
          <Meta/>
          <Header/>
          <div className="mt-64 place-items-center justify-center md:grid mx-4 mb-16">
              <div className="md:flex gap-x-20">
                <div className="self-center mb-8">
                    <h1 className="text-4xl font-semibold">Hey, I'm Nisarga!</h1>
                    <h2 className="text"> I'm a full stack web developer </h2>
                </div>
                <Image
                    src={hero}
                    alt="Conifer"
                    width={500}
                    height={500}
                    className="rounded-xl"
                />
            </div>
        </div>
      </div>
  )
}

export default Home
