import {
    About,
    Hero,
    Portfolio,
    Services,
    Skills,
    Research,
    Awards,
    Hobbies,
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
            <Portfolio />
            <Research />
            <Awards />
            <Hobbies />
        </div>
    )
};

export { Home };
