import { Link } from "react-router-dom";

const Dropdown = ({ items, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-full left-0 mt-2 w-56 bg-neutral-700 z-50
             before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2
             rounded-md shadow-xl"
        >
            <div className=" flex flex-col">
                {items?.map((item, index) => (
                    <Link
                        key={`item-${index}-${item.href}`}
                        to={item.href}
                        onClick={onClose}
                        className="w-full"
                    >
            <span
                className="block w-full p-3 text-sm
                           text-gray-400
                           hover:text-white hover:bg-neutral-900
                           transition-all duration-300"
            >
                {item.label}
            </span>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Dropdown;
