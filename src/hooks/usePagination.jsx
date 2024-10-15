import {useState,useEffect,useCallback} from 'react'

const usePagination = () => {
    const [paginate, setPaginate] = useState({
        current: 1,
        skipValue: 0
    })

    const handlePrev = () => {
        setPaginate((prev) => {
            return { ...prev, current: prev.current - 1, skipValue: prev.skipValue - 10 }
        })
    }

    const handleNext = () => {
        setPaginate((prev) => {
            return { ...prev, current: prev.current + 1, skipValue: prev.skipValue + 10 }
        })
    }
    return (
       {current : paginate.current,skipValue : paginate.skipValue,handlePrev,handleNext}
    )
}

export default usePagination