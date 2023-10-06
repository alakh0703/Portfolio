import React from 'react';
import './Contact.css';
import axios from 'axios';
// I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!

function Contact() {
  const nameRef = React.useRef(null)
  const emailRef = React.useRef(null)
  const messRef = React.useRef(null)
  const [show, setShow] = React.useState(false)
  const [message, setMessage] = React.useState('')

  const [submitted, setSubmitted] = React.useState(false)
 const submit =async (e) => {
    e.preventDefault()
    if(nameRef.current.value !== '' && emailRef.current.value !== '' && messRef.current.value !== ''){
      if(emailRef.current.value.includes('@')){

        const message = "Name: " + nameRef.current.value + "\n\n\nEmail: " + emailRef.current.value + "\n\n\nMessage: \n\n" + messRef.current.value
        const from = emailRef.current.value
        const subject = "New Message From Portfolio"

        nameRef.current.value = ''
        emailRef.current.value = ''
        messRef.current.value = ''
        
        setSubmitted(true)
        messRef.current.value = "Thank You For Contacting Me, I'll Get Back To You Soon :D"


        setTimeout(() => {
          setSubmitted(false)
          messRef.current.value = ''
        }
        , 3000);
        const response = await axios.post('https://portfolio-backend-z76d.onrender.com/send-email', {from , subject,message})
        if(response.status === 200){
          console.log('email sent')
        }


      
        return
      }
      setShow(true)
      setMessage('Please Enter A Valid Email')
      setTimeout(() => {
        setShow(false)
      }, 2000);
      return
    }
    setMessage('Please Fill All The Fields')
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000);


  }


  return (
    <div className='contact_right_main'>
        <form className='form_contact'>
            <input type='text' placeholder='Name' ref={nameRef}/>
            <input type='email' placeholder='Email' ref={emailRef} />
            <textarea placeholder='Message' className={submitted ? 'textA typewriter':'textA'} ref={messRef} />
            <button className='contact-formbtn' type='submit' onClick={submit}>Send</button>
            
        </form>
          {show && <div className='contact_right_main_message'>
            {message}
            </div>}


    </div>
  )
}

export default Contact