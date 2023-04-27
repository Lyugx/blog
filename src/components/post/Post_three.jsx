import "./post.css"

export default function Post() {
  return (
 <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2023/04/16/11/23/bridge-7929999_960_720.jpg"
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
           A Perspective on Brooklyn Bridge: A Symbol of New York's Enduring Spirit
            </span>
        <hr />
        <span className="postDate">28 days ago</span>
      </div>
      <p className="postDesc">
        Brooklyn Bridge is an iconic landmark of New York City, recognized worldwide for its grandeur and historical significance. As I walked across the bridge, I was struck by the incredible views of the city skyline and the East River.The bridge is a testament to the enduring spirit of New York City. It was completed in 1883, after over a decade of construction, and remains a symbol of the city's resilience and determination.
          </p>
 
    </div>
  )
}