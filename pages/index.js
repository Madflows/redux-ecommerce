import { useSelector } from "react-redux";
import SignIn from "../components/SignIn";
import Layout from "../components/shared/Layout";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Layout>
          <HomePage />
        </Layout>
      ) : (
        <SignIn />
      )}
    </>
  );
}

const HomePage = () => {
  return (
    <div className="bg-yellow-500 h-[600px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-900 text-2xl font-bold">Featured Items</h2>
      </div>
    </div>
  );
};
