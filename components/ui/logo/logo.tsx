import Logomark from "./logomark";
import Logotype from "./logotype";

type LogoProps = {
  colorClassName?: string;
};

const Logo = ({ colorClassName }: LogoProps) => {
  return (
    <div className={`flex h-full gap-3 ${colorClassName}`}>
      <Logomark />
      <Logotype />
    </div>
  );
};

export default Logo;
