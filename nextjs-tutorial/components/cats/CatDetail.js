import classes from './CatDetail.module.css';

function CatDetail(props){
    return (
        <section className={classes.detail}>
            <img 
                src={props.image}
                alt={props.name}
            />
            <h1>{props.name}, {props.age}</h1>
            <p><i>"{props.quote}"</i></p>
            <p>{props.description}</p>
        </section>
    );
}

export default CatDetail;
