import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

import * as auth from '../auth/auth';

const styles = theme => ({
    buttonLeftSpace: {
      marginLeft: 20
    },
    textRight:{
      textAlign: 'right',
      paddingRight: 20
    }
});

class Header extends Component{
      componentDidMount(){
            console.log(auth.isAuthenticated());
      }
      withLogin(){
           const {classes} = this.props;
           return(
             <Grid item xs={6} className={classes.textRight}>
               <Link to="/signup">
                <Button color="primary" variant="contained" className={classes.buttonLeftSpace}>Hi, Himanshu</Button>
               </Link>
             </Grid>
           )
      }
      withoutLogin(){
         const {classes} = this.props;
         return(
           <Grid item xs={6} className={classes.textRight}>
             <Link to="/login">
               <Button color="primary" variant="contained" className={classes.buttonLeftSpace}>login</Button>
              </Link>
              <Link to="/signup">
               <Button color="primary" variant="contained" className={classes.buttonLeftSpace}>sign up</Button>
              </Link>
           </Grid>
         )
      }
      render(){
          const {classes} = this.props;
          let privateElements = this.props.auth.authenticated.auth;
          console.log(this.props);
          return(
            <header>
              <AppBar>
                <Toolbar>
                 <Grid container direction="row" justify="center" alignItems="center" spacing={24}>
                   <Grid item xs={6}>
                      <Typography color="inherit">
                         Resume Builder
                      </Typography>
                   </Grid>
                   {privateElements? this.withLogin(): this.withoutLogin()}
                 </Grid>
                </Toolbar>
              </AppBar>
            </header>
          )
      }
}

function mapStatetoProps({auth}){
   return {auth};
}
export default connect(mapStatetoProps)(withStyles(styles)(Header));
//export default withStyles(styles)(Header);
