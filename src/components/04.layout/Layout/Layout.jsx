import { Header, Footer } from "components/03.organisms";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col w-full min-h-screen overflow-x-clip">
            <Header />
            <main id="main-content" className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export { Layout };
