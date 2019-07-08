import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props){
  return(
    <div>
    <h1>{props.selectedTicket.names}-{props.selectedTicket.location}</h1>
    <h2>Submitted {props.selectedTicket.formattedWaitTime}</h2>
    <h4>{props.selectedTicket.issue}</h4>
    </div>
  );
}

TicketDetail.propTypes={
  selectedTicket: PropTypes.object
};
export default TicketDetail;
