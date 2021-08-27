import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
import windowsFilled from '@iconify/icons-ant-design/windows-filled';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box, Card, Rating, CardHeader, Typography, Stack } from '@material-ui/core';
// utils
import { fCurrency, fShortenNumber } from '../../../utils/formatNumber';
//
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

const APPLICATIONS = [
  {
    name: 'Yoda - ETH',
    system: 'Liquidity $122k',
    price: 0,
    rating: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
    review: faker.datatype.number(),
    shortcut: '/static/icons/unknown-token.png'
  },
  {
    name: 'Yoda - ETH',
    system: 'Liquidity $122k',
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    rating: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
    review: faker.datatype.number(),
    shortcut: '/static/icons/unknown-token.png'
  },
  {
    name: 'Yoda - ETH',
    system: 'Liquidity $122k',
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    rating: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
    review: faker.datatype.number(),
    shortcut: '/static/icons/unknown-token.png'
  },
  {
    name: 'Yoda - ETH',
    system: 'Liquidity $122k',
    price: 0,
    rating: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
    review: faker.datatype.number(),
    shortcut: '/static/icons/unknown-token.png'
  },
  {
    name: 'Yoda - ETH',
    system: 'Liquidity $122k',
    price: 0,
    rating: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
    review: faker.datatype.number(),
    shortcut: '/static/icons/unknown-token.png'
  }
];

// ----------------------------------------------------------------------

ApplicationItem.propTypes = {
  app: PropTypes.object
};

function ApplicationItem({ app }) {
  const theme = useTheme();
  const { shortcut, system, price, rating, review, name } = app;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      
      <img src={shortcut} alt={name} width={40} height={40} />

      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">{name}</Typography>
        <Stack direction="row" alignItems="center" sx={{ mt: 0.5, color: 'text.secondary' }}>
          <Typography variant="caption" sx={{ ml: 0.5, mr: 1 }}>
            0xb1f5fa4b0960036582d2ab67f7452793306f4bcb
          </Typography>
        </Stack>
      </Box>

      <Stack alignItems="flex-end" sx={{ pr: 3 }}>
      
        <Typography variant="caption" sx={{ mt: 0.5, color: 'text.primary' }}>
          $121k (99%)
        </Typography>
        <Typography variant="caption" sx={{ mt: 0.5, color: 'text.secondary' }}>
          for 2 years
        </Typography>
      </Stack>
    </Stack>
  );
}

export default function AppTopRelated() {
  return (
    <Card>
      <CardHeader title="New Liquidity Locks" />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {APPLICATIONS.map((app) => (
            <ApplicationItem key={app.name} app={app} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}
