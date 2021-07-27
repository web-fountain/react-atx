import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';


function add(x, y: number): number {
  return x + y;
}


const App = () => {
  const [isLiked, setLike] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string | null>(null);
  const unUsedString = 'unUsedString';

  useEffect(() => {
    setTimeout(() => {
      const sum = add(2, 5);
      setGreeting(`Hola Amigos! The Sum is ${sum}`);
    }, 2000);
  }, []);

  const myNumber = 5;

  return (
    <>
    <h1>ReactJS TypeScript ESLint Babel</h1>
    <h1>Webpack brings them all together!</h1>
    <p>{greeting}</p>
    {isLiked
      ? 'You liked this!'
      : (
        <button onClick={() => setLike(true)}>
        Like
        </button>
        )
    }
    <p>My favorite number is {myNumber}</p>
    </>
  );
};


render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-entry')
);
