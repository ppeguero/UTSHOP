
import UTSHOPLogo from '/src/assets/UTSHOP_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

function Search() {
    return (
        <div className='container text-center'>
            <div className='row'>
            <div className='col-2'>
                <img src={UTSHOPLogo} className="w-40"></img>
            </div>
            <div className='col-10'>
                <div className='subtitle'>
                    Catálogo
                </div>
                <div className='search row' style={{'text-align': 'left'}}>
                    <div className='col-1'>
                 <FontAwesomeIcon icon={faSearch} /></div>
                 <div className='col-11'>
                    <input type="text" name="search" id="inputSearch" placeholder='Buscar' />

                 </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Search