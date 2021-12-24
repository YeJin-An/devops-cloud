function TopNav({ changePageName }) {
  return (
    <ul>
      <li>
        <a onClick={() => changePageName('about')}>About</a>
      </li>
      <li>
        <a>Counter</a>
      </li>
    </ul>
  );
}

export default TopNav;
