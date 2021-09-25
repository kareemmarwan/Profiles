import emailjs from 'emailjs-com'
const Screen = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault()

    // emailjs
    //   .sendForm(
    //     'service_du6mb5a',
    //     'template_ferhuty',
    //     event.target,
    //     'user_tW0m9KTFSCXWR56JBiQpL'
    //   )
    //   .then((res) => {
    //     console.log('good send massege', res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }
  return (
    <>
      {/* <header> */}
      <div className='wrapper'>
        <nav>
          <div className='brand'>
            <div className='mail-icon'>
              <span className='ti-email'></span>
            </div>
            <span>kareemkemoo23@gmail.com</span>
          </div>

          <ul>
            <li>
              <a href='#works'>Works</a>
            </li>
            <li>
              <a
                href='https://drive.google.com/file/d/1H6sNqQCuIAghRea1CORNi63iYnUz9dyQ/view?usp=sharing'
                target='_blank'
              >
                Resume
              </a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            {/* <li>
              <a href='https://youtube.com/coderesource' target='_blank'>
                My Youtube
              </a>
            </li> */}
          </ul>

          <label for='menu-toggle'>
            <span className='ti-menu-alt'></span>
          </label>
        </nav>
      </div>
      {/* </header> */}

      <input type='checkbox' id='menu-toggle' />
      <aside className='mobile-menu'>
        <div className='menu-wrapper'>
          <div className='aside-header'>
            <div className='socials-menu'>
              <a href='https://www.linkedin.com/in/techadam90/' target='_blank'>
                <span className='ti-linkedin'></span>
              </a>
              <a href='https://github.com/techadam' target='_blank'>
                <span className='ti-github'></span>
              </a>
              <a href='https://youtube.com/coderesource' target='_blank'>
                <span className='ti-youtube'></span>
              </a>
            </div>
            <label for='menu-toggle'>
              <span className='ti-close'></span>
            </label>
          </div>
          <div className='aside-content'>
            <ul>
              <li>
                <a href='#works'>Works</a>
              </li>
              <li>
                <a
                  href='https://drive.google.com/file/d/1Cp8wO2ZD6nq5d1M6M1y8ZUT2GU_-I5MN/view?usp=sharing'
                  target='_blank'
                >
                  Resume
                </a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              <li>
                <a href='https://youtube.com/coderesource' target='_blank'>
                  My Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <main>
        <div className='hero-section' style={{ padding: 20 }}>
          <div className='wrapper'>
            <div className='hero-content'>
              <img
                src='https://pbs.twimg.com/profile_images/1330087973656911872/ARkorNR9_400x400.jpg'
                className='hero-img'
                width='110px'
                height='110px'
                alt=''
              />
              <span>Hi, I'm Kareem</span>
              <h1>
                Developing robust <br /> solutions, brands, and <br />{' '}
                experience.
              </h1>
              <p>
                a <b>Software Engineer</b> and <b>Content Creator</b>
              </p>
              <p>I specialize in Fullstack web development</p>

              <div className='connect-btn'>
                <a href=''>Let's talk</a>
              </div>
            </div>
          </div>
        </div>

        <div className='tech-stack'>
          <div className='wrapper'>
            <h3>Most used tech stack</h3>
            <div className='skill-wrapper'>
              <div className='skill'>
                <img src='https://img.icons8.com/windows/50/000000/node-js.png' />
                <small>Nodejs</small>
              </div>
              <div className='skill'>
                <img src='https://img.icons8.com/color/48/000000/javascript.png' />
                <small>Javascript</small>
              </div>
              <div className='skill'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
                <small>React</small>
              </div>
              <div className='skill'>
                <img src='https://img.icons8.com/color/48/000000/sass.png' />
                <small>Sass</small>
              </div>
              <div className='skill'>
                <img src='https://img.icons8.com/color/48/000000/bootstrap.png' />
                <small>Bootstrap</small>
              </div>
              <div className='skill'>
                <img src='https://www.vhv.rs/dpng/d/524-5246899_react-js-react-app-logo-png-transparent-png.png' />
                <small>React Native</small>
              </div>
              <div className='skill'>
                <img src='https://img.icons8.com/color/100/000000/mongodb.png' />
                <small>MongoDB</small>
              </div>
              <div className='skill'>
                <img src='https://img.icons8.com/color/48/000000/git.png' />
                <small>Git</small>
              </div>
            </div>
          </div>
        </div>

        <div className='works' id='works'>
          <div className='wrapper'>
            <h3>
              Some of my Works{' '}
              <small>
                <span className='ti-arrow-right'></span>
              </small>
            </h3>
            <br />

            <div className='works-wrapper'>
              <div className='grid-2x work-grid'>
                <div className='work-image'>
                  <img
                    src='https://i.pinimg.com/originals/d0/cb/8a/d0cb8afc7b6fc2f66746bb902948d7b2.png'
                    alt=''
                  />
                </div>
                <div className='work-info'>
                  <h2>Resume resource</h2>
                  <p>
                    This is an app developed with Vue js, Express and Mongodb.
                    It's sole function is to allow users to create professional
                    resumes and/or cv with different templates that they can
                    select from within a few minutes.
                  </p>
                  <div className='work-tech'>
                    <span className='lab la-js'></span>
                    <span className='lab la-react'></span>
                    <span className='lab la-sass'></span>
                    <span className='lab la-android'></span>
                    <span className='lab la-aws'></span>
                    <span className='lab la-docker'></span>
                    <span className='lab la-github'></span>
                    <span className='lab la-apple'></span>
                  </div>
                  {/* <div className='work-btn'>
                    <a
                      href='https://resumenuxt.herokuapp.com'
                      target='_blank'
                      className='btn btn-outline-main'
                    >
                      Preview (In works)
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className='works-wrapper'>
              <div className='grid-2x work-grid'>
                <div className='work-image'>
                  <img
                    src='https://cdn.dribbble.com/users/4189231/screenshots/10810913/media/e48f2947de95730ebbfce4c5ed7be589.jpg?compress=1&resize=400x300'
                    alt=''
                  />
                </div>
                <div className='work-info'>
                  <h2>Resume resource</h2>
                  <p>
                    This is an app developed with Vue js, Express and Mongodb.
                    It's sole function is to allow users to create professional
                    resumes and/or cv with different templates that they can
                    select from within a few minutes.
                  </p>
                  <div className='work-tech'>
                    <span className='lab la-js'></span>
                    <span className='lab la-react'></span>
                    <span className='lab la-sass'></span>
                    <span className='lab la-android'></span>
                    <span className='lab la-aws'></span>
                    <span className='lab la-docker'></span>
                    <span className='lab la-github'></span>
                    <span className='lab la-apple'></span>
                  </div>
                  {/* <div className='work-btn'>
                    <a
                      href='https://resumenuxt.herokuapp.com'
                      target='_blank'
                      className='btn btn-outline-main'
                    >
                      Preview (In works)
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className='works-wrapper'>
              <div className='grid-2x work-grid'>
                <div className='work-image'>
                  <img
                    src='https://cdn.dribbble.com/users/4189231/screenshots/14211055/media/ad0f318fb03bc28e7e3d28b7e6fd3e75.png?compress=1&resize=400x300'
                    alt=''
                  />
                </div>
                <div className='work-info'>
                  <h2>Resume resource</h2>
                  <p>
                    This is an app developed with Vue js, Express and Mongodb.
                    It's sole function is to allow users to create professional
                    resumes and/or cv with different templates that they can
                    select from within a few minutes.
                  </p>
                  <div className='work-tech'>
                    <span className='lab la-js'></span>
                    <span className='lab la-react'></span>
                    <span className='lab la-sass'></span>
                    <span className='lab la-android'></span>
                    <span className='lab la-aws'></span>
                    <span className='lab la-docker'></span>
                    <span className='lab la-github'></span>
                    <span className='lab la-apple'></span>
                  </div>
                  {/* <div className='work-btn'>
                    <a
                      href='https://resumenuxt.herokuapp.com'
                      target='_blank'
                      className='btn btn-outline-main'
                    >
                      Preview (In works)
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='contact-me' id='contact'>
          <div className='wrapper'>
            <div className='grid-2x contact-grid'>
              <div className='contact-info'>
                <h3>Contact</h3>
                <div className='contact-info-grid'>
                  <div className='contact-icon'>
                    <span className='ti-location-pin'></span>
                  </div>
                  <div>
                    <small>Get in touch</small>
                    <h2>kareemkemoo23@gmail.com</h2>
                  </div>
                </div>
                <div className='contact-info-grid'>
                  <div className='contact-icon'>
                    <span className='ti-microphone'></span>
                  </div>
                  <div>
                    <small>Call me now</small>
                    <h2>+972597747128</h2>
                  </div>
                </div>
                <div className='contact-info-grid'>
                  <div className='contact-icon'>
                    <span className='ti-info-alt'></span>
                  </div>
                  <div>
                    <small>Reach me through</small>
                    <div className='social-contact'>
                      <a href='mailto: kareemkemoo23@gmail.com' target='_blank'>
                        <span className='ti-email'></span>
                      </a>
                      <a
                        href='https://www.linkedin.com/in/kareem-marwan-949646b2/'
                        target='_blank'
                      >
                        <span className='ti-linkedin'></span>
                      </a>
                      <a href='https://github.com/kareemmarwan' target='_blank'>
                        <span className='ti-github'></span>
                      </a>
                      <a
                        href='https://www.facebook.com/profile.php?id=100007590558227'
                        target='_blank'
                      >
                        <span className='ti-facebook'></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact-form'>
                <h3>Interested in working together?</h3>
                <small>
                  Ready to get started? Let's create something extraordinary!
                </small>

                <form
                  onSubmit={() => {
                    handleFormSubmit()
                  }}
                >
                  <div className='contact-form-wrapper'>
                    <div className='form-wrapper'>
                      <label for=''>Email</label>
                      <input
                        name='email'
                        type='email'
                        placeholder='Your-email@example.com'
                        className='form-input'
                      />
                    </div>

                    <div className='form-wrapper'>
                      <label for=''>Message</label>
                      <textarea
                        name='message'
                        id='message'
                        rows='4'
                        placeholder='Enter Your Message'
                        className='form-input'
                      ></textarea>
                    </div>

                    <div className='form-wrapper'>
                      <button className='btn btn-main' type='submit'>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Screen
