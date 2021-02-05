import { AuthProvider } from "../lib/auth";
import '../assets/main.css';

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}
export default App;
