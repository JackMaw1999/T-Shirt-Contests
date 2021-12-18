import Card from '../ui/Card';
import classes from './CatItem.module.css';
import {useRouter} from 'next/router';

function CatItem(props) {
  const router = useRouter();
  function showDetailsHandler(){
    router.push('/' + props.id);
  }
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}, {props.age}</h3>
          <p><i>"{props.quote}"</i></p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default CatItem;

