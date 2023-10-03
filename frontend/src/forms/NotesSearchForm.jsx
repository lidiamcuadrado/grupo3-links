// Importamos los prop-types.
import PropTypes from 'prop-types';

// Importamos los hooks.
import { useState } from 'react';

// Importamos los estilos.
// import './TweetSearchForm.css';

const NotesSearchForm = ({ setSearchParams, loading }) => {
    const [keyword, setKeyword] = useState('');

    return (
        <form
            className="search-form"
            onSubmit={(e) => {
                e.preventDefault();

                setSearchParams(new URLSearchParams({ keyword }));
            }}
        >
            <input
                type="search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button disabled={loading}>Buscar</button>
        </form>
    );
};

NotesSearchForm.propTypes = {
    setSearchParams: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default NotesSearchForm;
