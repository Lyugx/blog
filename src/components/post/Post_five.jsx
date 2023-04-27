import "./post.css"

export default function Post() {
  return (
 <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2023/03/28/02/53/lagoon-7882110_960_720.jpg"
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
                  The Serenity of Blue Skies and Seas: How Nature's Beauty Can Lift Your Mood
              </span>
        <hr />
        <span className="postDate">20 days ago</span>
      </div>
      <p className="postDesc">
              There's something about the combination of blue skies and seas that instantly puts you at ease. The tranquil colors and vast expanse of the ocean can have a calming effect on the mind and soul.
          </p>
 
    </div>
  )
}