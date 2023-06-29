import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Nick");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // history.go(-1)
      navigate('/')
    });

  };

  return (
    <div className="create">
      <h2>Create a new blog...</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body :</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nick">Nick</option>
          <option value="Becs">Becs</option>
        </select>
        { !isPending && <button>Add blog!</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
