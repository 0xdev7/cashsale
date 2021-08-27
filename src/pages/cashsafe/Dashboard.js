// material
import { Container, Grid } from '@material-ui/core';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';

import {
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  TotalCollectedFunds,
  TotalLockedLiquidity,
  TotalLockedTokens,
  AppCurrentDownload,
} from '../../components/cashsafe/dashboard';

// ----------------------------------------------------------------------

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <Page title="Cashsafe | Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TotalCollectedFunds />
          </Grid>

          <Grid item xs={12} md={4}>
            <TotalLockedTokens />
          </Grid>

          <Grid item xs={12} md={4}>
            <TotalLockedLiquidity />
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={8} lg={8}>
            <AppNewInvoice />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppTopRelated />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppTopAuthors />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
