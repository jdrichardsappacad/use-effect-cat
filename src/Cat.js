import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { colours } from './colours';

const Cat = () => {
  const history = useHistory();
  const [colourNum, setColourNum] = useState(0);
  console.log('num', colourNum);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColourNum((prevNum) => (prevNum === 4 ? 0 : prevNum + 1));
    }, 2000);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <div
      className='cat-container'
      style={{
        backgroundColor: colours[colourNum],
        transition: 'background-color 4s'
      }}
    >
      <h1>Cat Component</h1>
      <button onClick={() => history.push('/')}>Home</button>
    </div>
  );
};
export default Cat;
