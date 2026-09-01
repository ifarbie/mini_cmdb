import { useFetcher } from 'react-router';
import type { Application } from '~/types/Application';
import NoDataTable from '../ui/NoDataTable';
import EditLink from '../ui/EditLink';
import ViewLink from '../ui/ViewLink';
import DeleteLink from '../ui/DeleteLink';
import StatusBadge from '../ui/StatusBadge';

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
                  <StatusBadge status={application.status} />
                </td>

                <td className='px-6 py-4 text-sm'>{application.groups.length}</td>

                <td className='px-6 py-4'>
                  <div className='flex gap-3 text-sm'>
                    <ViewLink to={`/applications/${application.id}`}>View</ViewLink>

                    <EditLink to={`/applications/edit/${application.id}`}>Edit</EditLink>

                    <removeAppFetcher.Form method='delete'>
                      <input type='hidden' name='intent' value='remove-app' />

                      <input type='hidden' name='applicationId' value={application.id} />

                      <DeleteLink isSubmitting={removeAppFetcher.state === 'submitting'} />
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
