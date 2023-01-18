import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVinData } from '../../store/search/asyncActions';
import s from './searchContainer.module.css';

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
      <form className={s.form}>
        <h4>Enter VIN code</h4>
        <div className={s.formCenter}>
          <input
            className={s.formInput}
            type='text'
            name='search'
            value={inputValue}
            onChange={(e) => onInputChange(e)}
          >
          </input>
          <button 
            // className={s.btn + s.btnBlock}
            onClick={handleSubmit}
            disabled={false}
          >
            Get Info
          </button>
        </div>
      </form>
  )
}
 