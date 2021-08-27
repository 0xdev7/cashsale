import faker from 'faker';
import { orderBy } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import heartFill from '@iconify/icons-eva/heart-fill';
import trophyFilled from '@iconify/icons-ant-design/trophy-filled';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Stack, Card, Avatar, CardHeader, Typography } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const AUTHORS = [
  {
    name: 'VEmpire Gamer Token (VEGT)',
    favourite: faker.datatype.number(),
    avatar: '/static/icons/unknown-token.png'
  },
  {
    name: 'VEmpire Gamer Token (VEGT)',
    favourite: faker.datatype.number(),
    avatar: '/static/icons/unknown-token.png'
  },
  {
    name: 'VEmpire Gamer Token (VEGT)',
    favourite: faker.datatype.number(),
    avatar: '/static/icons/unknown-token.png'
  },
  {
    name: 'VEmpire Gamer Token (VEGT)',
    favourite: faker.datatype.number(),
    avatar: '/static/icons/unknown-token.png'
  },
  {
    name: 'VEmpire Gamer Token (VEGT)',
    favourite: faker.datatype.number(),
    avatar: '/static/icons/unknown-token.png'
  }
];

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  backgroundColor: alpha(theme.palette.primary.main, 0.08)
}));

// ----------------------------------------------------------------------

AuthorItem.propTypes = {
  author: PropTypes.object,
  index: PropTypes.number
};

function AuthorItem({ author, index }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar alt={author.name} src={author.avatar} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{author.name}</Typography>
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary'
          }}
        >
          <Box component={Icon} icon={heartFill} sx={{ width: 16, height: 16, mr: 0.5 }} />
          0xb1f5fa4b0960036582d2ab67f7452793306f4bcb
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary'
          }}
        >
          <Box component={Icon} icon={trophyFilled} sx={{ width: 16, height: 16, mr: 0.5 }} />
          {fShortenNumber(author.favourite)}
        </Typography>
        <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary'
            }}
          >
            for 2 years
          </Typography>
      </Box>
    </Stack>
  );
}

export default function AppTopAuthors() {
  const displayAuthor = orderBy(AUTHORS, ['favourite'], ['desc']);

  return (
    <Card>
      <CardHeader title="New Token Locks" />
      <Stack spacing={3} sx={{ p: 3 }}>
        {displayAuthor.map((author, index) => (
          <AuthorItem key={author.name} author={author} index={index} />
        ))}
      </Stack>
    </Card>
  );
}
