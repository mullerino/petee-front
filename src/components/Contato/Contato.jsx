import Form from "./components/Form/Form"
import styles from './contato.module.css'

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerContact}>
        <Form/>
      </div>
    </div>
  )
}

export default Contact
