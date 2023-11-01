import { useState } from 'react';
import styles from './form.module.css'
import Map from '../Map/Map'
import { useForm, ValidationError } from '@formspree/react'
import Modal from 'react-modal'

const Form = () => {
  const [state, handleSubmitForm] = useForm("xknlenoo")
  /*
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  */

  if (state.succeeded) {
    console.log('Email enviado!')
  }

  return (
    <div className={styles.containerContact}>
      <div className={styles.content}>
        <div className={styles.form}>
          <h3 className={styles.title}>ENTRE EM CONTATO</h3>
          <div className={styles.text}>
            <p>Deseja fazer parcerias ou tem alguma dúvida acerca das nossas atividades?</p>
            <span>Manda uma mensagem!</span>
          </div>
          <div className={styles.formbox}>
            <form onSubmit={handleSubmitForm}>
              <div>
                <label htmlFor="name"></label>
                <input placeholder="Nome" type="text" id="name" name="name"/>
              </div>
              <div>
                <label htmlFor="email"></label>
                <input placeholder="Email" type="email" id="email" name="email"/>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label htmlFor="phone"></label>
                <input placeholder="Telefone" type="phone" id="phone" name="phone" />
              </div>
              <div>
                <label htmlFor="message"></label>
                <textarea placeholder="Escreva sua mensagem" type="text" id="message" name="message" />
              </div>
              <div className={styles.submitButton}>
                <button type="submit" disabled={state.submitting}>Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <Map />
      </div>
    </div>
  )
}

export default Form
