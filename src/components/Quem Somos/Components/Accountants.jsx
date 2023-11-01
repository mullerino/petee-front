import styles from './Accountants.module.css'

const Accountants = () => {
  const Square = ({text1, text2, targetValue}) => {
    return (
      <div className={styles.square}>
        <h3>{targetValue}</h3>
        <div className={styles.text}>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    )
}

return (
  <div className={styles.accountants}>
    <Square targetValue={16} text1="Anos"/>
    <Square targetValue={22} text1="Petianos" text2="ativos" />
    <Square targetValue={11} text1="Projetos" text2="em 2023" />
  </div>
)}

export default Accountants
