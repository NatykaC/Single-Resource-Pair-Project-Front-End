import {useNavigate, Link} from "react-router-dom"
import {useState} from "react"

const API = import.meta.env.VITE_API_URL

function CatNewForm() {
    const [cat, setCat]=useState({
        // get info from table created for this object
        name: ""
    })
    
    const addNewCat = ()=>{
        const newCatData = {
            // get info from table created for this object
            name: ""
        }
        try {
            fetch(`${API}/cats`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCatData)
            })
            .then(res=>res.json)
            .then(()=>Navigate('/cats'))
        } catch (error) {
            return error
        }
    }

    const handleNewFormTextChange = (e)=>{
        setCat({ ...cat, [e.target.id]: e.target.value})
    }

    const handleNewFormSubmit = (e)=>{
        e.preventDefault()
        addCat()
    }
    return (
        <div>
            <br/>
            <form onSubmit={handleNewFormSubmit}>
                <label htmlFor="1st field">1st field: </label>
                <input
                    id="1st field"
                    value={""}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="2nd field">2nd field: </label>
                <input
                    id=""
                    value={""}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="3rd field">3rd field: </label>
                <input
                    id=""
                    value={""}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                 <label htmlFor="4th field">4th field: </label>
                <input
                    id=""
                    value={""}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="5th field">5th field: </label>
                <input
                    id=""
                    value={""}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="6th field">6th field: </label>
                <input
                    id=""
                    value={""}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <label htmlFor="7th field">7th field: </label>
                <input
                    id=""
                    value={""}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder=""
                    required
                />
                <br/>
                <br/>
                <button type="submit">Add New Cat!</button>
            </form>
            <br/>
            <Link to={`/cats`}>
                <button>Don't Add! Return to All Cats!</button>
            </Link>
        </div>
    )
}

export default CatNewForm;