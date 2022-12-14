import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import PaginaCadastro from "./pages/Cadastro";
import PaginaLogIn from "./pages/LogIn";
import PaginaHome from "./pages/Home";
import { getItem } from "./utils/storage";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

function RotasProtegidas({ redirectTo }) {
    const autenticado = getItem("token");

    return autenticado ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function RotasPrincipais() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<PaginaLogIn />} />
                <Route path="/usuario" element={<PaginaCadastro />} />
                <Route element={<RotasProtegidas redirectTo="/" />}>
                    <Route path="/home" element={<PaginaHome />} />
                </Route>
            </Routes>
            <GlobalStyles />
        </ThemeProvider>
    );
}
