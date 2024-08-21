import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const HomepageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header
        theme="homepage"
        className="absolute left-1/2 z-10 w-full -translate-x-1/2 py-5 sm:py-10"
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomepageLayout;
