import { useRef, useState, lazy, Suspense, useEffect, useId } from "react";
import styles from "./Select.module.scss";

const Dropdown = lazy(() => import("./Dropdown/Dropdown"));

const Select = ({
    variant,
    title,
    icon,
    options,
    defaultValue,
    placeholder,
    onChange,
    size,
    name
}) => {
    const [value, setValue] = useState(defaultValue ?? options[0]);
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const ignoreBlur = useRef(false);
    const id = useId()

    const triggerDropdown = () => {
        setDropdownOpened(!dropdownOpened);
    };

    const handleBlur = () => {
        if (ignoreBlur.current) return;
        setDropdownOpened(false);
    };

    const handleChange = (option) => {
        // Simulate native event
        onChange &&
            onChange({
                target: { value: option.value, name, },
            });
        setDropdownOpened(false);
    };

    const handleSelect = (option) => {
        ignoreBlur.current = false;
        setValue(option);
        setDropdownOpened(false);
        handleChange(option);
    };

    return (
        <div
            className={`${styles.selectWrapper} ${styles[variant]} ${styles[size]}`}
            onClick={triggerDropdown}
        >
            {title && <span className={styles.selectTitle}>{title}</span>}
            <div className={styles.size}>
                <input
                    className={styles.selectInput}
                    id={id}
                    readOnly={true}
                    value={value?.label}
                    placeholder={placeholder}
                    onBlur={handleBlur}
                />
                {dropdownOpened && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Dropdown
                            options={options}
                            ignoreBlur={ignoreBlur}
                            currentValue={value}
                            onSelect={handleSelect}
                        />
                    </Suspense>
                )}
            </div>
            <div className={styles.icon}>{icon && icon}</div>
        </div>

    );
};

export default Select;