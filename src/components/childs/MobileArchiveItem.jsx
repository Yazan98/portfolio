import React from 'react';
import {DESCRIPTION_COLOR, PRIMARY_COLOR} from "../../info/ColorUtils";

export default function MobileArchiveItem({ name, year, createdAt, builtWith, isOpenSource }) {
    return (
        <div className={"justify-center rounded-md border-2 p-4 text-black"}>
            <h2 style={{color: PRIMARY_COLOR}} className={"font-bold"}>{name} - {year}</h2>
            <h5 className={"text-xs"}>Created At : {createdAt}</h5>
            <h5 className={"text-xs"}>{isOpenSource ? "Open Source Project" : "Closed Source Project"}</h5>
            <p style={{color: DESCRIPTION_COLOR}} className={"mt-2 text-sm"}>{builtWith}</p>
        </div>
    );
}
