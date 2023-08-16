import React, { useState } from "react";

export const AppContext = React.createContext({
  signUpModal: false,
  setSignUpModal() {
    // Do nothing.
  },
});

const AppContextProvider = ({ children }) => {
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        signUpModal,
        setSignUpModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
