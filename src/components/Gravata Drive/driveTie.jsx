import styles from './driveTie.module.css'
import drive from '/imgs/logos/logoDRIVE.png'

const DriveTie = () => {
  return (
    <div className={styles.tieWraper}>
      <div className={styles.blackTie}>
        <div className={styles.contentTie}>
          <img src={drive} alt="Logo do Google Drive" />
          <div className={styles.textsAndButton}>
            <h3>Acesse nosso conteúdo dedicado para os alunos no Google Drive!</h3>
            <p>Conheça nosso repositórios de livros e TCCs e estude pelos nossos materiais exclusivos</p>
            <button><a href="https://drive.google.com/drive/folders/1tGrbkBBh6xsLY1yXBSLyovCAAgrNAAPC" target='_blank'>Acesse aqui</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriveTie
