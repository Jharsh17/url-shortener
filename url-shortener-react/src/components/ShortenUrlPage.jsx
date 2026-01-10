import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner';

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        if (url) {
            window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
        }
    }, [url]);
    return (
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
            <p className='text-slate-700'>Redirecting...</p>
        </div>
    );
}

export default ShortenUrlPage