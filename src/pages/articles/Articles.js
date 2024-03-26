import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Alert } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Aarticles.css";
import { Accordion } from "react-bootstrap";
import { FaSort } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";

function Articles() {
  const [articles, setAtricles] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (sortType == "earliest") getArticleByOrder("desc", "id");
    else if (sortType == "lastest") getArticleByOrder("asc", "id");
    else if (sortType == "longest") getArticleByOrder("desc", "readingTime");
    else if (sortType == "shortest") getArticleByOrder("asc", "readingTime");
  }, [sortType]);

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const getArticleByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setAtricles(response.data.data));
  };

  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const searchButtonHandler = () => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${searchKey}&column=writter`
      )
      .then((response) => setAtricles(response.data.data));
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست مقالات</h1>
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
                      id="longest"
                      name="sort"
                      type="radio"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />

                    <Form.Check
                      id="shortest"
                      name="sort"
                      type="radio"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <MdCategory size="20px" />
                  <b>دسته بندی</b>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p>دسته بندی مقالات</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {articles.map((article) => (
                <Col key={article.id}>
                  <ArticleItem {...article} />
                </Col>
              ))}
            </Row>

            {articles.length == 0 && (
              <Alert variant='warning' className="py-3 gy-4 mt-2">
                مقاله ای یافت نشد!!!!
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Articles;
