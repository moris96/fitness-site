// import React from 'react';

// const Home = () => {
//   return (
//     <div id='home' className='container-fluid p-0'>
//       <h1 className='text-center mt-5'>Spartan</h1>
//       <br />
//       <h1 className='text-center mt-2'>Fitness</h1>
//       {/* <img src='https://www.worldhistory.org/uploads/images/1225.jpg' alt='home' /> */}
//     </div>
//   );
// };

// export default Home



import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div id='home' className='container-fluid p-0'>

      <div className='title-logo-container'>
        <div className='text-center mt-5'>
          <h1 className='title1'>Spartan</h1>
        </div>
        <div className='text-center mt-2'>
          <h1 className='left-aligned title2'>Fitness</h1>
        </div>
      </div>

      <div className='background'>
        <div className='jumbotron jumbotron-fluid text-center'>
          <div className='container'>
          <br /><br /><br />
            <h3 className='description'>We only accept the most serious of warriors to help train them to be the next generation of Spartans. We also offer classes in art, science, and philosophy to help strengthen the mind as well as body.</h3>
          </div>
        </div>
      </div>
      {/* <img src='https://i.pinimg.com/originals/9c/11/fc/9c11fc1f2ce992c7a69b9e2986f438f5.jpg' alt='home' /> */}
    </div>
  );
};

export default Home;
