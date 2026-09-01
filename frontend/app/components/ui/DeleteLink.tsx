type DeleteLinkProps = {
  isSubmitting: boolean;
};
const DeleteLink = ({ isSubmitting }: DeleteLinkProps) => {
  return (
    <button disabled={isSubmitting} type='submit' className='cursor-pointer text-red-600 hover:text-red-700 hover:underline disabled:cursor-not-allowed disabled:opacity-50'>
      {isSubmitting ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteLink;
