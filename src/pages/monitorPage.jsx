
import SolarPowerChart from "../components/SolarPowerChart";
import Device from "../components/Device";
import MyDevice from "../components/MyDevice";
import SolarEnergyFlow from "../components/SolarEnergyFlow";

export default function MonitorPage() {

  return (
    <div className="w-[calc(100vw-110px)] h-[calc(100vh-98px)] overflow-auto">
      <MyDevice />
      {/* <Device/> */}
      <SolarEnergyFlow />
      <SolarPowerChart />
    </div>
  );
}
