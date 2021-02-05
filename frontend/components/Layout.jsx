import Nav from "./Nav";

const Layout = ({children}) => {
  return (
    <div>
      <Nav />
      <div className="max-w-md mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout;