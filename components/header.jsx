import img from "../images/chef-claude-icon.png";
export default function Header() {
  return (
    <>
      <header>
        <img src={img} alt="chef-claude-icon" className="headerimg" />
        <h1 className="header_text">Chef Claude</h1>
      </header>
    </>
  );
}
