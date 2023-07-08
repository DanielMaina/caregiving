import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>Future Coders</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <a href="https://www.facebook.com/" target="blank">
              <i className='fab fa-facebook-f icon' ></i>
            </a>        
            <a href="https://www.instagram.com/" target="blank">
            <i className='fab fa-instagram icon'></i>
            </a>    
            <a href="https://twitter.com/" target="blank">
            <i className='fab fa-twitter icon'></i>
            </a>         
            <a href="https://www.youtube.com/" target="blank">
            <i className='fab fa-youtube icon'></i>
            </a>                        
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
