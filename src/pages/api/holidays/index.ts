import axios from 'axios';
import { NextApiHandler } from 'next/types';
import { apiHandler } from 'src/utils/server/apiHandler';

export type HolidayLookups = Record<string, { jp: string; en: string }>;

const fetchJapaneseHoliday = () =>
  axios({
    url: 'https://50ra4.github.io/mocked-lookups/jp-holiday.json',
    method: 'GET',
  }).then((res) => res.data as HolidayLookups);

const getHandler: NextApiHandler = async (_, res) => {
  try {
    const holidays = await fetchJapaneseHoliday();
    res.status(200).json({ data: holidays });
  } catch (error) {
    res.status(400).json({ message: 'error' });
  }
};

const handler = apiHandler({
  GET: getHandler,
});

export default handler;
