import React , {Fragment} from 'react';

const Bar = ({ percent, stat }) => {
  return (
    <Fragment>
      <div className="bar" style={{ width: `${percent/1.4}%` }}></div>
      <div className="bartext"> {percent} {stat}</div>
      <div>.</div>
    </Fragment>
  )
}

export default Bar;
