import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Show from './pages/Show';

function Main(props) {
    const [ books, setBooks ] = useState(null);

    const URL = 'http://project3-bookstore.herokuapp.com/books';

    const getBooks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBooks(data);
    };

    const createBook = async (books) => {
         
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(books),
        });
        
        getBooks();
      };

      const updateBooks = async (book, id) => {
     
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(book),
        });
        
        getBooks();
      }
    
      const deleteBook = async id => {
        
        await fetch(URL + id, {
          method: "DELETE",
        })
        
        getBooks();
      }
    
      useEffect(() => getBooks(), []);
    
      return (
        <main>
          <Switch>
            <Route exact path="/">
              <Index books={books} createBook={createBook} />
            </Route>
            <Route
              path="/books/:id"
              render={(rp) => (
                <Show
                  {...rp}
                />
              )}
            />
          </Switch>
        </main>
      );
    
};
    export default Main;
