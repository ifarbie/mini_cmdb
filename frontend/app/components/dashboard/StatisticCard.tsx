type StatisticCardProps = {
  name: string;
  qty: number | string;
};

const StatisticCard = ({ name, qty }: StatisticCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 transition-colors hover:bg-gray-50">
      <p className="text-sm font-medium text-gray-500">
        {name}
      </p>

      <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
        {qty}
      </p>

      <div className="mt-4 border-t pt-3">
        <p className="text-xs text-gray-400">
          Total records
        </p>
      </div>
    </div>
  );
};

export default StatisticCard;