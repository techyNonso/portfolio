import React,{useState, useEffect} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import emailjs from "emailjs-com"
import validate from "../assets/js/validate"
function Contact() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [project,setProject] = useState("")
  const [message,setMessage] = useState("")
  const [errors,setErrors] = useState({})
  const [submit,setSub] = useState(false)
  const [target,setTarget] = useState("")
  const [sendSuccess, setSuccess] = useState("")
  const [sendError, setSendError] = useState("")

  useEffect(() => {
    if(submit){
      if(!errors.name && !errors.email && !errors.project && !errors.message){
        emailjs.sendForm(
          'service_rftlqhe',
          'template_uyo0bo8',
          target,
          'user_MN5KLMEO23ADJRY3WnVz2'
          ).then(res => {
            setName("")
            setEmail("")
            setProject("")
            setMessage("")
            setSuccess("Mail sent successfully")
            setSendError("")
          }).catch(err => {
            setSendError("Mail was not sent, please try again later.") 
            setSuccess("")
          })
      }
   }
  }, [errors,submit])

  function sendEmail(e){
    e.preventDefault()
    
      setErrors(validate(name,email,project,message))
      
      setTarget(e.target)
      setSub(true)
        
      
  }
  return (
      <section className="contact section" id="contact">
        
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-phone contact__icon"></i>
              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">+234-706-812-0513</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">williamikeji@gmail.com</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">Delta State. Nigeria</span>
              </div>
            </div>
          </div>
          <form action="" className="contact__form grid" onSubmit={sendEmail}>
            <div className="contact__inputs grid">
              <div className="contact__content">
                {errors.name && <div className="error">{errors.name}</div>}
                <label htmlFor="" className="contact__label">Name</label>
                <input type="text" value={name} name="name" className="contact__input" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="contact__content">
                {errors.email && <div className="error">{errors.email}</div>}
                <label htmlFor="" className="contact__label">Email</label>
                <input type="email" value={email} name="email" className="contact__input" onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="contact__content">
                {errors.project && <div className="error">{errors.project}</div>}
                <label htmlFor="" className="contact__label">Project</label>
                <input type="text" value={project} name="project" className="contact__input" onChange={(e) => setProject(e.target.value)}/>
            </div>

            <div className="contact__content">
                {errors.message && <div className="error">{errors.message}</div>}
                <label htmlFor="" className="contact__label">Message</label>
                <textarea name="message" id="" cols="0" rows="7" className="contact__input" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div>
              <button type="submit" className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </button >
            </div>
           {sendError &&  <div className="error">{sendError}</div>}
           {sendSuccess &&  <div className="success">{sendSuccess}</div>}
          </form>
        </div>

      </section>
  )
}

export default Contact