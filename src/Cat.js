import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { colours } from './colours';

const Cat = () => {
  const history = useHistory();
  const [colourNum, setColourNum] = useState(0);
  const [statusChange, setStatusChange] = useState(
    localStorage.getItem('catStatus') || '418'
  );
  const [status, setStatus] = useState('');

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColourNum(prevNum => (prevNum === 4 ? 0 : prevNum + 1));
    }, 2000);

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem('catStatus', statusChange);
  }, [statusChange]);

  // useEffect(() => {
  //   //check for alphabet
  //   const regex = /^[A-Z]+$/i;
  //   if (status.match(regex)) alert('Incorrect Input');
  //   setStatus('');
  //   setStatusChange('404');
  // }, [status]);

  const handleSubmit = e => {
    e.preventDefault();
    setStatusChange(status);
    setStatus('');
  };

  return (
    <div
      className='cat-container'
      style={{
        backgroundColor: colours[colourNum],
        transition: 'background-color 4s',
      }}
    >
      <h1>Cat Status</h1>
      <button onClick={() => history.push('/')}>Home</button>
      <div className='image-container'>
        <img src={`https://http.cat/${statusChange}`} alt='200' />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='cStatus'>
          <input
            id='cStatus'
            onChange={e => setStatus(e.target.value)}
            placeholder='find new status'
            value={status}
          />
        </label>
        <button type='submit'>Change Status</button>
      </form>
    </div>
  );
};
export default Cat;
