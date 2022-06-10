import React from 'react';


const Home = () => {
  const NextButton = () => {
    return (
      <div>
        <div className="next_page">
          <ul>
            <li className="next">
              <div className='a'/>  
            </li>
          </ul>
        </div>  
      </div>
    )
  };

  return (
    <React.StrictMode>
      <div className='home-container /'>
        <div className='home-body'>
          <div className='left-content'>
            <div className='left-content-heading'>
              <h1>
                <span className='red-text'>/ </span>Mario <br/>Castro<span className='red-text'>_</span> 
                <p className='sub-text'>
                  JavaScript React HTML5 CSS SCSS Python Express MongoDB MySQL <br/> Full-stack Developer<br/> 
                </p>
              </h1>
            </div>
          </div>
          <div className='center-content'>
            <h3>- Web-Developer, evolving <ins>OUR</ins> online experience -</h3>
          </div>
          <div className='right-content'>
          </div>
        </div>
        <div className='home-footer'>
          <NextButton/>
        </div>
      </div>
    </React.StrictMode>
  )
};

export default Home;