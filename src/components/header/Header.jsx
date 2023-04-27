import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2023/03/17/16/14/silhouette-7858977_960_720.jpg"
        alt=""
      />
    </div>
  )
}
