import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';
import Create from '../pages/Create';

function Main(props) {
  const [book, setBook] = useState(null);

  const URL = 'https://project3-bookstore.herokuapp.com/books/';

  const getBook = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBook(data);
  };

  const createBook = async (books) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(books),
    });
    getBook();
  };

  const updateBook = async (books, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(books),
    });
    getBook();
  }

  const deleteBook = async id => {
    await fetch(URL + id, {
      method: "DELETE",
    })
    getBook();
  }

  useEffect(() => getBook(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index book={book} createBook={createBook} />
        </Route>
        <Route
          path="/books/:id"
          render={(rp) => (
            <Show
              book={book}
              updateBook={updateBook}
              deleteBook={deleteBook}
              {...rp}
            />
          )}
        />
        <Route path="/create">
          <Create URL={URL} />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
