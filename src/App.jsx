import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [btn, setBtn] = useState(10);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(rec => rec.json())
      .then(data => setData(data));
  }, []);

  const newFilterData = data.filter((item) => {
      return item.name.common?.toLowerCase().includes(value.toLowerCase());
  })

  return (
    <>

      <div className="box">
        <input data-aos="fade-down-right" data-aos-duration="1500" className='input' type="search" placeholder='Search' onChange={((e) => setValue(e.target.value))} />
        <button data-aos="fade-down-left" data-aos-duration="1500" className='btn'>Submit</button>
      </div>



      <ul className='list'>
        {
          newFilterData?.slice(0, btn).map((item, index) => {

            return (
              <li data-aos="flip-right" data-aos-duration="1500" key={index} className='card item'>
                <img className='img  card-img-top' src={item.flags.svg} alt={item.flags.alt} width={350} height={250} />
                <h3 className='card-title'>State: {item.name.common.length > 15 ? item.name.common.slice(0, 18) + "..." : item.name.common}</h3>
                <p className='card-text'>The capital: {item.capital}</p>
                <button className='btn btn-primary'>in detail</button>
              </li>
            );
          })
        }
      </ul >
      <div className="btn-box">
        <button onClick={() => setBtn(btn + 10)}>yana</button>
        <button onClick={() => setBtn(btn - 10)}>Ozaytirish</button>
      </div>
    </>
  );
};

export default App;