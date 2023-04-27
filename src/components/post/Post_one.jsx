import "./post.css"

export default function Post() {
  return (
 <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2023/02/14/04/39/volunteer-7788809_960_720.jpg"
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
            The Dangers of White Pollution: A Growing Concern in Our Modern World
        </span>
        <hr />
        <span className="postDate">1 month ago</span>
      </div>
      <p className="postDesc">
        plastic pollution can have adverse effects on human health. Chemicals used in the production of plastic can leach into the environment, contaminating water sources and food supplies. Exposure to these toxins has been linked to various health problems, including cancer, developmental delays, and reproductive issues.      </p>
 
    </div>
  )
}
