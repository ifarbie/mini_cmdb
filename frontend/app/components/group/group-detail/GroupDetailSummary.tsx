import { Link } from "react-router";
import type { Application } from "~/types/Application";
import type { ApplicationGroup } from "~/types/ApplicationGroup";

type GroupDetailSummaryProps = {
  application: Application;
  groupDetail: ApplicationGroup;
};

const GroupDetailSummary = ({ application, groupDetail }: GroupDetailSummaryProps) => {
  return (
    <>
      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>Application</p>

          <Link
            to={`/applications/${application.id}`}
            className="mt-2 inline-flex items-center gap-2 text-xl font-semibold hover:underline"
          >
            {application.name}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M19.5 12.75V19.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5H12"
              />
            </svg>
          </Link>
        </div>

        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>IP Addresses</p>

          <p className='mt-2 text-xl font-semibold'>{groupDetail.ips.length}</p>
        </div>
      </div>

      {/* Description */}
      <section className='mb-8 rounded-xl border bg-white p-6'>
        <h2 className='mb-3 text-lg font-semibold'>Description</h2>

        <p className='text-sm leading-6 text-gray-600'>{groupDetail.description ? groupDetail.description : 'No Description Yet'}</p>
      </section>
    </>
  );
};

export default GroupDetailSummary;
