// import { useState } from 'react';
import { CafeInfo } from '../CafeInfo/CafeInfo';
import css from './App.module.css';

interface Votes {
  good: 0;
  neutral: 0;
  bad: 0;
}

export default function App() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
    </>
  );
}
