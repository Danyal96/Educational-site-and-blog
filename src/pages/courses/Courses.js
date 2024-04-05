import "./Courses.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Alert } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavbar";
import { Accordion } from "react-bootstrap";
import { FaFilter, FaSort } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import CourseItem from "../../components/course/CourseItem";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("");
  const [courseState, setCourseState] = useState("");

  useEffect(() => {
    if (sortType == "earliest") getCourseByOrder("desc", "id");
    else if (sortType == "lastest") getCourseByOrder("asc", "id");
    else if (sortType == "expensivest") getCourseByOrder("desc", "mainPrice");
    else if (sortType == "cheapest") getCourseByOrder("asc", "mainPrice");
  }, [sortType]);

  useEffect(() => {
    if (courseState == "completed") getCourseByState("completed");
    else if (courseState == "recording") getCourseByState("recording");
    else if (courseState == "presell") getCourseByState("presell");
    
  }, [courseState]);

  useEffect(()=>{
    if(category=='frontend') getCourseByCategory('فرانت اند')
    else if (category=='backend') getCourseByCategory('بک اند')
  } , [category])

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const getCourseByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/courses/?order=${order}&column=${column}`
      )
      .then((response) => setCourses(response.data.data));
  };

  const getCourseByState = (state) => {
    axios
      .get(
        `http://localhost/react/api/courses/?state=${state}`
      )
      .then((response) => setCourses(response.data.data));
  };

  const getCourseByCategory = (category) => {
    axios
      .get(
        `http://localhost/react/api/courses/?category=${category}`
      )
      .then((response) => setCourses(response.data.data));
  };

  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const searchButtonHandler = () => {
    axios
      .get(
        `http://localhost/react/api/courses/?search=${searchKey}&column=teacher`
      )
      .then((response) => setCourses(response.data.data));
  };

  const categoryHandler =(e)=>{
    setCategory(e.target.value)
  }

  const courseStateHandler =(e)=>{
    setCourseState(e.target.value)
  }

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست دوره ها</h1>
          <div className="searchBoxContainer">
            <input
              className="searchInput"
              type="text"
              onChange={searchInputHandler}
            />
            <button className="searchButton" onClick={searchButtonHandler}>
              جستجو
            </button>
          </div>
        </div>

        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion className="py-3" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort size="20px" />
                  <b>مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      id="earliest"
                      name="sort"
                      type="radio"
                      label="جدید ترین"
                      onChange={sortHandler}
                    />

                    <Form.Check
                      id="lastest"
                      name="sort"
                      type="radio"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />

                    <Form.Check
                      id="expensivest"
                      name="sort"
                      type="radio"
                      label="گران ترین"
                      onChange={sortHandler}
                    />

                    <Form.Check
                      id="cheapest"
                      name="sort"
                      type="radio"
                      label="ارزان ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="filterWrapper">
                <div className="filterIcon">
                    <MdCategory />
                    <b>دسته بندی</b>
                </div>
                <Form>
                    <Form.Check 
                        type="checkbox"
                        value='frontend'
                        label='فرانت اند'
                        onChange={categoryHandler}
                        checked={category == 'frontend' ? true : false}
                    />
                    <Form.Check 
                        type="checkbox"
                        value='backend'
                        label='بک اند'
                        onChange={categoryHandler}
                        checked={category == 'backend' ? true : false}
                    />
                </Form>
            </div>

            <div className="filterWrapper">
                <div className="filterIcon">
                    <FaFilter />
                    <b>وضعیت دوره</b>
                </div>
                <Form>
                    <Form.Check 
                        type="switch"
                        value='completed'
                        label='تکمیل شده'
                        onChange={courseStateHandler}
                        checked={courseState == 'completed' ? true : false}
                    />
                    <Form.Check 
                        type="switch"
                        value='recording'
                        label='درحال ضبط'
                        onChange={courseStateHandler}
                        checked={courseState == 'recording' ? true : false}

                    />
                    <Form.Check 
                        type="switch"
                        value='presell'
                        label='پیش فروش'
                        onChange={courseStateHandler}
                        checked={courseState == 'presell' ? true : false}

                    />
                </Form>
            </div>
          </Col>

          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {courses.map((course) => (
                <Col key={course.id}>
                  <CourseItem {...course} />
                </Col>
              ))}
            </Row>

            {courses.length == 0 && (
              <Alert variant="warning" className="py-3 gy-4 mt-2">
                دوره ای یافت نشد!!!!
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Courses;
