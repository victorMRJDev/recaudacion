import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { AuthLayout } from "./layout/AuthLayout";
const EmplacamientoLayout = lazy(() =>
  import("./emplacamiento/layout/EmplacamientoLayout")
);
import { SolicitudPlacas } from "./emplacamiento/pages/SolicitudPlacas";
import { Home } from "./emplacamiento/pages/Home";
import { AddPadron } from "./emplacamiento/pages/AddPadron";
import { PadronVehicular } from "./emplacamiento/pages/PadronVehicular";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        <Route
          path="/emplacamiento"
          element={
            <Suspense
              fallback={
                <div className="flex h-screen w-full items-center justify-center bg-background">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
              }
            >
              <EmplacamientoLayout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/emplacamiento/solicitudes"
            element={<SolicitudPlacas />}
          />
           <Route
            path="/emplacamiento/add-solicitud"
            element={<AddPadron />}
          />
          <Route
            path="/emplacamiento/padronVehicular"
            element={<PadronVehicular />}
          />
        </Route>

        <Route path="/" element={<Navigate to={"/auth"} />} />
        <Route path="*" element={<Navigate to={"/auth"} />} />
      </Routes>
    </BrowserRouter>
  );
};
