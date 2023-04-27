import "./post.css"

export default function Post() {
  return (
 <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_960_720.jpg"
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
                  The Sweet Bliss of Desserts: How Indulging in Sweets Can Make You Happy
              </span>
        <hr />
        <span className="postDate">20 days ago</span>
      </div>
      <p className="postDesc">
              There's something about desserts that just brings joy to people's faces. Maybe it's the sugar rush or the decadent flavors, but there's no denying that indulging in a sweet treat can make you feel happy.
          </p>
 
    </div>
  )
}