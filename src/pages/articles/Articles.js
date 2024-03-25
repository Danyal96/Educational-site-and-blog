import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Aarticles.css";
import {Accordion} from 'react-bootstrap';
import { FaSort } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";

function Articles() {
  const [articles, setAtricles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/")
      .then((response) => setAtricles(response.data.data));
  }, []);

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست مقالات</h1>
          <div className="searchBoxContainer">
            <input className="searchInput" type="text" />
            <button className="searchButton">جستجو</button>
          </div>
        </div>

        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion className="py-3" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header><FaSort size='20px' /><b>مرتب سازی</b> </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
              <Accordion.Header><MdCategory size='20px' /><b>دسته بندی</b> </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Articles;
