
import SolarPowerChart from "../components/SolarPowerChart";

import MyDevice from "../components/MyDevice";
export default function MonitorPage() {

  return (
    <div className="w-full">
      <p>MonitorPage</p>
      <MyDevice />
      <SolarPowerChart />
    </div>
  );
}
