import { 
    About, 
    ContactMe, 
    Hero, 
    Portfolio, 
    Services, 
    NewProject, 
    Skills, 
    Research,
    Awards,
    Journey
} from "components/03.organisms";
import { ScrollToTop } from "components/02.molecules";
import { HomeWrapper } from "./Home.styles";
const Home = () => {
    return (
        <HomeWrapper>
            <ScrollToTop />
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Services />
            <NewProject />
            <Portfolio />
            <Research />
            <Awards />
            <ContactMe />
        </HomeWrapper>
    )
};

export {Home};