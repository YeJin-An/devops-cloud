import Counter from '../pages/components/Counter';

function PageCounter() {
  return (
    <>
      <Counter initial={10} color={'lightblue'} />
      <Counter initial={10} color={'lightpink'} />
      <Counter initial={10} color={'lightgreen'} />
    </>
    // 프레그 먼트?? -> Fragment
  );
}

export default PageCounter;
