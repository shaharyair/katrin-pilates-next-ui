export const useIsDev = () => {
  return {
    isDev: process.env.NODE_ENV === "development",
  };
};
