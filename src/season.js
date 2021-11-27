import React from 'react'
import PropTypes from 'prop-types'
import Summer from './summer'

const getseason = (latitude , day)=>
{
if(day>2 && day<9 ){
    return latitude>0? 'summer ':'winter'
}
else
{
    return  latitude>0? 'winter':'summer'  
}

}
const getlattitude = (latitude1) =>
{
if(latitude1>0)
{
    return 'Southern Hemisphere '
}
else{
    return 'Northern Hemisphere'
}
}

function season(props) {
    const value = getseason(props.l1 , new Date().getMonth())
    const text = value === "winter" ? "Weather = Cold  " : "Weather = Hot "
    const getlat = getlattitude(props.l1)

    return (
       <div>
<Summer t1 = {text} t2 = {getlat}  />
       </div>
    )
}



export default season

