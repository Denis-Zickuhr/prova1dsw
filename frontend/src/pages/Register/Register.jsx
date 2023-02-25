import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CenteredModal from "../../components/Modal/CenteredModal";

const Register = () => {

  const [books, setBooks] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.title)
    let booksCopy = books;
    booksCopy.push(data)
    setBooks(booksCopy)
    console.log(data.title)
  };

  let App = () => (
    <div className="container unblocked">
      <div className="data">
        <h1 className="text-center">Cadastrar Livro</h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group" id="isbn-group">
            <label className="form-label" htmlFor="isbn">
              ISBN
            </label>
            <input
              className="form-control"
              type="text"
              id="isbn"
              {...register("isbn")}
              required
            />
          </div>
          <div className="form-group" id="title-group">
            <label className="form-label" htmlFor="title">
              Título
            </label>
            <input
              className="form-control"
              type="text"
              id="title"
              {...register("title")}
              required
            />
          </div>
          <div className="form-group" id="author-group">
            <label className="form-label" htmlFor="author">
              Autor
            </label>
            <input
              className="form-control"
              type="text"
              id="author"
              {...register("author")}
              required
            />
          </div>
          <div className="form-group" id="editor-group">
            <label className="form-label" htmlFor="editor">
              Editora
            </label>
            <input
              className="form-control"
              type="text"
              id="editor"
              {...register("editor")}
            />
          </div>
          <div className="form-group" id="year-group">
            <label className="form-label" htmlFor="year">
              Ano
            </label>
            <input
              className="form-control"
              type="number"
              id="year"
              {...register("year")}
            />
          </div>
          <div className="form-group" id="amount-group">
            <label className="form-label" htmlFor="amount">
              Quantidade
            </label>
            <input
              className="form-control"
              type="number"
              id="amount"
              {...register("amount")}
            />

          </div>
          <div className="btn-container">
            <input
              className="btn btn-success w-30"
              type="submit"
              value="Cadastrar"
            />
            <br></br>
            <input
              className="btn btn-success w-30"
              value="Resultados"
              type="button"
              onClick={() => setModalShow(true)}
            />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <App />
      <CenteredModal text={books} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Register;
