import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    title: "",
    img: "",
    author: "",
    descript: "",
    price: "",
    qty: ""
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBook(newForm);
    setNewForm({
      title: "",
      img: "",
      author: "",
      descript: "",
      price: "",
      qty: ""
    });
  };
  // loaded function
  const loaded = () => {
    return props.book.map((books) => (
      <div key={books._id} className="books">
        <Link to={`/books/${books._id}`}>
          <h1>{books.title}</h1>
        </Link>
        <img src={books.img} alt={books.title} />
        <h3>{books.author}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.img}
          name="img"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.author}
          name="author"
          placeholder="author"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.descript}
          name="descript"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          type="number"
          value={newForm.price}
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <input
          type="number"
          value={newForm.qty}
          name="qty"
          placeholder="quantity"
          onChange={handleChange}
        />
        <input type="submit" value="Create Book" />
      </form>
      {props.book ? loaded() : loading()}
    </section>
  );
}

export default Index;