import useSWR from 'swr';
import { useEffect, useMemo } from 'react';
import type { HolidayLookups } from 'src/pages/api/holidays';
import { fetcher } from 'src/utils/fetcher';

function HolidayPage() {
  const { data, error } = useSWR<{ data: HolidayLookups }>('/api/holidays', fetcher);
  const holidays = useMemo(
    () =>
      Object.entries(data?.data ?? {}).reduce(
        (acc, [date, value]) => [...acc, { date, name: value.jp }],
        [] as { date: string; name: string }[],
      ),
    [data],
  );

  useEffect(() => {
    console.log({ data, error });
  }, [error]);

  return (
    <div>
      <h1>holidays</h1>
      <ul>
        {holidays.map(({ date, name }) => (
          <li>{`${date}: ${name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default HolidayPage;
