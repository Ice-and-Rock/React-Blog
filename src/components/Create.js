const Create = () => {
  return (
    <div className="create">
      <h2>Create a new blog...</h2>
      <form>
        <label>Blog title :</label>
        <input type="text" required />
        <label>Blog body :</label>
        <textarea required></textarea>
        <label>Blog author :</label>
        <select>
          <option value="Nick">Nick</option>
          <option value="Becs">Becs</option>
        </select>
        <button>Add blog!</button>
      </form>
    </div>
  );
};

export default Create;
