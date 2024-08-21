import Navbar from "./navbar/navbar";

const Header = ({
  className,
  theme,
}: {
  className: string;
  theme: "homepage" | "sidepage";
}): JSX.Element => {
  return (
    <header className={className}>
      <Navbar theme={theme} />
    </header>
  );
};

export default Header;
