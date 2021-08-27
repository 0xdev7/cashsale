import PropTypes from 'prop-types';
import { useEffect } from 'react';
// material
import { Container, Grid, Skeleton } from '@material-ui/core';
// components
import { OneCard } from '../components';

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    {[...Array(8)].map((_, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

ILOList.propTypes = {
  data: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired
};

export default function ILOList({ data, status, ...other }) {
  return (
      <Container>
        <Grid container spacing={3}>
          {data.map((one) => (
            <OneCard data={one} status={status} />
          ))}

          {!data.length && SkeletonLoad}
        </Grid>
      </Container>
  );
}
