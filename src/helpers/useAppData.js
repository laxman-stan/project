import { useContext } from "react";
import { AppData } from "../App";

export default function useAppData(){

    return useContext(AppData)
}

