import styles from "./Dropdown.module.scss";
import { IoMdCheckmark } from "react-icons/io";

const Dropdown = ({ currentValue, options, ignoreBlur, onSelect, size }) => {
    const handleBtnMouseDown = () => {
        ignoreBlur.current = true;
    };

    return (
        <div
            className={`${styles.dropdown} ${styles[size]}`}
        >
            {options.map((o, i) => {
                const { label, value } = o;
                return (
                    <button
                        key={i}
                        className={styles.optionBtn}
                        onClick={() => onSelect(o)}
                        onMouseDown={handleBtnMouseDown}
                    >
                        <IoMdCheckmark className={value === currentValue.value ? styles.active : ""} />
                        <span title={label} className={styles.optionLabel}>
                            {label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default Dropdown;