import { Link, useParams } from "react-router";
import { useState } from "react";

type IpAddress = {
  id: number;
  address: string;
  description: string;
};

type ApplicationGroup = {
  id: number;
  name: string;
  description: string;
  application: {
    id: number;
    name: string;
  };
  ips: IpAddress[];
};

const dummyAvailableIps: IpAddress[] = [
  {
    id: 4,
    address: "10.10.1.20",
    description: "Application Server",
  },
  {
    id: 5,
    address: "10.10.1.21",
    description: "Load Balancer",
  },
  {
    id: 6,
    address: "10.10.1.22",
    description: "Monitoring Server",
  },
];

const initialGroup: ApplicationGroup = {
  id: 1,
  name: "ALIFA Production",
  description:
    "Group yang digunakan untuk environment production ALIFA.",
  application: {
    id: 1,
    name: "ALIFA",
  },
  ips: [
    {
      id: 1,
      address: "10.10.1.10",
      description: "Application Server",
    },
    {
      id: 2,
      address: "10.10.1.11",
      description: "Application Server",
    },
    {
      id: 3,
      address: "10.10.1.12",
      description: "Database Server",
    },
  ],
};

export default function GroupDetail() {
  const { id } = useParams();

  const [group, setGroup] = useState(initialGroup);

  // Add IP
  const [isAddIpOpen, setIsAddIpOpen] = useState(false);
  const [selectedIpId, setSelectedIpId] = useState<number | "">("");

  // Edit Group
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [editName, setEditName] = useState(group.name);
  const [editDescription, setEditDescription] = useState(
    group.description,
  );

  const handleAddIp = () => {
    if (selectedIpId === "") {
      return;
    }

    const selectedIp = dummyAvailableIps.find(
      (ip) => ip.id === selectedIpId,
    );

    if (!selectedIp) {
      return;
    }

    setGroup((currentGroup) => ({
      ...currentGroup,
      ips: [...currentGroup.ips, selectedIp],
    }));

    setSelectedIpId("");
    setIsAddIpOpen(false);
  };

  const handleRemoveIp = (ipId: number) => {
    setGroup((currentGroup) => ({
      ...currentGroup,
      ips: currentGroup.ips.filter((ip) => ip.id !== ipId),
    }));
  };

  const handleOpenEdit = () => {
    setEditName(group.name);
    setEditDescription(group.description);
    setIsEditOpen(true);
  };

  const handleUpdateGroup = () => {
    if (!editName.trim()) {
      return;
    }

    setGroup((currentGroup) => ({
      ...currentGroup,
      name: editName,
      description: editDescription,
    }));

    setIsEditOpen(false);
  };

  return (
    <main className="relative flex-1 bg-gray-50 p-8 text-gray-900">
      {/* Back */}
      <Link
        to={`/applications/${group.application.id}`}
        className="mb-6 inline-block text-sm text-gray-500 hover:text-gray-900"
      >
        ← Back to Application
      </Link>

      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="mb-1 text-sm text-gray-500">
            Group ID: #{id}
          </p>

          <h1 className="text-3xl font-bold">
            {group.name}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Application:{" "}
            <span className="font-medium text-gray-900">
              {group.application.name}
            </span>
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleOpenEdit}
            className="rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Edit
          </button>

          <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-gray-500">
            Application
          </p>

          <p className="mt-2 text-xl font-semibold">
            {group.application.name}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-gray-500">
            IP Addresses
          </p>

          <p className="mt-2 text-xl font-semibold">
            {group.ips.length}
          </p>
        </div>
      </div>

      {/* Description */}
      <section className="mb-8 rounded-xl border bg-white p-6">
        <h2 className="mb-3 text-lg font-semibold">
          Description
        </h2>

        <p className="text-sm leading-6 text-gray-600">
          {group.description}
        </p>
      </section>

      {/* IP Addresses */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              IP Addresses
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              IP addresses associated with this group.
            </p>
          </div>

          <button
            onClick={() => setIsAddIpOpen(true)}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            + Add IP
          </button>
        </div>

        {/* IP Table */}
        <div className="overflow-hidden rounded-xl border bg-white">
          <table className="w-full text-left">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-gray-500">
                  IP Address
                </th>

                <th className="px-6 py-4 text-sm font-medium text-gray-500">
                  Description
                </th>

                <th className="px-6 py-4 text-sm font-medium text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {group.ips.map((ip) => (
                <tr
                  key={ip.id}
                  className="border-b last:border-0 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm font-medium">
                      {ip.address}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {ip.description}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleRemoveIp(ip.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add IP Modal */}
      {isAddIpOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Add IP to Group
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Select an existing IP address.
                </p>
              </div>

              <button
                onClick={() => setIsAddIpOpen(false)}
                className="text-xl text-gray-400 hover:text-gray-900"
              >
                ×
              </button>
            </div>

            {/* Select IP */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">
                IP Address
              </label>

              <select
                value={selectedIpId}
                onChange={(event) =>
                  setSelectedIpId(
                    event.target.value
                      ? Number(event.target.value)
                      : "",
                  )
                }
                className="w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
              >
                <option value="">
                  Select IP address
                </option>

                {dummyAvailableIps
                  .filter(
                    (ip) =>
                      !group.ips.some(
                        (groupIp) => groupIp.id === ip.id,
                      ),
                  )
                  .map((ip) => (
                    <option key={ip.id} value={ip.id}>
                      {ip.address}
                    </option>
                  ))}
              </select>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsAddIpOpen(false)}
                className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleAddIp}
                disabled={selectedIpId === ""}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Add IP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Group Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Edit Application Group
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Update group information.
                </p>
              </div>

              <button
                onClick={() => setIsEditOpen(false)}
                className="text-xl text-gray-400 hover:text-gray-900"
              >
                ×
              </button>
            </div>

            {/* Group Name */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">
                Group Name
              </label>

              <input
                type="text"
                value={editName}
                onChange={(event) =>
                  setEditName(event.target.value)
                }
                className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter group name"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                value={editDescription}
                onChange={(event) =>
                  setEditDescription(event.target.value)
                }
                rows={4}
                className="w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter group description"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsEditOpen(false)}
                className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdateGroup}
                disabled={!editName.trim()}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}