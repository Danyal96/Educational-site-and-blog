import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import heroImage from "../../assets/image/Coding-amico (1).svg";
import HeroBox from "../heroBox/HeroBox";
import { FaUserAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsFillSkipStartFill } from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

function Hero() {

  useEffect(()=>{
    Aos.init()
  } , [])

  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row className="align-items-center">
            <Col className="col-12 col-md-6" data-aos="zoom-in-down">
              <img src={heroImage} className="img-fluid heroImage" />
            </Col>
            <Col className="cols-12 cols-md-6" data-aos="zoom-in-down">
              <h2 className="heroTitle">آمار ما باعث افتخار ما هستند</h2>
              <Row className="justify-content-center row-cols-1 row-cols-xl-2 gy-4 ">
                <Col>
                  <HeroBox title="تعداد دانشجو" count="3500">
                    <FaUserAlt size="40px" />
                  </HeroBox>
                </Col>

                <Col>
                  <HeroBox title="تعداد مقاله" count="690">
                    <MdArticle size="40px" />
                  </HeroBox>
                </Col>

                <Col>
                  <HeroBox title="تعداد دوره" count="19">
                    <ImBooks size="40px" />
                  </HeroBox>
                </Col>

                <Col>
                  <HeroBox title="پروژه موفق" count="15">
                    <FaCode size="40px" />
                  </HeroBox>
                </Col>
              </Row>
            </Col>
          </Row>

          <p className="startLerning">
            <b>شروع آموزش</b>
            <BsFillSkipStartFill size='40px'/>
          </p>
        </Container>
        );
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          fill-opacity="1"
          d="M0,320L40,309.3C80,299,160,277,240,229.3C320,181,400,107,480,101.3C560,96,640,160,720,160C800,160,880,96,960,69.3C1040,43,1120,53,1200,80C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
