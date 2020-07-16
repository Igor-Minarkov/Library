import React, { createContext, useEffect, useState } from "react";
import uuid from "react-uuid";
export const Context = createContext({});

export const Provider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [isFlipped, setIsFlipped] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);
  const [editItem, setEditItem] = useState(null);
  const [dropdown, setDropdown] = useState("");

  // Search
  const filtered = tasks.filter((task) => task.author.toLowerCase().includes(search.toLocaleLowerCase()));
  const dropdowned = tasks.filter((task) => task.genre.includes(dropdown));

  // Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Flipping in the main component

  const Flip = () => {
    setIsFlipped(!isFlipped);
  };

  // Adding item
  const addTask = (author, title, genre, pages) => {
    setTasks([...tasks, { author, title, genre, pages, id: uuid() }]);
  };

  // Deleting item
  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Editing Item
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
    Flip();
  };

  const EditTask = (author, title, genre, pages, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { author, title, genre, pages, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };
  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const AllPosts = tasks.slice(indexOfFirstPost, indexOfLastPost);
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsOfFilters = dropdowned.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const uploudingContext = {
    tasks,
    addTask,
    DeleteTask,
    findItem,
    EditTask,
    editItem,
    Flip,
    isFlipped,
    setSearch,
    dropdown,
    filtered,
    currentPosts,
    currentPostsOfFilters,
    postsPerPage,
    paginate,
    setPostsPerPage,
    currentPage,
    setDropdown,
    search,
    AllPosts,
  };

  return (
    <Context.Provider value={uploudingContext}>
      {props.children}
    </Context.Provider>
  );
};

export const TaskListContextProvider = Provider;
export const uploudingContext = Context;
