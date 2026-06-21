import {
    About,
    Hero,
    Portfolio,
    Services,
    NewProject,
    Skills,
    Research,
    Awards,
    Journey,
    Languages
} from "components/03.organisms";
import { ScrollToTop } from "components/02.molecules";

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <ScrollToTop />
            <Hero />
            <About />
            <Journey />
            <Languages />
            <NewProject />
            <Portfolio />
            <Research />
            <Awards />
        </div>
    )
};

export { Home };
