import React from 'react';
import PropTypes from 'prop-types';
import logo from './images/btc-logo.png';
import { BitcoinQR } from '@ibunker/bitcoin-react'
import '@ibunker/bitcoin-react/dist/index.css'
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Paper, Grid, Divider, Typography, Tabs, Tab, Button, Icon } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'600px'
  },
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item >
          <Typography variant="h1" component="h2" gutterBottom>
            Bitcoin React
          </Typography>
        </Grid>
        <Grid item >
          <Typography variant="subtitle1" gutterBottom>
            Reactjs library for simplified Bitcoin payment user interaction.
          </Typography>
        </Grid>
        <Grid item >
          <img className="Logo" src={logo} alt="Bitcoin Logo" height={200}/>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<GitHubIcon />}
            href="https://github.com/IsmaelTerreno/bitcoin-react"
          >
            View on Github
          </Button>
        </Grid>
        <Grid item >
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Showcases"
          >
            <Tab label="QR code only" {...a11yProps(0)} />
            <Tab label="With title" {...a11yProps(1)} />
            <Tab label="Custom Amount" {...a11yProps(2)} />
            <Tab label="Heart Animation" {...a11yProps(3)} />
            <Tab label="Donate bitcoin to support this project" {...a11yProps(4)} />
          </Tabs>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={12}>
          <TabPanel value={value} index={0}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Qr code only
              </Typography>
              <BitcoinQR
                bitcoinAddress="bc1qr3ja0feke2d7zg8jr0sjhr4aw5ppezt7n954u7"
                message="Donate bitcoin to support this project"
              />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Qr code with title
              </Typography>
              <BitcoinQR
                bitcoinAddress="bc1qr3ja0feke2d7zg8jr0sjhr4aw5ppezt7n954u7"
                message="Donate bitcoin to support this project"
                title="Donate bitcoin"
              />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Custom amount with <strong className="ClickablePrice">0.1 BTC</strong>
              </Typography>
              <BitcoinQR
                amount={0.1}
                bitcoinAddress="bc1qr3ja0feke2d7zg8jr0sjhr4aw5ppezt7n954u7"
                message="Donate bitcoin to support this project"
              />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Heart animation
              </Typography>
              <BitcoinQR
                amount={0.1}
                bitcoinAddress="bc1qr3ja0feke2d7zg8jr0sjhr4aw5ppezt7n954u7"
                message="Donate bitcoin to support this project"
                showHeartDonation
              />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Did this help you for anything useful? Donate to the author ;)
              </Typography>
              <BitcoinQR
                amount={0.1}
                bitcoinAddress="bc1qr3ja0feke2d7zg8jr0sjhr4aw5ppezt7n954u7"
                message="Donate bitcoin to support this project"
                showHeartDonation
              />
            </Paper>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

export default App
