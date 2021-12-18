import CatDetail from '../../components/cats/CatDetail.js';
import { MongoClient, ObjectId } from 'mongodb';

function CatDetailsPage(props){
    return (
        <CatDetail 
            name={props.catData.name}
            age={props.catData.age}
            image={props.catData.image}
            description={props.catData.description}
            quote={props.catData.quote}
        />
    );
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://Jack:RfSngnNQE9rhE5ku@cluster0.e2qjt.mongodb.net/cats?retryWrites=true&w=majority');
    const db = client.db();

    const catsCollection = db.collection('cats');

    const cats = await catsCollection.find({}, { _id: 1}).toArray();

    client.close();
    return {
        fallback: false,
        paths: cats.map((cat) => ({
            params: { catId: cat._id.toString() },
        })),
    };
}

export async function getStaticProps(context){
    const catId = context.params.catId;

    const client = await MongoClient.connect('mongodb+srv://Jack:RfSngnNQE9rhE5ku@cluster0.e2qjt.mongodb.net/cats?retryWrites=true&w=majority');
    const db = client.db();

    const catsCollection = db.collection('cats');

    const selectedCat = await catsCollection.findOne({ _id: ObjectId(catId)});

    client.close();

    return{
        props: {
            catData: {
                id: selectedCat._id.toString(),
                name: selectedCat.name,
                age: selectedCat.age,
                image: selectedCat.image,
                quote: selectedCat.quote,
                description: selectedCat.description,
            },
        },
    };
}

export default CatDetailsPage;
