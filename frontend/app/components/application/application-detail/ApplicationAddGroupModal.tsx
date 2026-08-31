import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router';

type ApplicationAddGroupModalProps = {
  applicationName: string;
  applicationId?: string;
  isOpen: boolean;
  onClose: () => void;
};

const ApplicationAddGroupModal = ({
  applicationName,
  applicationId,
  isOpen,
  onClose,
}: ApplicationAddGroupModalProps) => {
  const fetcher = useFetcher();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName('');
      setDescription('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (fetcher.data?.success) {
      onClose();
    }
  }, [fetcher.data, onClose]);

  if (!isOpen) {
    return null;
  }

  const isSubmitting = fetcher.state === 'submitting';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Add Application Group
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Add a new group to {applicationName}.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xl text-gray-400 hover:text-gray-900"
          >
            ×
          </button>
        </div>

        <fetcher.Form method="post">
          <input
            type="hidden"
            name="intent"
            value="add-group"
          />

          <input
            type="hidden"
            name="applicationId"
            value={applicationId}
          />

          {/* Group Name */}
          <div className="mb-5">
            <label
              htmlFor="group-name"
              className="mb-2 block text-sm font-medium"
            >
              Group Name
            </label>

            <input
              id="group-name"
              name="name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="e.g. ALIFA Production"
              required
              className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="group-description"
              className="mb-2 block text-sm font-medium"
            >
              Description
            </label>

            <textarea
              id="group-description"
              name="description"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              rows={4}
              placeholder="Enter group description"
              className="w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
            >
              {isSubmitting
                ? 'Adding...'
                : 'Add Group'}
            </button>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default ApplicationAddGroupModal;