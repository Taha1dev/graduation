import Image from 'next/image';
import styles from './styles/FAQ.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function FAQ() {
  return (
    <>
      <div className="container">
        <h1 className={`${styles['faq-dep-title']} mt-5`}>
          Frequently Asked Questions
        </h1>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-6">
              <p
                className={`${styles['faq-q']}`}
                data-toggle="collapse"
                data-target="answer"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <p id="answer" className={`${styles['faq-a']} collapse`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <hr className="faq-line mb-3" />{' '}
              <p
                className={`${styles['faq-q']}`}
                data-toggle="collapse"
                data-target="answer"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <p id="answer" className={`${styles['faq-a']} collapse`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <hr className="faq-line mb-3" />{' '}
              <p
                className={`${styles['faq-q']}`}
                data-toggle="collapse"
                data-target="answer"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <p id="answer" className={`${styles['faq-a']} collapse`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <hr className="faq-line mb-3" />{' '}
              <p
                className={`${styles['faq-q']}`}
                data-toggle="collapse"
                data-target="answer"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <p id="answer" className={`${styles['faq-a']} collapse`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <hr className="faq-line mb-3" />{' '}
              <p
                className={`${styles['faq-q']}`}
                data-toggle="collapse"
                data-target="answer"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <p id="answer" className={`${styles['faq-a']} collapse`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ut!
              </p>
              <hr className="faq-line mb-3" />
            </div>
            <div className="col-lg-6 position-relative m-md5 ">
              <Image
                width={350}
                height={460}
                className="FAQ-doc"
                src="/imgs/FAQ-doc.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
