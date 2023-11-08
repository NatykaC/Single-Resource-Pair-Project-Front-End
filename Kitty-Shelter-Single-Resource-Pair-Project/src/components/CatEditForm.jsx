import {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom"

const API = import.meta.env.VITE_API_URL

function CatEditForm() {
    const navigate = useNavigate()
    let {index} = useParams()

    const [cat, setCat] = useState({
        // Get cat info from table created for this object
        name: cat.name
    })

    const handleEditFormTextChange = (e)=>{
        setCat({ ...cat, [e.target.id]: e.target.value})
    }

    const updateCat = ()=>{
        const editedCatData = {
            // Get cat info from table created for this object
            name: cat.name
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
                <label htmlFor="1st field">1st field:</label>
                <input
                    id=""
                    value={""}
                    type="text"
                    onChange={handleEditFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="2nd field"> 2nd field</label>
                <input
                    id=""
                    value={""}
                    type=""
                    onChange={handleEditFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="3rd field"> 3rd field</label>
                <input
                    id=""
                    value={""}
                    type=""
                    onChange={handleEditFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="4th field"> 4th field</label>
                <input
                    id=""
                    value={""}
                    type=""
                    onChange={handleEditFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="5th field"> 5th field</label>
                <input
                    id=""
                    value={""}
                    type=""
                    onChange={handleEditFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="6th field"> 6th field</label>
                <input
                    id=""
                    value={""}
                    type=""
                    onChange={handleEditFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="7th field"> 7th field</label>
                <input
                    id=""
                    value={""}
                    type=""
                    onChange={handleEditFormTextChange}
                    placeholder=""
                    required
                />
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