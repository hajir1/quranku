import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
const QueryControls = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
export default QueryControls;
