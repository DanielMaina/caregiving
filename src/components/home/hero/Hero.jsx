import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO FUTURE CODERS' title='Best Online Education Expertise' />
            <p>Future Coders designs, delivers, and partners on technology education for people in Canada and across the world..</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button
                target="_blank"
                rel="noreferrer"
                as="a"
                href="https://example.com"
              >
              Open
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
