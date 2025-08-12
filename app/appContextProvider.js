// app/providers/AppContextProvider.jsx
"use client";
import EnneagramEnglishQuestions from "@/app/data/enneagramEnglishQuestions";

import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [enn, setEnn] = useState(EnneagramEnglishQuestions);
  const value = { enn, setEnn };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}