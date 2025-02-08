import { useState, useEffect } from "react";

function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const persistedValue = localStorage.getItem(key);
    if (persistedValue !== null) {
      try {
        return JSON.parse(persistedValue);
      } catch (e) {
        console.error("Error parsing localStorage key", key, e);
      }
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
