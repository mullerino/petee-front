import React, { useRef, useState } from "react";
import styles from './Faq.module.css'; // Import the CSS Modules styles
import { questions, maxQuestions } from "./questions";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const AccordionItem = ({ handleAccordionClick, activeIndex, item }) => {
  const contentEl = useRef(null);

  return (
    <div className={styles.rcAccordionCard}>
      <div
        className={`${styles.accordion} ${activeIndex === item.id ? styles.active : ""}`}
        onClick={() => handleAccordionClick(item.id)}
      >
        <h2>{item.question}</h2>
        <span className={styles.arrow}>
          {activeIndex === item.id ?
            <CaretUp size={32} color="#faf4f4" weight="bold" /> :
            <CaretDown size={32} color="#faf4f4" weight="bold" />
          }
        </span>
      </div>
      <div
        ref={contentEl}
        className={`${styles.collapse} ${activeIndex === item.id ? styles.show : ""}`}
        style={
          activeIndex === item.id
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{item.answer}</p>
      </div>
      <hr />
    </div>
  );
};

const Accordion = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const filteredQuestions = questions.filter((item) => item.id <= maxQuestions);

  return (
    <article className={styles.article}> {/* Use styles.article */}
      {filteredQuestions.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            activeIndex={activeFaq}
            handleAccordionClick={handleAccordionClick}
            item={item}
          />
        );
      })}
    </article>
  );
};

const Faq = () => {
  return (
    <div className={styles.faqSection}>
      <h1>Perguntas Frequentes</h1>
      <div className={styles.faqContainer}>
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
