import React, { useEffect, useState } from "react";
import { getPosts, getPostsByUserId } from "services/getPosts";
import { title, postsContainer } from "../styles/PostView.module.css";
import { TextField, Button } from "@mui/material";
import Post from "components/Post";

export default function PostsView() {
  const [posts, setPosts] = useState(null);
  const [postsById, setPostsById] = useState(null);

  useEffect(() => {
    getPosts()
      .then((r) => setPosts(r))
      .catch((error) => console.error(error.message));
    return () => {
      getPosts();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = e.target.id.value;

    getPostsByUserId(id)
      .then((posts) => setPostsById(posts))
      .catch((error) => alert(error.message));

    e.target.reset();
  };

  return (
    <>
      <h2>Posts</h2>

      <form onSubmit={handleSubmit}>
        <h3 className={title}>Find posts by user's id</h3>
        <TextField
          type="number"
          id="id"
          label="Enter number from 1 to 10"
          variant="outlined"
          size="small"
          margin="normal"
        />{" "}
        <br />
        <Button type="submit" variant="contained" size="medium">
          Find
        </Button>
      </form>

      <div className={postsContainer}>
        {postsById
          ? postsById.map((post) => <Post key={post.id} props={post} />)
          : posts && posts.map((post) => <Post key={post.id} props={post} />)}
      </div>
    </>
  );
}
