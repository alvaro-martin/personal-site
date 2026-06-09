import {BsSunFill, BsMoonFill} from 'react-icons/bs';

const Toggle = ({isActive, onToggle}) => {
    return (
        <div className="flex flex-row justify-between items-center w-[13rem] h-[4rem] text-[3rem] text-[color:var(--color-fontColor5)] mx-12">
            <BsSunFill />
            <div
                className="w-[50px] min-w-[50px] h-[25px] rounded-[25px] border border-[color:var(--color-fontColor5)] mx-auto flex"
                onClick={onToggle}
            >
                <div
                    className={`h-[21px] w-[21px] border border-[color:var(--color-fontColor5)] mt-[1px] bg-[color:var(--color-fontColor5)] rounded-full transition-transform duration-100 cursor-pointer ${isActive ? 'translate-x-[26px]' : 'translate-x-[1px]'}`}
                />
            </div>
            <BsMoonFill />
        </div>
    )
};

export {Toggle};