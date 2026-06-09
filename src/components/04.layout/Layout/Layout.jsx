import { Header, Footer } from "components/03.organisms";

const Layout = ({children}) => {
    return (
        <div className="flex flex-col w-full h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    )
};

export {Layout};