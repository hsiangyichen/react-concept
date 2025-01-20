import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../Comment/Comment";

function CommentList() {
  const [comments, setComments] = useState([]);
  const apiKey = "2fd44cef-a6cf-4990-8681-5203521948e0";

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const allCommentsResponse = await axios.get(
          `https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=${apiKey}`
        );
        setComments(allCommentsResponse.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    getAllComments();
  }, [apiKey]);

  const handleLike = async (commentId) => {
    try {
      const getLikesResponse = await axios.put(
        `https://unit-2-project-api-25c1595833b2.herokuapp.com/comments/${commentId}/like?api_key=${apiKey}`
      );

      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, likes: getLikesResponse.data.likes }
            : comment
        )
      );
    } catch (error) {
      console.error("Error liking the comment:", error);
    }
  };

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          comment={comment.comment}
          likes={comment.likes}
          onLike={() => handleLike(comment.id)}
        />
      ))}
    </div>
  );
}

export default CommentList;
