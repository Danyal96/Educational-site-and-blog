import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../../components/navbar/MyNavbar";
import {Form , Button} from "react-bootstrap"
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css'

function EditArticle() {
  const [articleData, setArticleData] = useState({});
  const articleId = useParams().articleId;

  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((response) => setArticleData(response.data.data[0]));
  }, []);

  useEffect(()=>{
    Aos.init()
  } , [])

  const editArticleHandler = () => {
    axios.put(`http://localhost/react/api/articles/?id=${articleId}` , articleData)
    Swal.fire({
        title : 'مقاله با موفقیت ویرایش شد',
        timer: 1500,
        timerProgressBar : true,
        showConfirmButton : false
    })
  }

  const formHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3" data-aos="fade-right">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" data-aos="fade-left">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.description}
              name="description"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" data-aos="fade-right">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" data-aos="fade-left">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" data-aos="fade-right">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3" data-aos="fade-left">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={articleData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button onClick={editArticleHandler} variant="primary" type="button">
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
