import React, { useEffect } from 'react'
import './style.css'
const Pagination = ({current,next,prev,end,skip,limit,start}) => {
    console.log(skip,end)

    return (
        <div className='pagination'>
            <span className="prev">
                <button disabled={current === start ? true : false} onClick={prev} >Prev</button>
            </span>
            <span>
            {current}
            </span>
            <span className="next">
                <button disabled={end - skip < limit ? true : false}  onClick={next} >Next</button>
            </span>
        </div>
    )
}

export default Pagination