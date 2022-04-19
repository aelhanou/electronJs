import React, { FC } from "react";


export const Input: FC<any> = ({ setFilialeName, filialeName, label }) => {

    return (
        <div className="mb-6">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-500 "
            >
                {label}
            </label>
            <input
                type="text"
                id="email"
                value={filialeName}
                onChange={(e) => setFilialeName(e.target.value)}
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                placeholder={label}
            />
        </div>

    )
}