//controlled componenet

import { useState } from "react";


// define a function that is our Component, always make sure to declare the props parameter so you can use props in your Component
const Form = (props) => {
    const [ formState, setFormState] = useState({
        searchterm: ""//best way to represent empty text
    })
 // handleChange - updates formData when we type into form
    const handleChange  = (event) => {
// use the event object to detect key and value to update note:value always display whateverss in state
        setFormState({...formState, [event.target.name]: event.target.value})

    }

    const handleSubmit = (event) => {
        // prevernts the page from refresshing on form submission
        event.preventDefault(); 
        // pass the search term to the getMovie prop
        props.getMovie(formState.searchterm);
    }


    // the Component must return some JSX ..note: dont forget to close all tags />
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="searchterm" 
                onChange={handleChange} //on change is equiv of an event listener every time the value of input box changes it triggers onchange... linking text box w a piec of state
                value={formState.searchterm}
                 /> 
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
   
  };
  
  // we must export the Component to use it in other files
  export default Form;