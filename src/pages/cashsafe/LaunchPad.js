import { Icon } from '@iconify/react';
import { capitalCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clockFill from '@iconify/icons-eva/clock-fill';
import checkMark from '@iconify/icons-eva/checkmark-fill';
import roundReceipt from '@iconify/icons-ic/round-receipt';
import closeFill from '@iconify/icons-eva/close-fill';
// material
import { Container, Grid, Tab, Box, Tabs, Stack, Button } from '@material-ui/core';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { ILOList } from '../../components/cashsafe/launchpad/list';
import { BlogPostsSearch } from '../../components/_dashboard/blog';
import { PATH_CASHSAFE } from '../../routes/paths';

const DATALIST = [
  {
    name: 'VEmpire Gamer Token Presale',
    position: 'VGT + BNB',
    iconUrl: 'unknown-token.png',
    coverUrl: 'cover_1.jpg',
    collected: '150 BNB',
    softcap: '2000 BNB',
    hardcap: '3000 BNB',
    status: 'upcoming'
  },
  {
    name: 'VEmpire Gamer Token Presale',
    position: 'VGT + USDT',
    iconUrl: 'unknown-token.png',
    coverUrl: 'cover_2.jpg',
    collected: '150 USDT',
    softcap: '2000 USDT',
    hardcap: '3000 USDT',
    status: 'live'
  },
  {
    name: 'VEmpire Gamer Token Presale',
    position: 'VGT + BNB',
    iconUrl: 'unknown-token.png',
    coverUrl: 'cover_3.jpg',
    collected: '150 BNB',
    softcap: '2000 BNB',
    hardcap: '3000 BNB',
    status: 'success'
  },
  {
    name: 'VEmpire Gamer Token Presale',
    position: 'VGT + BUSD',
    iconUrl: 'unknown-token.png',
    coverUrl: 'cover_4.jpg',
    collected: '150 BUSD',
    softcap: '2000 BUSD',
    hardcap: '3000 BUSD',
    status: 'failed'
  },
  {
    name: 'VEmpire Gamer Token Presale',
    position: 'VGT + BNB',
    iconUrl: 'unknown-token.png',
    coverUrl: 'cover_5.jpg',
    collected: '150 BNB',
    softcap: '2000 BNB',
    hardcap: '3000 BNB',
    status: 'live'
  }
];

export default function LaunchPad() {
  const [currentTab, setCurrentTab] = useState('Upcoming');
  
  const ACCOUNT_TABS = [
    {
      value: 'Upcoming',
      icon: <Icon icon={clockFill} width={20} height={20} />,
      component: <ILOList data={DATALIST} status="upcoming"/>
    },
    {
      value: 'Live',
      icon: <Icon icon={roundReceipt} width={20} height={20} />,
      component: <ILOList data={DATALIST} status="live"/>
    },
    {
      value: 'Success',
      icon: <Icon icon={checkMark} width={20} height={20} />,
      component: <ILOList data={DATALIST} status="success"/>
    },
    {
      value: 'Failed',
      icon: <Icon icon={closeFill} width={20} height={20} />,
      component: <ILOList data={DATALIST} status="failed"/>
    }
  ];

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Page title="Cashsafe | LaunchPad">
      <Container>
        <Grid item xs={12} mb={3}>
          <HeaderBreadcrumbs heading="LaunchPad"/>
        </Grid>

        <Stack mb={2} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch />
          <Button
            size="medium"
            variant="contained"
            component={RouterLink}
            to={PATH_CASHSAFE.newlaunchpad}
          >
            Create
          </Button>
        </Stack>

        <Stack spacing={5}>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChangeTab}
          >
            {ACCOUNT_TABS.map((tab) => (
              <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
            ))}
          </Tabs>

          {ACCOUNT_TABS.map((tab) => {
            const isMatched = tab.value === currentTab;
            return isMatched && <Box key={tab.value}>{tab.component}</Box>;
          })}
        </Stack>
      </Container>
    </Page>
  );
}
