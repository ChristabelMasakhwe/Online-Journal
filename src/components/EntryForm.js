import React, {useState} from 'react';

function EntryForm() {
    const [addStory, setAddStory] = useState("")

const handleChange =(e) =>{
    setAddStory({...addStory, [e.target.name]: e.target.value})
}

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(addStory);
    setAddStory(addStory)
}

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text"
                    name="entry"
                    placeholder="entry"
                    value={addStory}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Add Entry</button>
                </div>
            </form>
        </div>
    )
}

export default EntryForm;