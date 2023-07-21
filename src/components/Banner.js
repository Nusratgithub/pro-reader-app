import React from 'react'
import Lottie from 'lottie-react'
import reader from '../assets/reader.json'
import { Link } from 'react-router-dom'
import Testimonials from './Testimonial/Testimonials'
import Footer from './Footer/Footer'
import Books from './Books'

const Banner = () => {
  return (
    <>
      <div className='h-[1000px] md:h-[1080px] lg:h-[600px]'>
        <div className='container px-4 lg:px-0 mx-auto'>
          <div className='flex flex-col items-center justify-between lg:flex-row'>
            <div className='mb-10 lg:pr-5 lg:mb-0 lg:mt-20'>
              <div className='mb-6 lg:mt-10'>
                <div>
                  <p className='inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400'>
                    On Sale!
                  </p>
                </div>
                <h2 className='mb-5 text-5xl font-bold tracking-tight text-gray-900'>
                  A reader lives a <br className='hidden md:block' /> thousand lives{' '}
                  <span className='inline-block text-blue-400'>before he dies</span>
                </h2>
                <p className='text-gray-70 text-xl lg:w-9/12'>
                  Books are a uniquely portable magic. Books serve to show a man
                  that those original thoughts of his aren’t very new after all. The
                  man who does not read good books is no better than the man who
                  can’t.
                </p>
              </div>
              <div className='flex flex-col items-center md:flex-row'>
                <Link
                  to='/books'
                  className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                >
                  <span className='mr-3'>Visit Store</span>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-4'
                  >
                    <polyline
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                      points='4,4 22,4 19,14 4,14 '
                    />
                    <circle
                      cx='4'
                      cy='22'
                      r='2'
                      strokeLinejoin='miter'
                      strokeLinecap='square'
                      stroke='none'
                      fill='currentColor'
                    />
                    <circle
                      cx='20'
                      cy='22'
                      r='2'
                      strokeLinejoin='miter'
                      strokeLinecap='square'
                      stroke='none'
                      fill='currentColor'
                    />
                    <polyline
                      fill='none'
                      stroke='currentColor'
                      strokeMiterlimit='10'
                      points='1,1 4,4 4,14 2,18 23,18 '
                    />
                  </svg>
                </Link>
                <a
                  href='/about'
                  aria-label=''
                  className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className='relative'>
              <div className='w-full lg:w-full lg:ml-auto h-56 sm:h-96'>
                <Lottie animationData={reader} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  )
}

export default Banner;
