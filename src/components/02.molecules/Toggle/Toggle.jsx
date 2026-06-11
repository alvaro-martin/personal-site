import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Toggle = ({ isActive, onToggle }) => {
    return (
        <div className="flex flex-row items-center justify-center gap-2 text-text-highlight">
            <BsSunFill aria-hidden="true" className="size-[25px] shrink-0" />
            <button
                type="button"
                role="switch"
                aria-checked={isActive}
                aria-label={isActive ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={onToggle}
                className="w-[50px] min-w-[50px] h-[25px] rounded-full border-2 border-text-highlight flex items-center p-[1px] transition-colors transition-background duration-slow cursor-pointer focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2"
            >
                <span
                    className={`block w-[21px] h-[21px] rounded-full bg-text-highlight transition-transform duration-fast ease-default ${isActive ? 'translate-x-[25px]' : 'translate-x-0'}`}
                    aria-hidden="true"
                />
            </button>
            <BsMoonFill aria-hidden="true" className="size-[25px] shrink-0" />
        </div>
    );
};

export { Toggle };
