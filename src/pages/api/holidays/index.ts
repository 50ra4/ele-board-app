import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type HolidayLookups = Record<string, { jp: string; en: string }>;

type Response = {
  data: HolidayLookups;
};

type ErrorResponse = {
  code?: string;
  message: string;
};

const fetchJapaneseHoliday = () =>
  axios({
    url: 'https://50ra4.github.io/mocked-lookups/jp-holiday.json',
    method: 'GET',
  }).then((res) => res.data as HolidayLookups);

const handler = async (req: NextApiRequest, res: NextApiResponse<Response | ErrorResponse>) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }
  try {
    const holidays = await fetchJapaneseHoliday();
    res.status(200).json({ data: holidays });
  } catch (error) {
    res.status(400).json({ message: 'error' });
  }
};

export default handler;
