type EditButtonProps = {
  onClick: () => void;
};

const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <button type='button' onClick={onClick} className='cursor-pointer rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50'>
      Edit
    </button>
  );
};

export default EditButton;
