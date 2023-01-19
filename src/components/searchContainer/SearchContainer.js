import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVinData } from '../../store/search/asyncActions';
import { selectSearchResults } from '../../store/search/searchSlice';

export const SearchContainer = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const {recentRequests} = useSelector(selectSearchResults)

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    dispatch(fetchVinData(inputValue))
  }

  const onSetInputValue = (e) => {
    setInputValue(e.target.innerHTML);
  }

  const requestList = recentRequests.length > 0 && recentRequests.map(item => {
    return <li onClick={(e) => onSetInputValue(e)}>{item}</li>
  })
  
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
          <button 
            className='btn btn-block'
            onClick={handleSubmit}
            disabled={false}
          >
            Get Info
          </button>
          <div>
            <h4>
              Recent requests:
            </h4>
              {requestList 
              ? <ul>{requestList.slice(0, 5)}</ul> 
              : 'Have no requests yet...'
              }
          </div>
        </div>
      </form>
  )
}
 