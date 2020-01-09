import React, { useState } from "react";

const useDropdown = (label, defaultValue, options) => {
    const [state, setState] = useState(defaultValue);

    const DropDown = () => (
        <label htmlFor={label}>
            {label.toUpperCase()}

            <select
                id={label}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
                disabled={!options.length}
            >
                <option value="">All</option>
                {options.map(i => (
                    <option key={i}>{i}</option>
                ))}
            </select>
        </label>
    );

    return [state, DropDown, setState];
};

export default useDropdown;
