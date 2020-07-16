import React, { useContext, useState, useEffect } from "react";
import { uploudingContext } from "../Context/TaskListContext";

function TaskForm(props) {
  const { addTask, EditTask, editItem} = useContext(uploudingContext);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [pages, setPages] = useState("");

  // handling events

  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleGenre = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };

  const handlePages = (e) => {
    e.preventDefault();
    setPages(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(author, title, genre, pages);
      setAuthor("");
      setTitle("");
      setGenre("");
      setPages("");
    } else {
      EditTask(author, title, genre, pages, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setAuthor(editItem.author);
      setTitle(editItem.title);
      setGenre(editItem.genre);
      setPages(editItem.pages);
    } else {
      setAuthor("");
      setTitle("");
      setGenre("");
      setPages("");
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleAuthor}
        value={author}
        type="text"
        className="task-input"
        placeholder="Please, write the name of the author"
        required
      />
      <input
        onChange={handleTitle}
        value={title}
        type="text"
        className="task-input"
        placeholder="Please, write your favourite title"
        required
      />
      <input
        onChange={handleGenre}
        value={genre}
        type="text"
        className="task-input"
        placeholder="Genre"
        required
      />
      <input
        onChange={handlePages}
        value={pages}
        type="text"
        className="task-input"
        placeholder="Pages"
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Save" : "Please add your book =)"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
