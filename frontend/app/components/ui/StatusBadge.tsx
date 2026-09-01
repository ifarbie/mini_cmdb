type StatusBadgeProps = {
  status: string;
  size?: 'sm' | 'md';
};

const statusStyles: Record<string, { badge: string; dot: string }> = {
  GOOD: {
    badge: 'bg-green-100 text-green-700',
    dot: 'bg-green-600',
  },
  WARNING: {
    badge: 'bg-yellow-100 text-yellow-700',
    dot: 'bg-yellow-600',
  },
  DOWN: {
    badge: 'bg-red-100 text-red-700',
    dot: 'bg-red-600',
  },
};

const StatusBadge = ({ status, size = 'sm' }: StatusBadgeProps) => {
  const styles = statusStyles[status] ?? {
    badge: 'bg-gray-100 text-gray-700',
    dot: 'bg-gray-500',
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded-full font-medium ${styles.badge} ${size === 'sm' ? 'px-3 py-1 text-xs' : 'px-3 py-1 text-sm'}`}>
      <span className={`rounded-full ${size === 'sm' ? 'h-1.5 w-1.5' : 'h-1.5 w-1.5'} ${styles.dot}`} />

      {status}
    </span>
  );
};

export default StatusBadge;
