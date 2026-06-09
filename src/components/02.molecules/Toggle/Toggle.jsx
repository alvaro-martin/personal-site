import { IconToogleWrapper, Notch, ToggleWrapper } from "./Toggle.styles";
import {BsSunFill, BsMoonFill} from 'react-icons/bs';

const Toggle = ({isActive, onToggle}) => {
    return (
        <IconToogleWrapper>
            <BsSunFill />
            <ToggleWrapper onClick={onToggle}>
                <Notch isActive={isActive} />
            </ToggleWrapper>
            <BsMoonFill />
        </IconToogleWrapper>
    )
};

export {Toggle};