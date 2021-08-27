// material
import { Container, Grid } from '@material-ui/core';
// components
import Page from '../../components/Page';
import { CreateForm, CreateInfo } from '../../components/cashsafe/launchpad/create';

// ----------------------------------------------------------------------

export default function NewLaunchPad() {
  return (
    <Page title="Cashsafe | LaunchPad">
      <Container>
        <Grid item xs={12} mb={3}>
            <CreateInfo />
        </Grid>
        <Grid item xs={12}>
            <CreateForm />
        </Grid>
      </Container>
    </Page>
  );
}