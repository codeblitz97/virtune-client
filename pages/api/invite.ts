import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
const inviteApi: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const ref = req.query.ref;

  if (!ref) {
    res.status(401).json({
      message: 'Reference is required.',
    });
  }
  if (ref !== 'nav' && ref !== 'landing') {
    return res.status(401).json({
      message: 'Invalid reference',
    });
  }
  res.redirect(
    'https://discord.com/oauth2/authorize?client_id=1012752432700346491&permissions=35358355257664&scope=bot'
  );
};

export default inviteApi;
