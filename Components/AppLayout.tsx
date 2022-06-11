import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh" border="1px solid lightgreen">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px" border="1px solid red">
        {children}
      </Box>
    </Box>
  );
};
export default AppLayout;
