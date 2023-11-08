import {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom"

const API = import.meta.env.VITE_API_URL

function CatEditForm() {
    const navigate = useNavigate()
    let {index} = useParams()

    const [cat, setCat] = useState({
        name: "",
        age: "",
        color: "",
        breed: "",
        arrival_date: "",
        spayed: false
    })

    const handleEditFormTextChange = (e)=>{
        setCat({ ...cat, [e.target.id]: e.target.value})
    }

    const handleEditSpayedCheckboxChange = ()=>{
        setCat({ ...cat, spayed: !cat.spayed})
    }

    const updateCat = ()=>{
        const editedCatData = {
            // Get cat info from table created for this object
            name: cat.name,
            age: cat.age,
            color: cat.color,
            breed: cat.breed,
            arrival_date: cat.arrival_date,
            spayed: cat.spayed

        }
        try {
            fetch(`${API}/cats/${index}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedCatData)
            })
            .then(res=>res.json())
            .then(()=>navigate('/cats'))
            
        } catch (error) {
            return error
        }
    }

    const handleEditFormSubmit = (e)=>{
        e.preventDefault()
        updateCat()
    }

    return (
        <div>
            <br/>
            <form onSubmit={handleEditFormSubmit}>
                <label htmlFor="name">Cat Name: </label>
                <input
                    id="name"
                    value={cat.name}
                    type="text"
                    onChange={handleEditFormTextChange}
                    placeholder="Name of cat"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="age">Age of Cat: </label>
                <input
                    id="age"
                    value={cat.age}
                    type="number"
                    onChange={handleEditFormTextChange}
                    placeholder="Age of Cat"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="color">Color of Cat: </label>
                <input
                    id="color"
                    value={cat.color}
                    type="text"
                    onChange={handleEditFormTextChange}
                    placeholder="Color of Cat"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="breed"> Cat Breed: </label>
                <input
                    id="breed"
                    value={cat.breed}
                    type="text"
                    onChange={handleEditFormTextChange}
                    placeholder="Cat Breed"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="arrival"> Arrival Date: </label>
                <input
                    id="arrival"
                    value={cat.arrival_date}
                    type="text"
                    onChange={handleEditFormTextChange}
                    placeholder="Arrival Date"
                    
                />
                <br/>
                <br/>
                <label htmlFor="spayed">Spayed: </label>
                <input
                    id="spayed"
                    type="checkbox"
                    onChange={handleEditSpayedCheckboxChange}
                    checked={cat.spayed}
                    
                />
                <br/>
                <br/>
                {/* <label htmlFor="7th field"> 7th field</label>
                <input
                    id=""
                    value={""}
                    type=""
                    onChange={handleEditFormTextChange}
                    placeholder=""
                    required
                /> */}
                <br/>
                <br/>
                <button type="submit">Submit to Edit</button>
            </form>
                <br/>
                <Link to={`/cats/${index}`}>
                    <button>Don't Edit! Return to All Cats!</button>
                </Link> 
        </div>
    )
}

export default CatEditForm;