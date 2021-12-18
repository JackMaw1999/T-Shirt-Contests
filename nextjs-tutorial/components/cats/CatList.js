import CatItem from './CatItem';
import classes from './CatList.module.css';

function CatList(props) {
  return (
    <ul className={classes.list}>
      {props.cats.map((cat) => (
        <CatItem
          key={cat.id}
          id={cat.id}
          image={cat.image}
          name={cat.name}
          age={cat.age}
          quote={cat.quote}
        />
      ))}
    </ul>
  );
}

export default CatList;
