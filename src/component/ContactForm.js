import React, {useRef } from 'react'
import { SmoothScrolling } from './SmoothScrolling'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'


const apiPublicKey = process.env.REACT_APP_PUBLIC_KEY
const templateId = process.env.REACT_APP_TEMPLATE_ID
const serviceId = process.env.REACT_APP_SERVICE_ID 

export const ContactForm = (props) => {
  const form = useRef()
  const navigate = useNavigate()

  const sendEmail = e => {
    e.preventDefault()
    emailjs.sendForm(serviceId, templateId, form.current, {publicKey: apiPublicKey})
      .then((result) => { 
        console.log('success!!!', result.text)
        navigate('/')
      }, (error) => {
        navigate('/')
        console.log('FAILED...', error.text)
      })
      e.target.reset()
  }

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-6">
      <h3>Contact Page</h3>
    </div>
  )
}
