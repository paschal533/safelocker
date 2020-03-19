import React, { useCallback } from 'react';
import app from './Firebase';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input'; 
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment'; 
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
 

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
     '& > *': {
      margin: theme.spacing(2),
      //width: 200,
    },
  },
  avatar: {
     display: 'block',
     marginRight: 'auto',
     marginLeft: 'auto',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

const SignUp = ({ history }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };


  const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value,password.value);
        history.push("/user");
    } catch (error) {
      alert(error);
    }
  }, [history]);
  return(
      <div>
           <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSignUp}>
              <Avatar src="/broken-image.jpg" className={classes.avatar}  />
              <h1>SignUp</h1>
              <TextField id="standard-basic" label="enter your email" name="email" type="email" />
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                name="password"
                type="password"
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
          </FormControl>


              <Button variant="contained" color="primary" type="submit" className="btn" >
              SignUp
          </Button>
        </form>
        
      </div>
    );
};

export default withRouter(SignUp);