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
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/como-funciona" element={<ComoFuncionaPage />} />
        <Route path="/como-surgiu" element={<ComoSurgiuPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="*" element={<NotFoundPage />} />
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
