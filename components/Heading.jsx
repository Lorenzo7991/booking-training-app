import React from 'react'

const Heading = ({title}) => {
    return (
        <>
        <div className='my-4'>
            <h1 className='text-3xl font-bold text-gray-800'>{title}</h1>
            <div className='border-t border-gray-300 my-2'></div>
        </div>
        </>
    )
}

export default Heading
