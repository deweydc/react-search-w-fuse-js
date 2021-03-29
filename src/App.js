import React, { useState } from "react";
import "./App.css";
import style from './App.css'
import books from "./Shared/books.json";
import Card from './Card/Card';
import SearchBar from './Search';
import Fuse from "fuse.js";



function App() {
  const [data, setData] = useState(books);
  //set state of data to books json file

  const searchData = (pattern) => {
    if (!pattern) {
      setData(books);
      return;
    }
    //takes pattern as a argument and returns a func that check if pattern true set state to books json

    const fuse = new Fuse(data, {
      keys: ["title", "author"],
    });

    //? check what this is doing

    const result = fuse.search(pattern);
    //? check what this is doing search for pattern and store in results

    const matches = [];

    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
    }
  };
  // if the length of result is 0 show empty array else take the results and for each result find the matches and push each result to matches array

  return (
    <div>
      <h1 className="Title">My Favorite books</h1>
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
      />

      {/* in container map over data in books.json and return each item showing as a card. then spread props from each item and add a ket from the title */}
      <div className="Container">
        {data.map((item) => (
          <Card {...item} key={item.title} />
          // todo Learn more on spread operator  
        ))}
      </div>
    </div>
  );
}

export default App;
