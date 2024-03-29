import { Button } from '@mui/material';
import { NextPage } from 'next';
import Router from 'next/router';

import Page from '~/components/Page';

const Logout: NextPage = () => {
  return (
    <Page title="Logout">
      <h1>Logout page</h1>
      <Button variant="contained" onClick={() => Router.push('/api/auth/login')}>
        Login
      </Button>
    </Page>
  );
};

export default Logout;
