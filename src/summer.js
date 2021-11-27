import React from 'react'
import PropTypes from 'prop-types'

function summer(props) {


    return (
        <div>
            ;<>
  {/* Hello world */}
  <div className="ui card">
    <div className="image">
      <img src="./{props.t3}"/>
    </div>
    <div className="content">
      <a className="header">{props.t1}</a>
      <div className="meta">
        <span className="date">Update Recently </span>
      </div>
      <div className="description">
       {props.t2}
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="user icon" />
       
      </a>
    </div>
  </div>
</>

        </div>
    )
}
export default summer

