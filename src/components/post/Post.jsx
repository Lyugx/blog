import "./post.css"

export default function Post() {
  return (
 <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2023/03/19/07/34/car-7862030_960_720.jpg"
        alt=""
          />    
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">
            Life
          </span>
        </div>
        <span className="postTitle">
           A Serene View of the City Lights
        </span>
        <hr />
        <span className="postDate">2 months ago</span>
      </div>
      <p className="postDesc">
        The lights from the buildings and streetlamps cast a soft glow across the city, creating a warm and cozy ambiance that made me feel at ease. Through my car window, I could see the tall buildings and neon lights that added a charm and vibrancy to the city.
      </p>
 
    </div>
  )
}
