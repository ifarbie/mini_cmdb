import React from 'react'
import { Link } from 'react-router'

const ApplicationHeader = () => {
  return (
     <div className='mb-6 flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Applications</h1>

          <p className='mt-1 text-sm text-gray-500'>Manage all applications in CMDB</p>
        </div>

        <Link to='/applications/new' className='rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
          + Add Application
        </Link>
      </div>
  )
}

export default ApplicationHeader