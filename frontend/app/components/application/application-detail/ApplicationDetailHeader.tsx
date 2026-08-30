type ApplicationDetailHeaderProps = {
    id: string | undefined
    name: string
    handleOpenEdit: () => void
}

const ApplicationDetailHeader = ({id, name, handleOpenEdit}: ApplicationDetailHeaderProps) => {
  return (
    <div className='mb-8 flex items-start justify-between'>
        <div>
          <p className='mb-1 text-sm text-gray-500'>Application ID: #{id}</p>

          <h1 className='text-3xl font-bold'>{name}</h1>
        </div>

        <div className='flex gap-3'>
          <button onClick={handleOpenEdit} className='rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50'>
            Edit
          </button>

          <button className='rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700'>Delete</button>
        </div>
      </div>
  )
}

export default ApplicationDetailHeader