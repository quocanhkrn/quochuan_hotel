import { fahkwang500 } from "@/components/ui/fonts";
import { getPolicy } from "@/lib/apis";
import Markdown from "react-markdown";
import classes from "./policy.module.css";

const Policy = async (): Promise<JSX.Element> => {
  const policy: string = await getPolicy();

  return (
    <section className="container max-w-screen-lg pb-10">
      <hr />
      <h1
        className={`${fahkwang500.className} pt-10 text-center text-2xl text-dark-blue`}
      >
        ĐIỀU KHOẢN & CHÍNH SÁCH
      </h1>
      <Markdown className={`${classes.policy} container`}>{policy}</Markdown>
    </section>
  );
};

export default Policy;
