import { FC } from "react";
import HomePage from "../../HomePage";
import HomePageComponentOne from "./components/HomePageComponentOne/HomePageComponentOne";
import HomePageComponentThree from "./components/HomePageComponentThree/HomePageComponentThree";
import HomePageComponentTwo from "./components/HomePageComponentTwo/HomePageComponentTwo";

const SubHomeComponent: FC = () => {
  const getContext = () => {
    return (
      <>
        <HomePageComponentOne />
        <HomePageComponentTwo />
      </>
    );
  };

  return (
    <>
      <HomePage state={0} context={getContext()} />
    </>
  );
};
export default SubHomeComponent;
