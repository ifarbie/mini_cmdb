type GroupDetailSummaryProps = {
  applicationName: string;
  ipsLength: string | number;
  description: string;
};

const GroupDetailSummary = ({ applicationName, ipsLength, description }: GroupDetailSummaryProps) => {
  return (
    <>
      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>Application</p>

          <p className='mt-2 text-xl font-semibold'>{applicationName}</p>
        </div>

        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>IP Addresses</p>

          <p className='mt-2 text-xl font-semibold'>{ipsLength}</p>
        </div>
      </div>

      {/* Description */}
      <section className='mb-8 rounded-xl border bg-white p-6'>
        <h2 className='mb-3 text-lg font-semibold'>Description</h2>

        <p className='text-sm leading-6 text-gray-600'>{description}</p>
      </section>
    </>
  );
};

export default GroupDetailSummary;
