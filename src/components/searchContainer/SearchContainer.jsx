import { useDispatch, useSelector } from 'react-redux';
import { fetchVinData } from '../../store/search/asyncActions';
import { selectSearchResults } from '../../store/search/searchSlice';
import { useForm } from "react-hook-form";
import s from './searchContainer.module.css'

export const SearchContainer = () => {
  const dispatch = useDispatch()
  const {recentRequests} = useSelector(selectSearchResults)

  const { register, handleSubmit, getValues, setValue, reset, formState: { errors } } = useForm({mode:'onBlur'});

  const onSubmit =(e) => {
    const {search} = getValues()
    dispatch(fetchVinData(search))
    reset({
      search: ''
    })
  }

  const onSetInputValue = (e) => {
    setValue('search', e.target.innerHTML);
  }

  const requestList = recentRequests.length > 0 && recentRequests.map((item, index) => {
    return <li key={index} onClick={(e) => onSetInputValue(e)}>{item}</li>
  })
  
  return (
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h4>Enter VIN code</h4>
        <div className={s.formCenter}>
          <input {...register("search", { 
              required: "This field is required", 
              pattern: {
                value: /\b[(A-H|J-N|P|R-Z|0-9)]{17}\b/gm,
                message: 'Invalid VIN code'
              },
              maxLength: {
                value: 17,
                message: 'Max length 17 symbols' 
              } ,
              minLength: {
                value: 17,
                message: 'Min length 17 symbols' 
              }})
            } 
            className={s.formInput}
            type='text'
          />
          {errors?.search && <p>{errors.search?.message}</p>}
          <button 
            type='submit'
            className={`${s.btn} ${s.btnBlock}`}
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
 