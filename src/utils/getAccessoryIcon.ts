import AccelerationIcon from "../assets/icons/Acceleration";
import PeopleIcon from "../assets/icons/People";
import EnergyIcon from "../assets/icons/Energy";
import ForceIcon from "../assets/icons/Energy";
import SpeedIcon from "../assets/icons/Speed";
import HybridIcon from "../assets/icons/Hybrid";

export const getAccessoryIcon = (type: string) => {
  switch (type) {
    case "acceleration":
      return AccelerationIcon;
    case "speed":
      return SpeedIcon;
    case "turning_diameter":
      return ForceIcon;
    case "eletric_motor":
      return HybridIcon;
    case "eletric_motor":
      return EnergyIcon;
    case "seats":
      return PeopleIcon;
    default:
      return AccelerationIcon;
  }
};
