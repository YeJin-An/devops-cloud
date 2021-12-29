import React from 'react';
import propTypes from 'prop-types';

const Children.propTypes ={
  name: propTypes.string
};

const Children = props => {
  return(
    <div>제 이름은 {props.name}입니다.</div>
  )
}
export default Children;