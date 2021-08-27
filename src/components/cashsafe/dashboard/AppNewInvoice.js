import faker from 'faker';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// material
import { useTheme } from '@material-ui/core/styles';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer
} from '@material-ui/core';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import MoreMenuButton from '../../MoreMenuButton';

// ----------------------------------------------------------------------

const INVOICES = [
  {
    name: 'VEmpire Gamer Token',
    softcap: '2000 BNB',
    hardcap: '3000 BNB',
    collected: faker.finance.amount(),
    status: 'in_progress'
  },
  {
    name: 'VEmpire Gamer Token',
    softcap: '2000 BNB',
    hardcap: '3000 BNB',
    collected: faker.finance.amount(),
    status: 'completed'
  },
  {
    name: 'VEmpire Gamer Token',
    softcap: '2000 BNB',
    hardcap: '3000 BNB',
    collected: faker.finance.amount(),
    status: 'out_of_date'
  },
  {
    name: 'VEmpire Gamer Token',
    softcap: '2000 BNB',
    hardcap: '3000 BNB',
    collected: faker.finance.amount(),
    status: 'completed'
  },
  {
    name: 'VEmpire Gamer Token',
    softcap: '2000 BNB',
    hardcap: '3000 BNB',
    collected: faker.finance.amount(),
    status: 'in_progress'
  }
];

// ----------------------------------------------------------------------

export default function AppNewInvoice() {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title="Token Presales" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Token Name</TableCell>
                <TableCell>Collected</TableCell>
                <TableCell>Softcap</TableCell>
                <TableCell>Hardcap</TableCell>
                <TableCell>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {INVOICES.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.collected} BNB</TableCell>
                  <TableCell>{row.softcap}</TableCell>
                  <TableCell>{row.hardcap}</TableCell>
                  <TableCell>
                    <Label
                      variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                      color={
                        (row.status === 'in_progress' && 'warning') ||
                        (row.status === 'out_of_date' && 'error') ||
                        'success'
                      }
                    >
                      {sentenceCase(row.status)}
                    </Label>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View All
        </Button>
      </Box>
    </Card>
  );
}
