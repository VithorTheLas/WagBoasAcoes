import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import HomePage from "./pages/HomePage";
import QuemSomosPage from "./pages/QuemSomosPage";
import ComoFuncionaPage from "./pages/ComoFuncionaPage";
import ComoSurgiuPage from "./pages/ComoSurgiuPage";
import ContatoPage from "./pages/ContatoPage";
import { FormData } from "./services/form-api";

function App() {
  const sendFormInfo = async (formData: FormData) => {
    const FORM_LINK = import.meta.env.VITE_FORM_BOLD_LINK;
    const res = await fetch(FORM_LINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(res);
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/como-funciona" element={<ComoFuncionaPage />} />
        <Route path="/como-surgiu" element={<ComoSurgiuPage />} />
        <Route
          path="/contato"
          element={<ContatoPage sendForm={sendFormInfo} />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    )
  );

  return (
    <div className="bg-custom-blue w-screen and min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
