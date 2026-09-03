type ConfirmButtonProps = {
  isSubmitting: boolean;
  submittingText: string;
  confirmMessage: string;
  children: React.ReactNode;
  isEdit?: boolean;
};

const ConfirmButton = ({ isSubmitting, submittingText, confirmMessage, isEdit, children }: ConfirmButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isEdit) return;
    const confirmed = window.confirm(confirmMessage);

    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <button type='submit' disabled={isSubmitting} onClick={handleClick} className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50'>
      {isSubmitting ? submittingText : children}
    </button>
  );
};

export default ConfirmButton;
