// material
import { Container, Grid, Stack, Button } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';

import {
  AppTopRelated,
  TotalLockedLiquidity,
} from '../../components/cashsafe/dashboard';

import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { BlogPostsSearch } from '../../components/_dashboard/blog';

// ----------------------------------------------------------------------

export default function Liquidity() {
  const { user } = useAuth();

  return (
    <Page title="Cashsafe | Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={3}>

          <Grid item xs={12} mb={3}>
            <HeaderBreadcrumbs heading="Liquidity Locker"/>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Stack mb={2} direction="row" alignItems="center" justifyContent="space-between">
                <BlogPostsSearch />
                <Button
                    size="medium"
                    variant="contained"
                    component={RouterLink}
                    to="#"
                >
                    Lock New LP-Token
                </Button>
            </Stack>
          </Grid>
            
          <Grid item xs={12} md={12} lg={12}>
            <AppTopRelated />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
