type StatisticCardProps = {
  name: string;
  qty: number | string;
};

const StatisticCard = ({ name, qty }: StatisticCardProps) => {
  return (
    <div className='rounded-xl border bg-white p-6'>
      <p className='text-sm text-gray-500'>{name}</p>

      <p className='mt-2 text-3xl font-bold'>{qty}</p>
    </div>
  );
};

export default StatisticCard;
