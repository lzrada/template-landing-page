import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-14 flex-1">{children}</main>
    </div>
  );
};
export default Layout;
