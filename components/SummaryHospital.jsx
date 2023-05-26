import Image from "next/image"
import { aboutRef } from "./NavBar"
function SummaryHospital() {
  return (
    <div className="row" ref={aboutRef}>
          <div className=" col-lg-6  position-relative">
            <Image width={46} height={46}
              src="/imgs/backLogo.png"
              alt=""
              className="backLogo myImage"
            />
            <h3 className="title-1 position-absolute  text-uppercase  ">
              Welcome to our hospital
            </h3>
            <h3 className="title-2 position-absolute  text-uppercase  ">
              our Hospital
            </h3>
            <p className="p-text position-absolute  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus,
              mauris sagittis et sem. Magna cursus orci id. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut lacus, mauris sagittis
              et sem. Magna cursus orci id. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut lacus, mauris sagittis et sem.
              Magna cursus orci id. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut lacus, mauris sagittis et sem. Magna cursus
              orci id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut lacus, mauris sagittis et sem. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="hos-img-con col-lg-6 position-relative">
            <Image width={575} height={551}
              src="/imgs/hod.png"
              alt=""
              className="hos-img myImage "
            />
          </div>
        </div>
  )
}

export default SummaryHospital