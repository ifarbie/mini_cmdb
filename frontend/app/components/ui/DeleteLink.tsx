type DeleteLinkProps = {
  isSubmitting: boolean;
  textSize?: 'text-sm' | 'text-base';
};

const DeleteLink = ({ isSubmitting, textSize }: DeleteLinkProps) => {
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const confirmed = window.confirm('Are you sure you want to delete this data?');

    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <button disabled={isSubmitting} type='submit' onClick={handleDelete} className={`cursor-pointer text-red-600 hover:text-red-700 hover:underline disabled:cursor-not-allowed disabled:opacity-50 ${textSize}`}>
      {isSubmitting ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteLink;
