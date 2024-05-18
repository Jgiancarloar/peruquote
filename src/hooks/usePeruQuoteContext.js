import { useContext } from "react";
import { PeruQuoteContext } from "../context/PeruQuoteContext";

const usePeruQuoteContext = () => useContext(PeruQuoteContext);

export default usePeruQuoteContext;