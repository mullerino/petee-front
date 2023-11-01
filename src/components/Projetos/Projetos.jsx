import { useState } from 'react'
import DriveTie from '../Gravata Drive/driveTie'
import styles from './Projetos.module.css'
import CallToActionTie from '../CallToAction-tie/callbackTie'
import { projects } from './projects'
import { HandlerCarrousel } from './components/HandlerCarrousel'

const LeftSideContent = ({ projeto, activeTab, handleTabClick }) => {
  return (
    <div className={styles.leftSideContent}>
      <h2>{projeto.title}</h2>
      <p>{projeto.description}</p>
      <div className={styles.projectsOfCoordination}>
        {projeto.projects.map((project, index) => (
          <span
            key={project.title}
            className={activeTab === index ? styles['activeProject'] : ''}
            onClick={() => handleTabClick(index)}
          >
            {project.title}
          </span>
        ))}
      </div>
    </div>
  )
}

const RightSideContent = ({ projeto, activeTab }) => {
  return (
    <div className={styles.rightSideContent}>
      <div className={styles.detailsProject}>
        {projeto.projects.map((project, index) => (
          <div
            key={project.content}
            className={`
              ${styles.fadeInAnimation}
              ${activeTab === index ? styles['activeTab'] : styles.hidden}
            `}>
            <h3>Resumo</h3>
            <p>{project.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const GroupProjects = ({ activeTab, activeIndex, handleTabClick }) => {
  return (
    <div className={styles.carouselContainer}>
      {projects.map((projeto, index) => (
        <div
          key={projeto.id}
          className={`
        ${styles.projects}
        ${styles.fadeInAnimation}
        ${index === activeIndex ? styles['activeSlide'] : styles.hidden}`}
        >
          <div className={styles.contentProjects}>
            <LeftSideContent
              projeto={projeto}
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
            
            <RightSideContent
              projeto={projeto}
              activeTab={activeTab}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const CarrouselProjetos = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className='flex flex-col items-center gap-12'>
      <GroupProjects
        activeTab={activeTab}
        activeIndex={activeIndex}
        handleTabClick={handleTabClick}
      />
      <HandlerCarrousel
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    </div>
  )
}

const Projetos = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerProjects}>
        <DriveTie />
        <h1>O que fazemos</h1>
        <CarrouselProjetos />
        <div className={styles.tieLocation}>
          <CallToActionTie text={'Conhece o sistema de empréstimo do PETee?'} link={"https://www.gov.br/agricultura/pt-br/assuntos/riscos-seguro/imagens/em_construao.png/image_view_fullscreen"}/>
        </div>
      </div>
    </div>
  )
}

export default Projetos
