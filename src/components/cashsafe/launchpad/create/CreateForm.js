import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { LoadingButton } from '@material-ui/lab';
import { experimentalStyled as styled, makeStyles } from '@material-ui/core/styles';
import { InputAdornment, Card, Slider, Grid, Stack, Button, MenuItem , TextField, Typography} from '@material-ui/core';
// utils
import fakeRequest from '../../../../utils/fakeRequest';
// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}));

function valuetext(value) {
  return `${value}°C`;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

// ----------------------------------------------------------------------

export default function CreateForm() {
  const { enqueueSnackbar } = useSnackbar();

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required('Token address is required'),
    description: Yup.string().required('Description is required'),
    content: Yup.string().min(1000).required('Content is required'),
    cover: Yup.mixed().required('Cover is required')
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      content: '',
      cover: null,
      tags: ['Logan'],
      publish: true,
      comments: true,
      metaTitle: '',
      metaDescription: '',
      metaKeywords: ['Logan']
    },
    validationSchema: NewBlogSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await fakeRequest(500);
        resetForm();
        setSubmitting(false);
        enqueueSnackbar('Post success', { variant: 'success' });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    }
  });

  const classes = useStyles();

  const { errors, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <LabelStyle>Token Address</LabelStyle>
                  <TextField
                    fullWidth
                    label="Enter your token address..."
                    {...getFieldProps('title')}
                    error={Boolean(touched.title && errors.title)}
                    helperText={touched.title && errors.title}
                  />

                  <TextField id="select" label="Buyers participate with" select>
                    <MenuItem value="BNB">BNB</MenuItem>
                    <MenuItem value="BUSD">BUSD</MenuItem>
                    <MenuItem value="USDT">USDT</MenuItem>
                  </TextField>

                  <TextField
                    fullWidth
                    type="number"
                    label="How many tokens are up for presale?"
                    {...getFieldProps('title')}
                    value='0'
                    endAdornment={<InputAdornment position="end">BNB</InputAdornment>}
                    error={Boolean(touched.title && errors.title)}
                    helperText={touched.title && errors.title}
                  />
                  
                  <Grid container>
                    <Grid item xs={12} sm={6} pb={1} pr={1}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Softcap"
                          {...getFieldProps('title')}
                          value='0'
                          endAdornment={<InputAdornment position="end">BNB</InputAdornment>}
                          error={Boolean(touched.title && errors.title)}
                          helperText={touched.title && errors.title}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} pb={1}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Hardcap"
                          {...getFieldProps('title')}
                          value='0'
                          endAdornment={<InputAdornment position="end">BNB</InputAdornment>}
                          error={Boolean(touched.title && errors.title)}
                          helperText={touched.title && errors.title}
                        />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12} sm={6} pb={1} pr={1}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Minimum Contribution Limit"
                          {...getFieldProps('title')}
                          value='0'
                          endAdornment={<InputAdornment position="end">BNB</InputAdornment>}
                          error={Boolean(touched.title && errors.title)}
                          helperText={touched.title && errors.title}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} pb={1}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Maximum Contribution Limit"
                          {...getFieldProps('title')}
                          value='0'
                          endAdornment={<InputAdornment position="end">BNB</InputAdornment>}
                          error={Boolean(touched.title && errors.title)}
                          helperText={touched.title && errors.title}
                        />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <LabelStyle sx={{width: '100%', textAlign: 'center' }}>Presale rate</LabelStyle>
                    <LabelStyle sx={{width: '100%', marginTop: '0px!important', textAlign: 'center' }}>1 ETH = 0.1 RISE</LabelStyle>
                  </Grid>

                  <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid sx={{width:'50%', minWidth: '100px'}}>
                      <LabelStyle sx={{width: '100%', textAlign: 'center' }}>Uniswap listing rate</LabelStyle>
                      <LabelStyle sx={{width: '100%', marginTop: '0px!important', textAlign: 'center' }}>1 ETH = 0.1 RISE</LabelStyle>
                      <Slider
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={50}
                      />
                    </Grid>
                  </Grid>

                  <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid sx={{width:'50%', minWidth: '100px'}}>
                      <LabelStyle sx={{width: '100%', textAlign: 'center', marginBottom: '40px' }}>Percent of raised ETH used for liquidity</LabelStyle>
                      <Slider
                        defaultValue={80}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-always"
                        step={1}
                        valueLabelDisplay="on"
                        min={30}
                        max={100}
                      />
                    </Grid>
                  </Grid>

                  <LabelStyle>Additional Information</LabelStyle>
                  
                  <Grid container>
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        fullWidth
                        label="Enter logo link"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        fullWidth
                        label="Enter cover image link"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                      </Grid>
                  
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        fullWidth
                        label="Enter website link"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                      </Grid>
                  
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        fullWidth
                        label="Enter github link"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                      </Grid>
                  
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        fullWidth
                        label="Enter twitter link"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                      </Grid>
                  
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        fullWidth
                        label="Enter reddit link"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                      </Grid>
                  
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        fullWidth
                        label="Enter telegram link"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                      </Grid>
                  
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        fullWidth
                        label="Enter project description"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                      </Grid>
                  
                    <Grid item xs={12} sm={12} pr={1}>
                      <TextField
                        fullWidth
                        label="Any update you want to provide to participantsf"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                      />
                      </Grid>
                  </Grid>
                  
                  <LabelStyle>Timings</LabelStyle>
                  
                  <Grid container>
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        id="datetime-local"
                        label="Presale Start Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ width: '100%'}}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        id="datetime-local"
                        label="Presale End Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                  
                  <Grid container>
                    <Grid item xs={12} sm={6} pr={1} pb={1}>
                      <TextField
                        id="datetime-local"
                        label="Liquidity Lockup Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ width: '100%'}}
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </Card>

              <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
                <LoadingButton fullWidth type="submit" variant="contained" size="large" loading={isSubmitting}>
                  Approve
                </LoadingButton>
                <LoadingButton fullWidth type="submit" variant="contained" size="large" disabled loading={isSubmitting}>
                  Create Presale
                </LoadingButton>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </>
  );
}
