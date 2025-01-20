function Comment({ name, comment, likes, onLike }) {
  return (
    <div>
      <p>{name}</p>
      <p>{comment}</p>
      <p>Likes: {likes}</p>
      <button onClick={onLike}>Like</button>
    </div>
  );
}

export default Comment;
