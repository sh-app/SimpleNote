import React from 'react';
import SessionFormContainer from '../session/sessionform_container';

export default class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.redirect();
  }

  redirect(){
    if (this.props.session.currentUser) {
      hashHistory.push("/home");
    }
  }

  render() {
    return(
      <div className='splash group'>
        <section className='splash-form-container'>
          <SessionFormContainer/>
        </section>
        <video autoPlay muted loop id="bgvid">
          <source src={window.mediaAssets.splashvideo} type="video/mp4"/>
        </video>



      </div>
    );
  }

}
