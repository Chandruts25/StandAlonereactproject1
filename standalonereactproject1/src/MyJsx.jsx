import './MyJsx.css'
import { useState, useEffect} from 'react'






const MyJsx = () => {


    const [listOfClasses, setListOfClasses] = useState([]);

    //let classes = ["First", "djfh"];

    useEffect(() => {
        fetch("https://localhost:44375/api/Classes/GetAllWithSubTopics/10")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setListOfClasses(data);
            })
    }, []);






    return (
        <div id="MyJsx" className="MyJsx">
            <h1>My Jsx Loaded</h1>
            <h3>Classes List</h3>
            <ol>
                {
                    listOfClasses?.map(cls => {
                        return <li key={cls.classId} >{cls.className}</li>
                    })
                }
            </ol>
        </div>
    );
}

export default MyJsx