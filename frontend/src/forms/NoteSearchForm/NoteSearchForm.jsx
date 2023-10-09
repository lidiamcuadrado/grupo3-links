//Importamos los hooks.
import PropTypes from 'prop-types';

import { useState } from "react";


const NoteSearchForm = ({ setSearchParams, loading}) => {
    const [keyword, setKeyword] = useState('');
    
    return(
    <form className="search-form"
    onSubmit={(e) =>{
        e.preventDefault();
        setSearchParams(new URLSearchParams({keyword}));
    }}>
        <input type="search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button disabled={loading}>Buscar</button>
    </form>
    )
    
}

NoteSearchForm.propTypes = {
    setSearchParams: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default NoteSearchForm;