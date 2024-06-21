
import SolarPowerChart from "../components/SolarPowerChart";
import MyDevice from "../components/MyDevice";
import SolarEnergyFlow from "../components/SolarEnergyFlow";

export default function MonitorPage() {

  return (
    <div className="w-full">
      <MyDevice />
      <SolarEnergyFlow />
      <SolarPowerChart />
    </div>
  );
}
