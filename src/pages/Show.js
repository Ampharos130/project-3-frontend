import { useState } from "react"
function Show(props) {
  const id = props.match.params.id;
  const books = props.books;
  const book = book.find(p => p._id === id);

  // state for form
  const [ editForm, setEditForm ] = useState(book);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  // handlesubmit for form
  const handleSubmit = event => {
    event.preventDefault();
    props.updateBooks(editForm, book._id);
    // redirect people back to index
    props.history.push("/");
  }

  return (
    <div className="book">
      <h1>{book.name}</h1>
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.name} />
      <button id="delete" onClick={deleteBook}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Book" />
      </form>
    </div>
  );
}

export default Show;