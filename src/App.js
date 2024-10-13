import React, {
  useEffect,
  useState,
} from "react";
import CardList from "./components/CardList";
import "tachyons";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";

const App = () => {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        setFilteredAlbums(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    const filteredList = albums.filter((item) => {
      console.log(item.title.includes(userId));
      return (
        item.title.includes(title)
      );
    });
    console.log(filteredAlbums);
    setFilteredAlbums(filteredList);
  }, [title, userId]);

  const titleChangeHandler = (event) => {
    const input = event.target.value;
    setTitle(input);
  };

  const userIdChangeHandler = (event) => {
    const input = event.target.value.toString();
    setUserId(input);
  };

  return (
    <div className="tc">
      <Header title={"Albums By Chathura"} />
      <SearchBox
        placeholder={"Seach By Title"}
        onSearchTextChange={titleChangeHandler}
      />
      <SearchBox
        placeholder={"Seach By User ID"}
        onSearchTextChange={userIdChangeHandler}
      />
      <CardList albums={filteredAlbums} />
    </div>
  );
};
export default App;
