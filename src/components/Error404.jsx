import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';



function Error404(props){
  return(
    <div>
      <img src={errorPic}/>
      <h2>The page {props.location.pathname} does exist!</h2>
      <h3>Would you like to return <Link to='/'>home</Link>instead?</h3>
    </div>
  );

}

Error404.propTypes = {
  location: PropTypes.object

};

export default Error404;
