import { MongoClient } from 'mongodb';

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const {name, age, image, quote, description} = data;

        const client = await MongoClient.connect('mongodb+srv://Jack:RfSngnNQE9rhE5ku@cluster0.e2qjt.mongodb.net/cats?retryWrites=true&w=majority');
        const db = client.db();

        const catsCollection = db.collection('cats');

        const result = await catsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Message inserted!'});
    }
}

export default handler;
