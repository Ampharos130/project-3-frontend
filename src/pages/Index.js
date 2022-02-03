import { useState } from "react";
import { Link } from "react-router-dom";
import './Index.scss'

function Index(props) {

  // loaded function
  const loaded = () => {
    return props.book.map((books) => (
      
      <div key={books._id} className="books">
          <h1>{books.title}</h1>
        <Link to={`/books/${books._id}`}>
        <img src={books.img} alt={books.title} className="indexImg"/>
        </Link>
        <h3>{books.author}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <div className="welcomeDiv">
      <h1 className="indexTitle">Welcome to The Last Chapter</h1>
      <p>Here you can list any book to read to your heart's content!</p>
      </div>
      <div className="indexDiv">
      {props.book ? loaded() : loading()}
      </div>

    </section>
  );
}

export default Index;