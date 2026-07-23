import { useParams } from "react-router-dom";

import TitleSecBnF from "./TitleSecBnF";
import TitleSecEHR from "./TitleSecEHR";
import TitleSecHT from "./TitleSecHT";
import TitleSecAI from "./TitleSecAI";

export default function TitleSectionSwitcher() {
  const { industry } = useParams<{ industry: string }>();

  if (industry === "cloud-finops-ai") return <TitleSecAI />;
  if (industry === "banking-and-finance") return <TitleSecBnF />;
  if (industry === "ehr-and-pms") return <TitleSecEHR />;
  if (industry === "high-tech") return <TitleSecHT />;

  return null;
}