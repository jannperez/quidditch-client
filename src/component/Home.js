import { useState } from "react"
import axios from "axios"

function Home() {
    const [students, setStudents] = useState([])
    const handleClick = () => { fetchData() }

    const deleteStudent = async (id) => {
        try {
            const response = await axios.delete('http://localhost:3000/HarryPotter/student/' + id)
            setStudents(response.data.student)
            console.log("Student data updated")
        } catch (error) {
            console.log(error)
        }
    }
    const fetchData = async () => {
        try {
            const response = await axios('http://localhost:3000/HarryPotter/student')
            //const response = await axios(`${apiUrl}/items`)
            //console.log(response)
            setStudents(response.data.student)
            console.log("Student data updated")
        } catch (error) {
            console.log(error)
        }

    }

    console.log(students)
    return (
        <div>
            <h1 color="orange">Top Quidditch Players of Hogwarts</h1>
            <div>
                <a target="_blank" href="http://github.com/jannperez">My Github</a>
            </div>
            <button onClick={handleClick}>Find Players</button>
            {
                students.map((student) => (
                    
                    <div className='details' key={student._id}>

                        <h2>{student.name}</h2>
                        <div>
                            <div>Age: {student.age}</div>
                            <div>Race: {student.race}</div>
                            <div>House: {student.house.House_Name}</div>
                            <div>Teacher: {student.house.Teacher}</div>
                            <div>Patronus: {student.patronus.protection}</div>

                        </div>

                        {/* Below will be a palaceholder */}
                        {/* <div className='details-image'> 
            
            
            {/* created a button to take us to individual player when clicked */}
                        <div className='player-button'>
                            <button onClick={(e) => { e.preventDefault(); deleteStudent(student._id) }}>Delete Student</button>
                        </div>
                    </div>


                ))
            }

        </div >
    )
}

export default Home;