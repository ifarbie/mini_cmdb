import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside className='w-64 min-h-[calc(100vh-64px)] border-r bg-white p-4'>
      <nav className='space-y-2'>
        <NavLink to="/" className={({ isActive }) => `block rounded-lg px-4 py-3 font-medium ${isActive ? 'bg-gray-100' : 'text-gray-600 hover:bg-gray-100'}`}>
          Dashboard
        </NavLink>

        <NavLink to="/applications" className={({ isActive }) => `block rounded-lg px-4 py-3 font-medium ${isActive ? 'bg-gray-100' : 'text-gray-600 hover:bg-gray-100'}`}>
          Applications
        </NavLink>

         <NavLink to='/ips'  className={({ isActive }) => `block rounded-lg px-4 py-3 font-medium ${isActive ? 'bg-gray-100' : 'text-gray-600 hover:bg-gray-100'}`}>
          IP Addresses
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
