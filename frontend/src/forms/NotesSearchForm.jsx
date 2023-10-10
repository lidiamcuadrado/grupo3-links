// Importamos los prop-types.
import PropTypes from 'prop-types';

// Importamos los hooks.
import { useState } from 'react';

// Importamos las imágenes.
import lupapng from '../../public/img/favicom/lupa.png'


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
                placeholder='Buscar...'
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className='navBarSearchButton' disabled={loading}><img src={lupapng} /></button>
        </form>
    );
};

NotesSearchForm.propTypes = {
    setSearchParams: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default NotesSearchForm;
