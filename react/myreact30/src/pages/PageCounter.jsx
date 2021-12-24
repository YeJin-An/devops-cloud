import Counter from '../pages/components/Counter';

function PageCounter() {
  return (
    <>
      <h2>Counter</h2>
      <Counter initial={10} color={'lightblue'} />
      <Counter initial={10} color={'lightpink'} />
      <Counter initial={10} color={'lightgreen'} />
    </>
    // 프레그 먼트?? -> Fragment
  );
}

export default PageCounter;
