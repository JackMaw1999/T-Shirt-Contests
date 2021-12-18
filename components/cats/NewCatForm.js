import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCatForm.module.css';

function NewCatForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const ageInputRef = useRef();
  const descriptionInputRef = useRef();
  const quoteInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredQuote = quoteInputRef.current.value;

    const catData = {
      name: enteredName,
      image: enteredImage,
      age: enteredAge,
      description: enteredDescription,
      quote: enteredQuote
    };

    props.onAddCat(catData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Cat Name</label>
          <input type='text' required id='title' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Cat Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='age'>Cat Age</label>
          <input type='number' required id='age' ref={ageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Quote</label>
          <textarea
            id='quote'
            required
            rows='3'
            ref={quoteInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Cat</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCatForm;
