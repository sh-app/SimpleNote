import React from 'react';
import SessionFormContainer from '../session/sessionform_container';

export default class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='splash'>
        <section className='splash-form-container'>
          <SessionFormContainer/>
        </section>

      </div>
    );
  }

}
