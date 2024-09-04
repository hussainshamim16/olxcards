// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react'
import './App.css'
import Card from './box.jsx'

const App = () => {
  const cardData = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556228578-567ba127e37f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/50924/pexels-photo-50924.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/397978/pexels-photo-397978.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
    {
      image: 'https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Iphone product',
      description: 'Xorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem exercitationem optio illum eaque asperiores, expedita, maiores veritatis, tempora error corporis magni commodi hic voluptates nobis necessitatibus modi pariatur magnam.'
    },
   
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}

    </div>
  );
};

export default App
