import React from 'react';

import './App.css';

import Expense from './component/Expense'
import CommentWrraper from './UI/CommentWrraper';
const comment = [
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/62/62',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
];

function App() {

  return (
    <div className="App">
      <div className='cont-wrap'>
     {comment.map((el) =>{
       return <Expense img={el.author} date={el.date} text={el.text} key={Math.random().toString()} />
     })}
     </div>

    </div>
  );
}

export default App;
