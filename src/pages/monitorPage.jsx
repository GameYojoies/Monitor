
import SolarPowerChart from "../components/SolarPowerChart";

import Device from "../components/Device";
import MyDevice from "../components/MyDevice";
export default function MonitorPage() {

  return (
    <div className="w-full">
  
      <MyDevice />
    <Device/>
      <SolarPowerChart />
    </div>
  );
}
