import AppSidebar from "./AppSidebar";
import Navbar from "./Navbar";  

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>
      <div className="pt-12 h-full flex bg-gray-100">
        <AppSidebar />

        <main className="transition-all duration-300 h-full overflow-y-auto p-4 bg-gray-100 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};


export default Layout;