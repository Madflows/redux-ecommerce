import { useSelector } from "react-redux";
import SignIn from "../components/SignIn";
import Layout from "../components/shared/Layout";
import Featured from "../components/Featured";

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
    <div className="bg-gradient-to-b from-yellow-500 to-white h-[600px]">
      <div className="max-w-6xl mx-auto">
        <Featured />
      </div>
    </div>
  );
};
