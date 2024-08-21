import Logomark from "./logomark";
import Logotype from "./logotype";

const Logo = ({ colorClassName }: { colorClassName: string }) => {
  return (
    <div className={`flex h-full gap-3 ${colorClassName}`}>
      <Logomark />
      <Logotype />
    </div>
  );
};

export default Logo;
