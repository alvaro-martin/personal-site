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
import { HomeWrapper } from "./Home.styles";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
    return (
        <HomeWrapper>
            <ScrollToTop smooth={true} />
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