import PropTypes from 'prop-types';
// material
import { Box, Typography, Stack } from '@material-ui/core';
// ----------------------------------------------------------------------

HeaderBreadcrumbs.propTypes = {
  links: PropTypes.array,
  action: PropTypes.node,
  heading: PropTypes.string.isRequired,
  moreLink: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sx: PropTypes.object
};

export default function HeaderBreadcrumbs({ heading, moreLink = '' || [], sx, ...other }) {
  return (
    <Stack sx={sx} spacing={2}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
