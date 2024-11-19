import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="flex flex-col bg-gray-400 min-h-screen h-full">
      <Header />
      <LoginForm />
    </div>
  );
}

export default App;
