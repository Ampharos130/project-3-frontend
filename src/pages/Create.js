import { useState } from 'react';

function Create(props) {
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
    return (
        <div className='container'>
            <div className='create'>
                <h2>New Book Form</h2>
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
                    <br />
                    <div className='newButton'>
                        <input type="submit" value="Create Book" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create;