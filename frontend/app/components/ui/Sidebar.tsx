import { NavLink } from 'react-router';

const navigation = [
  {
    label: 'Dashboard',
    to: '/',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3.75h6.5v6.5h-6.5v-6.5ZM13.75 3.75h6.5v6.5h-6.5v-6.5ZM3.75 13.75h6.5v6.5h-6.5v-6.5ZM13.75 13.75h6.5v6.5h-6.5v-6.5Z' />
      </svg>
    ),
  },
  {
    label: 'Applications',
    to: '/applications',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 8.25h7.5M8.25 12h7.5M8.25 15.75h4.5' />
      </svg>
    ),
  },
  {
    label: 'Application Groups',
    to: '/groups',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 6.75h4.5v4.5h-4.5v-4.5ZM12.75 6.75h4.5v4.5h-4.5v-4.5ZM6.75 12.75h4.5v4.5h-4.5v-4.5ZM12.75 12.75h4.5v4.5h-4.5v-4.5Z' />
      </svg>
    ),
  },
  {
    label: 'IP Addresses',
    to: '/ips',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 4.5h10.5A2.25 2.25 0 0 1 19.5 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6.75 4.5Z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 9h7.5M8.25 12h7.5M8.25 15h4.5' />
      </svg>
    ),
  },
];

const Sidebar = () => {
  return (
    <aside className='flex min-h-[calc(100vh-64px)] w-64 flex-col border-r bg-white'>
      <nav className='flex-1 p-4'>
        <p className='mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400'>Navigation</p>

        <div className='space-y-1'>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-700'}>{item.icon}</span>

                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
