import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import moment from 'moment';


const SAFETY_TIME = 10;

class LoginButton extends React.Component{

  constructor(props){

    super(props);

    this.state = {
        loginStatus: false,
        buttonDisabled: '',
        loading: false
    }

    this.jwt = null;
    this.tokenExpire = null;

    this.buttonHandler = this.buttonHandler.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  componentDidMount(){

    var self = this;

    window.addEventListener("message", (event) => {
                                                if( event.data.access_token ) {
                                                    self.jwt = event.data;
                                                    self.tokenExpire = jwtDecode(event.data).exp;
                                                    self.setState({
                                                      loginStatus: true,
                                                      buttonDisabled: 'disabled',
                                                      loading: false
                                                    });
                                                    self.props.onStatusChange(self.state.loginStatus);
                                                }
                                              }, false);
  }


  getToken(){
    if (this.jwt) {
      var time = moment().unix();
        if (time > this.tokenExpire - SAFETY_TIME) {
            return this.jwt.access_token;
        }
        //token expire
        else {
          return null;
        }
    }
    return null;
  }

  buttonHandler(e) {
      if (!this.state.loginStatus) {
          this.setState({
              loading: true,
              buttonDisabled: 'disabled'
          });
          var popup = window.open('https://tlvauth.azurewebsites.net/logintoken.html', '_blank' ,false );


            popup.addEventListener('unload', function(event) {
                popup.alert("Thank you for visiting W3Schools!");
              });


          // popup.addEventListener("unload", popup.alert("visiting W3Schools!"));
      }
      else {
          //log out
            this.jwt = null;
            this.tokenExpire = null;
            this.setState({
                loginStatus: false
            });
            this.props.onStatusChange(this.state.loginStatus);

      }

  }


  render(){

    const loaderClass = classNames('fa',
        { 'fa-spinner': this.state.loading },
        { 'fa-spin': this.state.loading });


    return(
        <button className={this.props.className}
                onClick={this.buttonHandler}
                disabled={this.state.buttonDisabled}>
            <span className="spanBtnText">{this.props.text}</span>
            <span className="spinner"><i className={loaderClass}></i></span>
        </button>
    );
  }
}
LoginButton.propTypes = {
  onStatusChange: PropTypes.func.isRequired
};

LoginButton.defaultProps = {
  text: 'Log In',
  className: "btn btn-primary btn-lg"
};

export default LoginButton;