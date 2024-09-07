import { Metadata } from "next";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "ADMIN AREA | QUỐC HUẤN HOTEL",
};

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Providers>{children}</Providers>;
};

export default AdminLayout;
