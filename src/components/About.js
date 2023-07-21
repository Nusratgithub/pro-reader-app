import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto py-8 px-4 lg:px-0'>
      <div className=''>
        <div className=''>
          <h3 className='text-blue-300 text-2xl leading-6 font-bold mb-5 text-center'>About Us</h3>
          <h2 className='text-4xl font-bold mb-8 text-center mx-auto'>
            A reader lives a thousand lives before he dies
          </h2>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div tabIndex={0} className="collapse collapse-open border border-base-300 hover:bg-blue-300 hover:text-white">
            <div className="collapse-title text-xl font-medium">
              Books are a uniquely portable magic.
            </div>
            <div className="collapse-content">
              <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.

                Many say exploration is part of our destiny, but it’s actually our duty to future generations.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-open border border-base-300 hover:bg-blue-300 hover:text-white">
            <div className="collapse-title text-xl font-medium">
              How much money you got on you?
            </div>
            <div className="collapse-content">
              <p>The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest.

                Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-open border border-base-300 hover:bg-blue-300 hover:text-white">
            <div className="collapse-title text-xl font-medium">
              The first mate and his Skipper too will do?
            </div>
            <div className="collapse-content">
              <p>Well, the way they make shows is, they make one show. That show's called a pilot.

                Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs.Some don't, become nothing. She starred in one of the ones that became nothing.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-open border border-base-300 hover:bg-blue-300 hover:text-white">
            <div className="collapse-title text-xl font-medium">
              Galaxies Orion's sword globular star cluster?
            </div>
            <div className="collapse-content">
              <p>A business big enough that it could be listed on the NASDAQ goes belly up. Disappears!

                It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.</p>
            </div>
          </div>
    </div>
      </div>
    </div>
  )
}

export default About
