import React, {useState} from 'react';
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import config from './config.json'

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')

  const logout = () => {
    setIsAuthenticated(false)
    setToken('')
    setUser(null)
  }

  let twitterResponse = (e) => {
  }

  let facebookResponse = (r) => {
    const tokenBlob = new Blob([
      JSON.stringify({access_token: r.accessToken}, null, 2)],
      {type: 'application/json'})
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    }
    fetch (`http://localhost:4000/api/v1/auth/facebook`, options)
      .then(r => {
        const token = r.headers.get('x-auth-token')
        r.json().then(user => {
          if (token) {
            this.setState({isAuthenticated: true, user, token})
          }
        })
      })
  }

  let googleResponse = (e) => {
  }

  const onFailure = (error) => {
    alert(error)
  }

  let content = !!isAuthenticated ?
    (
      <div>
        <p>Authenticated</p>
        <div>
          {this.state.user.email}
        </div>
        <div>
          <button onClick={logout} className="button">Log Out</button>
        </div>
      </div>
    ) :
    (
      <div>
        {/*<TwitterLogin
          loginUrl="http://localhost:4000/api/v1/auth/twitter"
          onFailure={twitterResponse}
          onSuccess={twitterResponse}
          requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
        /><br /><br />*/}

        <FacebookLogin
          appId={config.FACEBOOK_APP_ID}
          autoLoad={false}
          fields="name, email, picture"
          callback={facebookResponse}
        /><br /><br />

        <div
          className="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>

        {/*<GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={googleResponse}
          onFailure={googleResponse}
        /><br /><br />*/}
      </div>
    )

  return (
    <div className="App">
      {content}
    </div>
  )
}

export default App;