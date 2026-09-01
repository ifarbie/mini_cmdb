import { NavLink, useFetcher } from 'react-router';
import type { Application } from '~/types/Application';
import NoDataTable from '../ui/NoDataTable';

type ApplicationTableProps = {
  applications: Application[];
};

const ApplicationTable = ({ applications }: ApplicationTableProps) => {
  const removeAppFetcher = useFetcher();

  return (
    <div className='overflow-hidden rounded-xl border bg-white'>
      <table className='w-full text-left'>
        <thead className='border-b bg-gray-50'>
          <tr>
            <th className='px-6 py-4 text-sm font-medium text-gray-500'>No</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Name</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Environment</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Status</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Groups Count</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {applications.length > 0 ? (
            applications.map((application, index) => (
              <tr key={application.id} className='border-b last:border-0 hover:bg-gray-50'>
                <td className='px-6 py-4 text-sm'>{index + 1}</td>

                <td className='px-6 py-4 text-sm font-medium'>{application.name}</td>

                <td className='px-6 py-4 text-sm text-gray-600'>{application.environment}</td>

                <td className='px-6 py-4'>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${application.status === 'GOOD' ? 'bg-green-100 text-green-700' : application.status === 'WARNING' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {application.status}
                  </span>
                </td>

                <td className='px-6 py-4 text-sm'>{application.groups.length}</td>

                <td className='px-6 py-4'>
                  <div className='flex gap-3 text-sm'>
                    <NavLink to={`/applications/${application.id}`} className='cursor-pointer font-medium hover:underline'>
                      View
                    </NavLink>

                    <NavLink to={`/applications/edit/${application.id}`} className='cursor-pointer text-gray-500 hover:text-black'>
                      Edit
                    </NavLink>

                    <removeAppFetcher.Form method='delete'>
                      <input type='hidden' name='intent' value='remove-app' />

                      <input type='hidden' name='applicationId' value={application.id} />

                      <button disabled={removeAppFetcher.state === 'submitting'} type='submit' className='cursor-pointer text-red-600 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50'>
                        {removeAppFetcher.state === 'submitting' ? 'Deleting...' : 'Delete'}
                      </button>
                    </removeAppFetcher.Form>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <NoDataTable colSpan={6} to='/applications/new' title='No applications found' description='There are currently no applications to display.' linkText='+ Add Application' />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
