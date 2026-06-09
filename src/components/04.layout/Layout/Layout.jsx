import { LayoutWrapper } from "./Layout.styles";
import { Header, Footer } from "components/03.organisms";

const Layout = ({children}) => {
    return (
        <LayoutWrapper>
            <Header />
            {children}
            <Footer />
        </LayoutWrapper>
    )
};

export {Layout};