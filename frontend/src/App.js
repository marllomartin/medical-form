import Layout from "./components/Layout";
import { DoctorContextProvider } from "./context/DoctorContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <DoctorContextProvider>
        <Layout />
      </DoctorContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
