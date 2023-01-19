import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVinData } from '../../store/search/asyncActions';

export const SearchContainer = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    dispatch(fetchVinData(inputValue))
  }

  return (
      <form className='form'>
        <h4>Enter VIN code</h4>
        <div className='form-center'>
          <input
            className='form-input'
            type='text'
            name='search'
            value={inputValue}
            onChange={(e) => onInputChange(e)}
          >
          </input>
          <div>
            last 5 codes:
          </div>
          <button 
            className='btn btn-block'
            onClick={handleSubmit}
            disabled={false}
          >
            Get Info
          </button>
        </div>
      </form>
  )
}
 