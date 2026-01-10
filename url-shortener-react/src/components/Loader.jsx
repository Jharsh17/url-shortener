import React from 'react'
import { InfinitySpin} from 'react-loader-spinner'

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
        <div className="flex flex-col items-center gap-1">
        <InfinitySpin
            visible={true}
            height="200"
            width="200"
            color="red"
            ariaLabel="infinity-spin-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
    </div>
  )
}

export default Loader