/**
 *  Title: hacker stories
 *  Author: Robin Wieruch
 *  Modified By: Brooke Taylor
 *  Date: 10/24/2023
 *  Description: App Component
 */

// import * as React from 'react';

/* 
const numbers = [1,2,3,4];

const exponentialNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(exponentialNumbers)
*/

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]


function App() {

  // const title = 'React';


  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
      
      <hr />

      <List />

    </div>
  );
}



function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}




function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default App;

