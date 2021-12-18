import NewCatForm from "../../components/cats/NewCatForm";
import { useRouter } from 'next/router';

function AddCatPage(){
    const router = useRouter();

    async function addCatHandler(enteredCatData){
        const response = await fetch('/api/new-cat', {
            method: 'POST',
            body: JSON.stringify(enteredCatData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        router.push('/');
    }
    return <NewCatForm onAddCat={addCatHandler}/>
}

export default AddCatPage;
