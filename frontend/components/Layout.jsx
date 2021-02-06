import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div>
      <Nav />
      <div className="fit max-w-7xl mx-auto px-6">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;