import { useState } from "react"

function Show(props) {
  const id = props.match.params.id;
  const book = props.book;
  const books = book.find(p => p._id === id);

  // state for form
  const [ editForm, setEditForm ] = useState(books);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  // handlesubmit for form
  const handleSubmit = event => {
    event.preventDefault();
    props.updateBook(editForm, books._id);
    // redirect people back to index
    props.history.push("/");
  }

  const removeBooks = () =>{
    props.deleteBook(books._id);
    props.history.push("/");
  }

  return (
    <div className="books">
      <h1>{books.title}</h1>
      <h2>{books.author}</h2>
      <img src={books.img} alt={books.title} className="showImg"/>
      <br />
      <button id="delete" onClick={removeBooks} className="delete">
        DELETE
      </button>
      <br />
      <div className="showContainer">
      <div className="show">
        <h3>Edit Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.img}
          name="img"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.author}
          name="author"
          placeholder="author"
          onChange={handleChange}
        />
         <input
          type="text"
          value={editForm.descript}
          name="descript"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          type="number"
          value={editForm.price}
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <input
          type="number"
          value={editForm.qty}
          name="qty"
          placeholder="quantity"
          onChange={handleChange}
        />
        <div className="update">
        <input type="submit" value="Update Book" />
        </div>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Show;