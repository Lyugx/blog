import "./posts.css"
import Post from "../post/Post";
import Post_one from "../post/Post_one";
import Post_two from "../post/Post_two";
import Post_three from "../post/Post_three";
import Post_four from "../post/Post_four";
import Post_five from "../post/Post_five";

export default function Posts() {
  return (
    <div className='posts'>
        <Post/>
        <Post_one/>
        <Post_two/>
        <Post_three/>
        <Post_four/>
        <Post_five/>
    </div>
  )
}
