import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Madridismo Corner</span>
        {/* <span className="headerTitleLg">Worth Fighting</span> */}
      </div>
      <img
        className="headerImg"
        src="https://losduenosdelbalontv.com/tv2/wp-content/uploads/2021/05/58461a50e73635e07bfad651e713302e-scaled.jpg"
        alt=""
      />
    </div>
  );
}
