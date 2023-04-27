import "./post.css"

export default function Post() {
  return (
 <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2023/04/14/09/03/shopping-street-7924559_960_720.jpg"
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
            Exploring the Vibrant Shopping Streets of the City
            </span>
        <hr />
        <span className="postDate">28 days ago</span>
      </div>
      <p className="postDesc">
        As I continued down the street, I noticed the beautiful architecture of the buildings. The ornate details and colorful facades added to the charm of the street, making it an Instagram-worthy spot.

        The shopping street was a perfect representation of the city's culture and lifestyle. From trendy boutiques to local artisans, the street had something for everyone. It was a place where people of all ages and backgrounds could come together, socialize, and shop.</p>
 
    </div>
  )
}