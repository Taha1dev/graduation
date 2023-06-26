import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from './styles/FAQ.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1)

  const faqs = [
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    },
    {
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Where does it come from?',
      answer:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      question: 'Where can I get some?',
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ]

  const handleAccordionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="container">
      <h1 className={`${styles['faq-dep-title']} mt-5`}>
        Frequently Asked Questions
      </h1>
      <div className="mt-4">
        <div className="row d-flex justify-content-evenly">
          <div className="col-lg-6">
            {faqs.map((faq, index) => (
              <div key={index} className={`${styles['faq-card']} mb-3`}>
                <button
                  className={`${styles['faq-question']}  btn-link`}
                  onClick={() => handleAccordionClick(index)}
                  aria-expanded={index === activeIndex ? 'true' : 'false'}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`${styles['faq-icon']} mr-2`}>
                    <FontAwesomeIcon
                      icon={index === activeIndex ? faMinus : faPlus}
                    />
                  </span>
                  {faq.question}
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`${styles['faq-answer']} collapse ${
                    index === activeIndex ? 'show' : ''
                  }`}
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-3 position-relative ">
            <Image
              width={350}
              height={460}
              // className={`${styles['FAQ-doc']}`}
              src="/imgs/FAQ-doc.png"
              alt="faq img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
