import React from 'react';
import Rating from './components/Rating';
import ExampleToggleForm from './components/ExampleToggleForm';

function PageRating() {
  return (
    <>
      <h2>PageComponents</h2>
      <h3>Rating</h3>
      <Rating score={0} />
      <Rating score={1} />
      <Rating score={2} />
      <Rating score={3} />
      <Rating score={4} />
      <Rating score={5} />
      <h3>ExampleToggleForm</h3>
      <ExampleToggleForm />
    </>
  );
}
export default PageRating;
