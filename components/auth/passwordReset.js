import React, { Component } from 'react'
import { connect } from 'react-redux'
import reg from '../../store/actions/regActions'

//import { NavLink }  from 'react-router-dom';
import {Container, Divider, Typography, Paper, Grid, TextField, Button, CssBaseline } from '@material-ui/core';



class Register extends Component {

state = {
  currentPassword: '',
  password: '',
 // role: 'sponsor'

}

handleChange =(e) => {
  this.setState({
    [e.target.id]: e.target.value

  })

}

handleConfirmPassword =(e) => {

    //  console.log('this is the event details'+ JSON.stringify(e.target));
   // this.setState({
    //  [e.target.id]: e.target.value
  
   // })
  


  }

handleCancel = (e) => {
    e.preventDefault();
    this.props.history.push('/');
}




handleSubmit =(e) => {
  e.preventDefault();
  this.props.authentication(this.state);


}

  render() {
    return (
        
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <br />
      <Typography variant="h6" align="center" gutterBottom>
          Password Reset
      </Typography>
	      <form onSubmit={this.handleSubmit} >

	      <TextField
		required
		id="currentPassword"
		label="Current Password"
        variant="outlined"
        fullWidth
	
		onChange={this.handleChange}
		margin="normal"
	      />
          <br/>

	       <TextField
		id="password"
		label="Password"
        variant="outlined"
        fullWidth
		
		type="password"
		onChange={this.handleChange}
		margin="normal"
	      />

	      <TextField
		id="confirmPassword"
		label="Confirm Password"
        variant="outlined"
        fullWidth
	
		type="password"
		onChange={this.handleConfirmPassword}
		margin="normal"
	      />

              

          <br />
          <br />

	       <Button variant="outlined" type='submit' fullWidth="true" size="medium" color="primary" onSubmit={this.handleSubmit}>
		  Register
	       </Button>

	      </form>

          <br />

          <Divider />

	      <Grid container spacing={0} direction="row" justify="center" alignItems="center">
		      <Typography  variant="overline" display="block" gutterBottom>
		       Cancel
		      </Typography> 
			<Grid item xs={12} sm={12}>
			  <Paper align="center" onClick={this.handleCancel}>
				Log In
			  </Paper>
			</Grid>

	     </Grid>

      </Container>
    </React.Fragment>


    )
  }
}


const mapDispatchToProps = (dispatch) => {

  return {
     authentication: (credentials) => dispatch(reg(credentials))
  }

}



export default connect(null, mapDispatchToProps)(Register)
