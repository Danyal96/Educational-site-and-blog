import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import MyNavbar from "../../components/navbar/MyNavbar";

function Home() {
  const [articles, setAtricles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/")
      .then((response) => setAtricles(response.data.data));
  }, []);

  return (
    <>
      <MyNavbar />
      <Hero />
      <Container>
        <h1 style={{ marginTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
          {articles.map((article) => (
            <Col key={article.id}>
              <ArticleItem {...article} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
