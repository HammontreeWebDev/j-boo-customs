import { useState } from "react";
import { useNavigate } from "react-router";

const useNavigation = () => {
  const [isPageChanging, setIsPageChanging] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (navigateTo) => {
    setIsPageChanging(true);

    setTimeout(() => {
      setIsPageChanging(false);
      navigate(navigateTo);
    }, 700);
  };

  return { isPageChanging, handleNavigate };
};

export default useNavigation;