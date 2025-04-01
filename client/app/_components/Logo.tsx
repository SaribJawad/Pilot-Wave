import { PiFinnTheHumanFill } from "react-icons/pi";

interface ILogoProps {
  textColor?: string;
  iconColor?: string;
}

function Logo({ iconColor = "#ffffff", textColor = "#ffffff" }: ILogoProps) {
  return (
    <div className="flex items-center  gap-2">
      <PiFinnTheHumanFill size={28} color={iconColor} />
      <h1 className="text-xl font-bold" style={{ color: textColor }}>
        PilotWave
      </h1>
    </div>
  );
}

export default Logo;
