import styles from './AboutUs.module.css'

import CallToActionTie from '../CallToAction-tie/callbackTie'
import { DotOutline } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import Accountants from './Components/Accountants'


const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlerCarrouselDots = (index) => {
    setActiveIndex(index)
  }

  const handlerNextItem = () => {
    const nextIndex = (activeIndex + 1) % carrouselItems.length
    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    const interval = setInterval(handlerNextItem, 4000)

    return () => {
      clearInterval(interval)
    }

  }, [activeIndex])

  const carrouselItems = [
    "/imgs/teste.png",
    "/imgs/viagem.jpeg",
    "/imgs/todos.jpeg",
  ]

  return (
    <div className={styles.sectionAboutUs} id='aboutUs'>
      <h1>QUEM SOMOS</h1>
      <div className={styles.aboutUsContent}>
        <div className={styles.content}>
          <h2>PETee</h2>
          <p>
            O PETee da UFRN foi instaurado no dia 7 de setembro de 2007. Ao todo mais de 100 alunos do curso já
            tiveram a oportunidade de fazer parte desse time. Somos um grupo composto por 22 estudantes e 1 professor tutor.
            Em nossa equipe atual participam estudantes desde o 1° até o 8° período do curso, trazendo uma grande gama de experiencias
            agregadoras para o grupo.
          </p>
        </div>
        <div className={styles.tieCarrousel}>
          <div className={styles.tieCarrouselWrap}>
            <div className={styles.tieCarrouselContent}>
              <div className={styles.carrouselItems}>
                {carrouselItems.map((url, index) => (
                  <img
                    key={index}
                    className={`${styles.fadeInAnimation} ${activeIndex === index ? styles.showImg : styles.hiddenImg}`}
                    src={url}
                    alt={`Petianos ${index}`}
                  />
                ))}
              </div>
            </div>
            <div className={styles.handlerCarrousel}>
              <div className={styles.dots}>
                <DotOutline size={40} color="#ffff" weight="bold" onClick={() => handlerCarrouselDots(0)} />
                <DotOutline size={40} color="#ffff" weight="bold" onClick={() => handlerCarrouselDots(1)} />
                <DotOutline size={40} color="#ffff" weight="bold" onClick={() => handlerCarrouselDots(2)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Accountants/>
      <div className={styles.actionTie}>
        <CallToActionTie text="Quer saber mais sobre o PET?" link={"http://petee.ct.ufrn.br"}/>
      </div>
    </div>
  )
}

export default AboutUs
