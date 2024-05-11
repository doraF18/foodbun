import React from 'react'
import classes from './StarRating.module.css';

export default function StarRating({stars, size}) {
    const styles = {
        width: size + 'px',
        height: size + 'px',
        marginRight: size/6 + 'px',
    };

    function Star({number}){
        const halfNumber = number - 0.5;
        return stars >= number? 
        (<img src= "/star-full.svg" style={styles} alt={number}/>)
        :stars >= halfNumber ?(
            <img src="/start-ha;f.svg" style={styles} alt= {number}></img>
        ) : (
            <img src="/star-empty.svg" style={styles} alt={number} />

        );
        
    }
  return (
    <div lassName={classes.rating}>
      {
        [1,2,3,4,5].map(number=> (
            <Star key ={number} number = {number} />
        ))
      }
    </div>
  )
}
StarRating.defaultProps = {
    size:18,
};
