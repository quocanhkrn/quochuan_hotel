import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const ChildPagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header theme="sidepage" className="bg-white py-5 drop-shadow-xl" />
      {children}
      <Footer />
    </>
  );
};

export default ChildPagesLayout;
