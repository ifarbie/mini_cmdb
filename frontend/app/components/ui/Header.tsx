const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-3">
        <div className="leading-tight">
          <h1 className="text-lg font-bold tracking-tight text-gray-900">
            CMDB
          </h1>

          <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
            Configuration Management Database
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold text-gray-700">
          Bank Syariah Indonesia
        </p>

        <p className="text-xs text-gray-400">
          IT Control & Command Center
        </p>
      </div>
    </header>
  );
};

export default Header;