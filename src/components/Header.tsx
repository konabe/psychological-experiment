import "./Header.css";

export type HeaderProps = {
  onClick: () => void;
  subTitle: string;
};

function Header({ onClick, subTitle }: HeaderProps) {
  return (
    <header className="header">
      <span onClick={onClick}>オープン心理学実験</span>
      <span style={{ marginLeft: "10px" }}>{subTitle}</span>
    </header>
  );
}

export default Header;
