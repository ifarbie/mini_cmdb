import { NavLink } from 'react-router';
import type { Application } from '~/types/Application';

type ApplicationTableProps = {
    applications: Application[]
}

const ApplicationTable = ({ applications }: ApplicationTableProps) => {
  return (
    <div className='overflow-hidden rounded-xl border bg-white'>
      <table className='w-full text-left'>
        <thead className='border-b bg-gray-50'>
          <tr>
            <th className='px-6 py-4 text-sm font-medium text-gray-500'>No</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Name</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Environment</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Status</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Group Counts</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application, index) => (
            <tr key={application.id} className='border-b last:border-0 hover:bg-gray-50'>
              <td className='px-6 py-4 text-sm'>{index + 1}</td>

              <td className='px-6 py-4 text-sm font-medium'>{application.name}</td>

              <td className='px-6 py-4 text-sm text-gray-600'>{application.environment}</td>

              <td className='px-6 py-4'>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${application.status === 'GOOD' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{application.status}</span>
              </td>

              <td className='px-6 py-4 text-sm'>{application.groups.length}</td>

              <td className='px-6 py-4'>
                <div className='flex gap-3 text-sm'>
                  <NavLink to={`/applications/${application.id}`} className='font-medium hover:underline cursor-pointer'>
                    View
                  </NavLink>

                  <NavLink to={`/applications/edit`} className='text-gray-500 hover:text-black cursor-pointer'>
                    Edit
                  </NavLink>
                  
                  <button className='text-red-600 hover:text-red-700 cursor-pointer'>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
