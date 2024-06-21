
import SolarPowerChart from "../components/SolarPowerChart";

import Device from "../components/Device";
import MyDevice from "../components/MyDevice";
import SolarEnergyFlow from "../components/SolarEnergyFlow";

export default function MonitorPage() {

  return (
    <div className="w-full">
      <MyDevice />
      <Device/>
      <SolarEnergyFlow />
      <SolarPowerChart />
    </div>
  );
}
