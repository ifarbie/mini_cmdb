type ApplicationDetailDescriptionProps = {
  description: string;
};

const ApplicationDetailDescription = ({ description }: ApplicationDetailDescriptionProps) => {
  return (
    <section className='mb-8 rounded-xl border bg-white p-6'>
      <h2 className='mb-3 text-lg font-semibold'>Description</h2>

      <p className='text-sm leading-6 text-gray-600'>{description ? description : 'No Description Yet'}</p>
    </section>
  );
};

export default ApplicationDetailDescription;
