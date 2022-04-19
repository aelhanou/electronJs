import React, { FC } from "react";



export const TeaxtArea: FC<any> = ({ filialeDescription, setFilialeDescription }) => {


    return (
        <>
            <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-500 "
            >
                Your Description
            </label>
            <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg border border-gray-300  "
                placeholder="Leave a Description..."
                value={filialeDescription}
                onChange={(e) => setFilialeDescription(e.target.value)}
            />
        </>
    )
}


