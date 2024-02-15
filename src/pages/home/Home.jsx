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
      <div className='text-center mt-5'>
        <h1>Spartan</h1>
      </div>
      <div className='text-center mt-2'>
        <h1 className='left-aligned'>Fitness</h1>
      </div>

      <div className='background'>
        <div className='jumbotron jumbotron-fluid text-center'>
          <div className='container'>
            <h1 className='display-4'>Welcome to Spartan Fitness</h1>
            <p className='lead'>We are a fitness center that offers a variety of services to help you reach your fitness goals. Our services include personal training, group fitness classes, and a variety of fitness equipment. We are open 24/7 and are located in the heart of Sparta, the mightiest city in all of Greece!</p>
          </div>
        </div>
      </div>
      {/* <img src='https://i.pinimg.com/originals/9c/11/fc/9c11fc1f2ce992c7a69b9e2986f438f5.jpg' alt='home' /> */}
    </div>
  );
};

export default Home;
