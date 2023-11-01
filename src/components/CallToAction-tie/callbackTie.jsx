import styles from './callbackTie.module.css';

const CallToActionTie = ({ text, link }) => {
  return (
    <div className={styles['tie-wraper']}>
      <div className={styles['black-tie']}>
        <div className={styles['content-tie']}>
          <span>{text}</span>
          <button><a href={link} target='_blank'>Acesse aqui</a></button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionTie;
