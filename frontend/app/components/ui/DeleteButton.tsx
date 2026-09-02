type DeleteButtonProps = {
  isSubmitting: boolean;
};

const DeleteButton = ({ isSubmitting }: DeleteButtonProps) => {
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const confirmed = window.confirm('Are you sure you want to delete this application?');

    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <button disabled={isSubmitting} type='submit' onClick={handleDelete} className='cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50'>
      {isSubmitting ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteButton;
