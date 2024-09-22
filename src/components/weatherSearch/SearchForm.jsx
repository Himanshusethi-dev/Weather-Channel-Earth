import React, { Fragment, useEffect, useState, useRef } from 'react'
import { useDebounce } from "@uidotdev/usehooks";
import "./style.css";
import usePredictiveResults from '../../hooks/usePredictiveResults';
const SearchForm = ({manageLocation}) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false)
  const debouncedSearchTerm = useDebounce(search, 800);
  const { data,loading,error } = usePredictiveResults(debouncedSearchTerm);
  const dropdownRef = useRef(null);
  const manageSearch = (e) => {
    setSearch(e.target.value);
  }
  const manageSearchPanel = (e, value) => {
    e.stopPropagation();
    console.log('ff')
    setOpen(value);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleForm = (event)=>{
    event.preventDefault();
    manageLocation(search);
    setOpen(false)
    setSearch("")
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="searchWrapper" ref={dropdownRef}  >
      <form className='searchFormElement' onSubmit={handleForm} >
        <div className='searchForm'  >
          <input placeholder='Search city' type="text" value={search} onChange={manageSearch} onFocus={(e) => {manageSearchPanel(e, true) }} />
          {
            <div className={`searchPanel ${open  && data.length ? "open" : "close"}`}>
              {
                data && (
                  !loading ? (
                    data.map((result) => (
                      <Fragment key={result.url}>
                        <div className='resultButtonTab'>
                          <button onClick={(e)=>{setSearch(result.name)}}  className='resultButton' >{result.name}</button>
                        </div>
                      </Fragment>
                    ))
                  ) : (
                    
                        
                          error ? (
                              <div> {error} </div>
                          ): (
                              <div className='loading'> Looking for your location </div>
                          )
                            
                       
                      
                      
                  )
              
                )
              }
            </div>
          }
        </div>

      </form>

      {/* <div className="searchResultsWrapper">
    </div> */}
    </div>
  )
}
export default SearchForm