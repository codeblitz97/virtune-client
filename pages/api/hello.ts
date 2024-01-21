import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const helloAPI: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(200).json({ name: 'John Doe' });
};

export default helloAPI;
