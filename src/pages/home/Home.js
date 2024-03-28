import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import CourseItem from "../../components/course/CourseItem";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavbar";
import Hero from "../../components/hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import SwiperButtons from "../../components/swiperbuttons/SwiperButtons";
import "./Home.css";
import Coments from "../../components/coments/Coments";
import comentImage from "../../assets/image/Borchin-ir-student-material school young man.png";

function Home() {
  const [articles, setAtricles] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=6")
      .then((response) => setAtricles(response.data.data));

    axios
      .get("http://localhost/react/api/courses/?page=1&limit=6")
      .then((response) => setCourses(response.data.data));
  }, []);

  return (
    <>
      <MyNavbar />
      <Hero />
      <Container>
        <Row className="py-4">
          <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین دوره ها</h2>
              <SwiperButtons />
            </div>
            {courses.map((course) => (
              <SwiperSlide>
                <CourseItem {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>

        <Row className="py-4">
          <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین مقالات</h2>
              <SwiperButtons />
            </div>
            {articles.map((article) => (
              <SwiperSlide>
                <ArticleItem {...article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>

        <Row className="py-4 coment-Section">
          <div className="swiperTopSection">
            <h2 className="sectionTitle">نظرات دانشجویان</h2>
          </div>

          <Col className="col-12 col-md-6">
            <img src={comentImage} className="comentImage img-fluid" />
          </Col>

          <Col className="col-12 col-md-6 swiper-container">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <div className="swiperBtns">
                <SwiperButtons />
              </div>

              <SwiperSlide>
                <Coments title="امیرحسین دانایی" />
              </SwiperSlide>
              <SwiperSlide>
                <Coments title="مهدی شیرین زاده" />
              </SwiperSlide>
              <SwiperSlide>
                <Coments title="آروین عابدینلو" />
              </SwiperSlide>
              <SwiperSlide>
                <Coments title="علی لطفی" />
              </SwiperSlide>
              <SwiperSlide>
                <Coments title="آرزو کمالی" />
              </SwiperSlide>
              <SwiperSlide>
                <Coments title="حسین وفایی" />
              </SwiperSlide>
              <SwiperSlide>
                <Coments title="شبنم لشکری" />
              </SwiperSlide>
              <SwiperSlide>
                <Coments title="دانیال امیرحسینی" />
              </SwiperSlide>
              <SwiperSlide>
                <Coments title="رضا داودی" />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
