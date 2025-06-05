/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */
import Header from "../components/header";
import Main from "../components/main";
export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
