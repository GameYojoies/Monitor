/** @format */

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      // notify
      "Notifications": "การแจ้งเตือน",
      "Device Name": "ชื่ออุปกรณ์",
      "Device Pin": "หมายเลขอุปกรณ์",
      "Device Type": "ประเภทอุปกรณ์",
      "Device Status": "สถานะอุปกรณ์",
      "Active": "ใช้งานอยู่",
      "Show All": "ทั้งหมด",
      "Error": "ข้อผิดพลาด",
      "Warning": "เตือนภัย",
      "Trouble Solved": "ได้รับการแก้ไข",
      "Date": "วันเวลา",
      "Status": "สถานะแจ้งเตือน",
      "Serial number": "หมายเลขอุปกรณ์",
      "Alarm Code": "รหัสแจ้งเตือน",
      "Reset": "รีเซ็ต",
      "Nodata": "ไม่มีข้อมูล",
      "Active": "ใช้งานอยู่",
      "Inactive": "ไม่ได้ใช้งานอยู่",
      "Normal": "ปรกติ",
      "Warning": "แจ้งเตือน",
      "Error": "ผิดพลาด",
      "System Alert": "แจ้งเตือนระบบ",
      "No Messages Available": "ไม่มีแจ้งเตือนระบบ",
      "Rows per page": "แถวต่อหน้า",



      "Username or email": "กรอกชื่อผู้ใช้ หรือ อีเมล",
      "Enter your password": "กรอกรหัสผ่าน",
      "Login now": "ลงชื่อเข้าใช้",
      "Visit Monitor Demo": "เดโมมอนิเตอร์",
      "Welcome to Your Monitoring":
        "ยินดีต้อนรับสู่การเฝ้าติดตามมอนิเตอร์ของคุณ",
      Monitor: "มอนิเตอร์",
      Report: "รายงานข้อมูล",
      Notification: "การแจ้งเตือน",
      User: "ผู้ใช้",
      "User Information": "ข้อมูลผู้ใช้",
      Username: "ชื่อผู้ใช้",
      "Birth Date": "วันเกิด",
      Gender: "เพศ",
      "Phone Number": "เบอร์โทรศัพท์",
      "E-mail": "อีเมล",
      "user name or email is required": "กรุณากรอกชื่อผู้ใช้หรืออีเมล",
      "password is required": "กรุณากรอกรหัสผ่าน",
      "password must contain number or alphabet":
        "รหัสผ่านจะต้องมีตัวเลขหรือตัวอักษร",
      "password must have at least 6 characters":
        "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",

      // Device
      DeviceSpan1: "อุปกรณ์ของฉัน",
      DeviceSpan2: "ชื่ออุปกรณ์",
      DeviceSpan3: "หมายเลขพินอุปกรณ์",
      DeviceSpan4: "โหลด",
      DeviceSpan5: "อินเวอร์เตอร์",
      DeviceSpan6: "แผงโซลาร์เซลล์",
      DeviceSpan7: "แบตเตอรี่",
      DeviceSpan8: "การไฟฟ้า",

      // Chart
      ChartSpan1: "แผนภูมิพลังงาน",
      ChartSpan2: "เลือกประเภท",
      ChartSpan3: "วัน",
      ChartSpan4: "เดือน",
      ChartSpan5: "ปี",
      ChartSpan6: "รวม",
      ChartSpan7: "พลังงาน (kWh)",
      ChartSpan8: "ชม.",
      ChartSpan9: "ค่าโหลดกำลังไฟฟ้าที่ใช้จริง",
      ChartSpan10: "การผลิตไฟฟ้าโซลาร์เซลล์ ทั้งหมดในวันนั้น",
      ChartSpan11: "วว-ดด-ปปปปป",
      ChartSpan12: "ดด-ปปปป",
      ChartSpan13: "ปปปป",
      ChartSpan14: "ขยายเข้า",
      ChartSpan15: "ขยายออก",
      ChartSpan16: "ตั้งค่าอีกครั้ง",
      ChartSpan17: "การใช้พลังงาน : ",

      // Chart Power
      ChartPSpan1: "พลังงานชาร์จ",
      ChartPSpan2: "วันนี้",
      ChartPSpan3: "กำลังไฟชาร์จ PV",
      ChartPSpan4: "รายละเอียด",
      ChartPSpan5: "กำลังไฟชาร์จ PV : ",

      // system details
      SystemDetailsSpan1: "ส่วนประกอบของระบบ",
      SystemDetailsSpan2: "ตัวชี้วัดของระบบ",
      SystemDetailsSpan3: "รายละเอียด",
      SystemDetailsSpan4: "แผงโซลาร์เซลล์",
      SystemDetailsSpan5: "วันที่เลือก",

      // load data
      load_percentage_des: "อัตราการใช้พลังงานโดยโหลด มักจะแสดงเป็นเปอร์เซ็นต์ของความจุทั้งหมด",
      load_half_ratio_des: "อัตราส่วนของโหลดที่ใช้งานอยู่กับความจุโหลดทั้งหมด มักจะแสดงเป็นเปอร์เซ็นต์",
      load_apparent_power_des: "พลังงานทั้งหมดที่โหลดใช้ คำนึงถึงทั้งองค์ประกอบพลังงานที่ใช้งานและไม่ใช้งาน",
      load_active_power_des: "พลังงานที่ใช้งานโดยโหลดที่เชื่อมต่อ มักจะวัดเป็นวัตต์ (W) หรือกิโลวัตต์ (kW)",
      output_voltage_des: "แรงดันเอาท์พุท ซึ่งมักจะวัดเป็นโวลต์ (V)",
      output_frequency_des: "ความถี่เอาท์พุท โดยทั่วไปจะวัดเป็นเฮิร์ตซ์ (Hz)",
      output_current_des: "กระแสไฟฟ้าที่ระบบหรือองค์ประกอบจ่ายไฟ",
      output_active_power_des: "พลังงานจริงเอาท์พุทของระบบมักจะวัดเป็นวัตต์ (W)",
      output_apparent_power_des: "ผลคูณของแรงดันและกระแสในวงจร AC ซึ่งมักจะวัดเป็นโวลต์-แอมป์ (VA)",
      total_power_output_day_des: "พลังงานไฟฟ้ารวมที่ระบบผลิตตลอดทั้งวัน",

      // inverter data details
      inverter_voltage_des: "แรงดันที่จ่ายโดยอินเวอร์เตอร์ซึ่งแปลงพลังงานจากกระแสตรงเป็นกระแสสลับ",
      inverter_frequency_des: "กระแสอินเวอร์เตอร์ แทนการส่งออกกระแสไฟฟ้าจากอินเวอร์เตอร์",
      inverter_current_des: "กระแสไฟฟ้าไหลผ่านอินเวอร์เตอร์ ซึ่งเป็นอุปกรณ์ที่แปลงกระแสตรง (DC) จากแผงโซลาร์เซลล์เป็นกระแสสลับ (AC) ที่สามารถใช้ในการจ่ายพลังงานให้กับอุปกรณ์ไฟฟ้าในระบบพลังงานแสงอาทิตย์",

      // battery data details
      battery_voltage_des: "ย่อมาจากแรงดันไฟฟ้าของแบตเตอรี่: ระดับแรงดันไฟฟ้าของแบตเตอรี่ที่เชื่อมต่อในระบบ",
      battery_discharge_current_des: "ปริมาณพลังงานที่ถูกปล่อยจากแบตเตอรี่ในวันนี้",
      charging_voltage_des: "แรงดันที่ใช้ในการชาร์จแบตเตอรี่หรือระบบเก็บพลังงานอื่น ๆ",
      battery_cells_id_des: "ปริมาณของหน่วยแบตเตอรี่ที่เชื่อมต่อในอนุกรมหรือแบบขนาน",
      charging_current_des: "กระแสไฟฟ้าที่ใช้ในการชาร์จแบตเตอรี่ โดยทั่วไปจะวัดเป็นแอมแปร์ (A) หรือกิโลแอมแปร์ (kA)",
      charging_power_des: "พลังงานที่ใช้ในการชาร์จแบตเตอรี่ โดยทั่วไปจะวัดเป็นวัตต์ (W) หรือกิโลวัตต์ (kW)",
      battery_capacity_soc_des: "ความจุของแบตเตอรี่ มักจะแสดงเป็นสถานะการชาร์จ (State of Charge หรือ SOC)",
      battery_capacity_query_des: "ย่อมาจากสถานะการชาร์จแบตเตอรี่: ความจุที่เหลือของแบตเตอรี่เป็นเปอร์เซ็นต์ของความจุรวมของมัน",
      battery_current_des: "การไหลของกระแสไฟฟ้าภายในแบตเตอรี่มักจะวัดเป็นแอมป์ (A)",

      // pv data details
      pv_voltage_des: "ย่อมาจากแรงดันเข้าของโซลาร์เซลล์แทนระดับแรงดันของแผงโซลาร์เซลล์หรือระบบโซลาร์เซลล์",
      pv_charging_current_des: "กระแสที่สร้างขึ้นโดยระบบโซลาร์เซลล์ (PV) ซึ่งโดยทั่วไปจะวัดเป็นแอมป์ (A)",
      pv_current_des: "กระแสไฟฟ้าที่ไหลผ่านโซลาร์เซลล์ (PV) เมื่อได้รับแสงแดด นั้นเป็นกระแสตรง (DC) ที่ถูกผลิตขึ้นโดยเซลล์โซลาร์ในแผงโซลาร์เซลล์ ผลมาจากเอฟเฟกต์โพโตโวลต์",
      total_pv_power_des: "พลังงานรวมที่ผลิตโดยระบบโซลาร์เซลล์โฟโตโวลตาอิก โดยทั่วไปจะวัดเป็นวัตต์ (W) หรือกิโลวัตต์ (kW)",
      total_pv_power_generation_day_des: "พลังงานรวมที่ผลิตโดยแผงโซลาร์เซลล์ในระบบพลังงานแสงอาทิตย์ในช่วงเวลาที่กำหนดของวัน",
      total_pv_power_generations_des: "แสดงถึงการผลิตพลังงานสะสมของแผงโซลาร์เซลล์โฟโตโวลตาอิก (PV)",
      total_pv_power_generation_des: "ปริมาณพลังงานไฟฟ้ารวมที่ผลิตโดยแผงโซลาร์เซลล์โฟโตโวลตาอิก (PV) ในช่วงเวลาที่กำหนด",

      // grid data details
      grid_input_voltage_des: "แรงดันไฟฟ้าจะถูกจ่ายให้กับระบบจากระบบกริดไฟฟ้า",
      grid_frequency_des: 'ย่อมาจากคำว่า "ความถี่กริด" หมายถึงความถี่ของกริดไฟฟ้าที่ระบบเชื่อมต่อกัน',
      total_grid_power_generation_day_des: "ผลรวมของพลังงานไฟฟ้าทั้งหมดที่ถูกสร้างขึ้นโดยกริดไฟฟ้าตลอดวัน",
      total_grid_power_generation_des: "พลังงานไฟฟ้าทั้งหมดที่ถูกผลิตโดยกริดไฟฟ้า",
      grid_voltage_des: "แรงดันเข้า AC: กระแสไฟฟ้าที่ไหลระหว่างระบบและเครือข่ายไฟฟ้า",
      grid_output_frequency_des: 'ย่อมาจากคำว่า "ความถี่กริด" หมายถึงความถี่ของกริดไฟฟ้าที่ระบบเชื่อมต่อไปยังสายพันธ์ไฟ',
      grid_current_output_des: "บ่งชี้ถึงปริมาณกระแสไฟฟ้าที่ได้รับจากระบบกริดไปยังระบบ",
      output_frequency_des2: "ความถี่ของกระแสไฟฟ้าสลับ (AC) ที่ถูกผลิตโดยระบบการผลิตพลังงานหรืออุปกรณ์ไฟฟ้า มีการวัดเป็นเฮิร์ตซ์ (Hz) และแสดงถึงจำนวนวงจรเปรียบเทียบต่อวินาที",

      // Bill
      BillSpan1: "ผลกำไรค่าไฟ",
      BillSpan2: "ยูนิตที่ใช้",
      BillSpan3: "ผลกำไรค่าไฟ",
      BillSpan4: "บาท",
      BillSpan5: "",
      //solar energy flow
      "Solar Energy Flow": "การไหลของพลังงาน",
      ON: "เปิด",
      OFF: "ปิด",

      "Output active power": "โหลดกำลังไฟฟ้าเอาท์พุตที่ใช้งาน",
      "Photovoltaic power": "พลังงานไฟฟ้าของโซลาร์เซลล์",
      Battery: "แบตเตอรี่",
      Grid: "การไฟฟ้า",
      Load: "โหลด",

      // popup load
      "Load percentage": "เปอร์เซ็นการใช้โหลด",
      "Load Half Ratio": "อัตราส่วนโหลดครึ่งหนึ่ง",
      "Load apparent power": "ค่าโหลดกำลังไฟฟ้าที่ปรากฎ",
      "Load active power": "ค่าโหลดกำลังไฟฟ้าที่ใช้จริง",
      "Output voltage": "ค่าแรงดันเอาท์พุต",
      "Output frequency": "ค่าความถี่เอาท์พุต",
      "Output current": "ค่ากระแสเอาท์พุต",
      "Output active power": "โหลดกำลังไฟฟ้าเอาท์พุตที่ใช้งาน",
      "Output apparent power": "ค่าโหลดกำลังไฟฟ้าเอาท์พุตที่ปรากฎ",
      "Total power output on the day":
        "ค่าพลังงานเอาท์พุตที่ใช้ทั้งหมดในวันนี้",
      // popup invert
      "Inverter voltage": "ค่าแรงดันของเครื่องอินเวอร์เตอร์",
      "Inverter frequency": "ค่าความถี่ของเครื่องอินเวอร์เตอร์",
      "Inverter current": "ค่ากระแสของเครื่องอินเวอร์เตอร์",
      // popup pv
      "Photovoltaic voltage": "ค่าแรงดันของโซลาร์เซลล์",
      "Photovoltaic charging current": "ค่ากระแสชาร์จไฟฟ้าของโซลาร์เซลล์",
      "Photovoltaic current": "ค่ากระแสไฟฟ้าของโซลาร์เซลล์ปัจจุบัน",
      "Total photovoltaic power": "พลังงานไฟฟ้าของโซลาร์เซลล์",
      "Total photovoltaic power generation on that day":
        "การผลิตไฟฟ้าโซลาร์เซลล์ทั้งหมดในวันนี้",
      "Total photovoltaic power generations": "การผลิตไฟฟ้าโซลาร์เซลล์ทั้งหมด",
      "Total photovoltaic power generation": "การผลิตไฟฟ้าโซลาร์เซลล์ทั้งหมด",
      // popup battery
      "Battery Voltage": "ค่าแรงดันแบตเตอรี่",
      "Battery Discharge Current":
        "ค่ากระแสไฟฟ้าขาออกจากแบตเตอรี่ที่จ่ายให้กับโหลด",
      "Charging Voltage": "ค่าแรงดันไฟฟ้าในการชาร์จ",
      "Number of Battery Cells": "จำนวนเซลล์แบตเตอรี่",
      "Charging Current": "ค่ากระแสการชาร์จ",
      "Charging Power": "กำลังการชาร์จ",
      "Battery Capacity (Battery SOC)": "ค่าความจุของแบตเตอรี่",
      "Battery Capacity Query": "รุ่นความจุของแบตเตอรี่",
      "Battery Current": "ค่ากระแสไฟฟ้าของแบตเตอรี่",
      // popup gird
      "Grid Input voltage": "ค่าแรงดันไฟฟ้าเข้าอินเวอร์เตอร์",
      "Grid  Frequency": "ค่าความถี่ไฟฟ้าเข้าอินเวอร์เตอร์อินพุต",
      "Total power generated by the Grid on that day":
        "จำนวนไฟฟ้าที่ผลิตจากพลังงานโซลาร์เซลล์ทั้งหมดของวันนี้",
      "Total Grid power generation":
        "จำนวนไฟฟ้าที่ผลิตจากพลังงานโซลาร์เซลล์ทั้งหมด",
      "Grid voltage": "แรงดันไฟฟ้ากริด",
      "Grid frequency": "ค่าความถี่ไฟฟ้าเข้าอินเวอร์เตอร์อินพุต",
      "Grid current output": "เอาท์พุตกระแสกริด",
      "Output frequency": "ค่าความถี่เอาท์พุต",

      // log out
      logOutSpan1: "ออกจากระบบ",
      logOutSpan2: "ท่านแน่ใจหรือว่าต้องการออกจากระบบ?",
      logOutSpan3: "ยกเลิก",
      logOutSpan4: "ยืนยัน",

      // status code 
      4500: "ข้อผิดพลาดในการเริ่มต้นทำงาน",
      4501: "แรงดันไฟฟ้าขาเข้าสูง",
      4502: "แรงดันไฟฟ้าขาเข้าต่ำ",
      4503: "ปัญหาในวงจร DC",
      4504: "อุณหภูมิสูง",
      4505: "แรงดันไฟฟ้าของแบตเตอรี่สูง",
      4506: "การเพิ่มแรงดันไฟฟ้าขาเข้าล้มเหลว",
      4507: "ปัญหาในขั้วต่ออินพุต",
      4508: "ปัญหาเกี่ยวกับของเหลวในการเริ่มต้นอินเวอร์เตอร์",
      4509: "แรงดันไฟฟ้าสูงในอินเวอร์เตอร์",
      4510: "แรงดันไฟฟ้าต่ำในอินเวอร์เตอร์",
      4511: "ปัญหาในวงจรอินเวอร์เตอร์",
      4512: "การป้องกันผลกระทบเชิงลบต่ออินเวอร์เตอร์",
      4513: "ปัญหาในการเกินขีดความสามารถในการผลิตไฟฟ้า",
      4514: "ปัญหาในการเขียนรหัสรุ่นเครื่อง",
      4515: "ไม่มีโปรแกรมบูต",
      4516: "ปัญหาในการเขียนโปรแกรมเครื่อง",
      4517: "กระแสไฟฟ้าสูงเกินไปในสายกลาง",
      4518: "รหัสผลิตภัณฑ์ที่เหมือนกัน",
      4519: "ปัญหาการสื่อสารของ CAN",
      4520: "ความแตกต่างแรงดันไฟฟ้าของแบตเตอรี่ที่สำคัญ",
      4521: "ความแตกต่างแรงดันไฟฟ้าของแหล่งจ่ายไฟที่สำคัญ",
      4522: "ความแตกต่างความถี่จากแหล่งจ่ายไฟที่สำคัญ",
      4523: "การตั้งค่าผิดพลาดที่ส่งผลกระทบต่อผลการดำเนินงานร่วมกัน",
      4524: "การสูญเสียการปรับปรุง",
      4525: "ปัญหาในแบตเตอรี่ BMS",
      4600: "ชิปเสีย",
      4601: "พัดลมเสีย",
      4602: "อุณหภูมิสูงเกินไป",
      4603: "แรงดันไฟฟ้าชาร์จสูง",
      4604: "การเริ่มต้นแบตเตอรี่ในสภาพอากาศเย็นล้มเหลว",
      4605: "ระดับการชาร์จ (SOC) ต่ำ",
      4606: "แบตเตอรี่ต่ำ ปิดการทำงาน",
      4607: "วงจรการชาร์จเต็ม",
      4608: "แบตเตอรี่ไม่เชื่อมต่อ",
      4609: "แบตเตอรี่ต่ำ",
      4610: "โอเวอร์โหลด",
      4700: "แรงดันไฟฟ้าแบตเตอรี่ลดลง",
      4701: "ข้อผิดพลาดในการเก็บข้อมูล",
      4702: "การคายพลังงานต่ำ",
      4703: "พัดลมไม่ทำงาน",
      4704: "อุณหภูมิสูงเกินไป",
      4705: "กระแสไฟฟ้าชาร์จเกิน",
      4706: "สูญเสียการสื่อสารกับ BMS",
      4707: "ข้อผิดพลาดลำดับเฟส",
      4708: "วงจรเปิดแบตเตอรี่",
      4709: "แรงดันไฟฟ้าแบตเตอรี่ต่ำ",
      4710: "ข้อผิดพลาดในการตั้งค่าขนาน",
      4711: "ข้อผิดพลาดการซิงโครไนซ์ขนาน",
      4712: "การสื่อสารขนานล้มเหลว",
      4713: "รุ่นขนานไม่เข้ากัน",
      4714: "เฟสไฟฟ้าหลักในขนานผิด",
      4715: "พลังงาน PV ไม่เพียงพอ",
      4716: "โอเวอร์โหลด",
      4717: "ความถี่หลักหายไป",
      4718: "แรงดันไฟฟ้าหลักหายไป",

    },
  },
  en: {
    translation: {
      //notify
      "Notifications": "Notifications",
      "Device Name": "Device Name",
      "Device Pin": "Device Pin",
      "Device Type": "Device Type",
      "Device Status": "Device Status",
      "Active": "Active",
      "Inactive": "Inactive",
      "Show All": "Show All",
      "Error": "Error",
      "Warning": "Warning",
      "Trouble Solved": "Trouble Solved",
      "Nodata": "No data",
      "Active": "Active",
      "Inactive": "Inactive",
      "Normal": "Normal",
      "Warning": "Warning",
      "Error": "Error",
      "System Alert": "System Alert",
      "No Messages Available": "No Messages Available",
      "Rows per page": "Rows per page",




      "Date": "Date",
      "Status": "Status",
      "Serial number": "Serial number",
      "Alarm Code": "Alarm Code",
      "Reset": "Reset",



      ////
      "Username or email": "Username or email",
      "Enter your password": "Enter your password",
      "Login now": "Login now",
      "Visit Monitor Demo": "Visit Monitor Demo",
      "Welcome to Your Monitoring": "Welcome to Your Monitoring",
      Monitor: "Monitor",
      Report: "Report Data",
      Notification: "Notification",
      User: "User",
      "User Information": "User Information",
      Username: "Username",
      "Birth Date": "Birth Date",
      Gender: "Gender",
      "Phone Number": "Phone Number",
      "E-mail": "E-mail",
      "user name or email is required": "user name or email is required",
      "password is required": "password is required",
      "password must contain number or alphabet":
        "password must contain number or alphabet",
      "password must have at least 6 characters":
        "password must have at least 6 characters",

      // Device
      DeviceSpan1: "My Device",
      DeviceSpan2: "Device Name",
      DeviceSpan3: "Device's PN",
      DeviceSpan4: "Load",
      DeviceSpan5: "Inverter",
      DeviceSpan6: "PV",
      DeviceSpan7: "Battery",
      DeviceSpan8: "Grid",

      // Chart
      ChartSpan1: "Solar Power Chart",
      ChartSpan2: "Selected Type",
      ChartSpan3: "Day",
      ChartSpan4: "Month",
      ChartSpan5: "Year",
      ChartSpan6: "Total",
      ChartSpan7: "Power (kWh)",
      ChartSpan8: "H",
      ChartSpan9: "Current load power",
      ChartSpan10: "PV power on the day",
      ChartSpan11: "DD-MM-YYYY",
      ChartSpan12: "MM-YYYY",
      ChartSpan13: "YYYY",
      ChartSpan14: "Zoom in",
      ChartSpan15: "Zoom out",
      ChartSpan16: "Reset",
      ChartSpan17: "Power consumption :",

      // Chart Power
      ChartPSpan1: "Charge Power",
      ChartPSpan2: "Today",
      ChartPSpan3: "PV Charging Power",
      ChartPSpan4: "System Details",
      ChartPSpan5: "Charging PV : ",

      // system details
      SystemDetailsSpan1: "System Components",
      SystemDetailsSpan2: "System Metrics",
      SystemDetailsSpan3: "Details",
      SystemDetailsSpan4: "Photovoltaic",
      SystemDetailsSpan5: "Selected Date",

      // load data details
      load_percentage_des: "The rate of power consumption by the load, often expressed as a percentage of the total capacity.",
      load_half_ratio_des: "The ratio of the load currently in use to the total load capacity is typically expressed as a percentage.",
      load_apparent_power_des: "The total power consumed by the load, considering both active and reactive components.",
      load_active_power_des: "Active power consumed by the connected loads, usually measured in watts (W) or kilowatts (kW).",
      output_voltage_des: "Output voltage, typically measured in volts (V).",
      output_frequency_des: "Output frequency, often measured in hertz (Hz).",
      output_current_des: "The electric current supplied by the system or component.",
      output_active_power_des: "The real power output of the system is typically measured in watts (W).",
      output_apparent_power_des: "The product of the voltage and current in an AC circuit, typically measured in volt-amperes (VA).",
      total_power_output_day_des: "The cumulative electrical energy outputted by the system throughout the day.",

      // inverter data details
      inverter_voltage_des: "The Voltage is supplied by the inverter, which converts DC power to AC power.",
      inverter_frequency_des: "Inverter current, representing the electric current output from the inverter.",
      inverter_current_des: "The electrical current flows through the inverter, which is a device that converts direct current (DC) from solar panels into alternating current (AC) that can be used to power electrical devices in a solar power system.",

      // battery data details
      battery_voltage_des: "Short for Battery Voltage: the voltage level of the connected battery in the system.",
      battery_discharge_current_des: "Amount of energy discharged from the battery during the current day.",
      charging_voltage_des: "The voltage is applied to charge batteries or other energy storage systems.",
      battery_cells_id_des: "The quantity of individual battery units connected in series or parallel.",
      charging_current_des: "The electric current used to charge the battery, typically measured in amperes (A) or kiloamperes (kA).",
      charging_power_des: "The power used to charge the battery, typically measured in watts (W) or kilowatts (kW).",
      battery_capacity_soc_des: "Capacity of the battery, often expressed as State of Charge (SOC).",
      battery_capacity_query_des: "Short for Battery State of Charge: the remaining capacity of the battery as a percentage of its total capacity.",
      battery_current_des: "The flow of electric charge within the battery is typically measured in amperes (A).",

      // pv data details
      pv_voltage_des: "Short for Photovoltaic Input Voltage, it represents the voltage level of the solar panels or photovoltaic system input.",
      pv_charging_current_des: "Current generated by the photovoltaic (PV) system, usually measured in amperes (A).",
      pv_current_des: "The flow of electric current generated by a photovoltaic (PV) solar panel when exposed to sunlight. It is the direct current (DC) produced by the solar cells in the PV panel as a result of the photovoltaic effect.",
      total_pv_power_des: "The total power generated by the photovoltaic system, typically measured in watts (W) or kilowatts (kW).",
      total_pv_power_generation_day_des: "The total amount of energy generated by the solar panels in a solar power system during a specific period of the day.",
      total_pv_power_generations_des: "Represents the cumulative energy production of the photovoltaic panels.",
      total_pv_power_generation_des: "The total amount of electrical energy produced by photovoltaic (PV) solar panels over a specific period.",

      // grid data details
      grid_input_voltage_des: "The Voltage is supplied to the system from the electrical grid.",
      grid_frequency_des: "Short for Grid Frequency, it indicates the frequency of the electrical grid to which the system is connected.",
      total_grid_power_generation_day_des: "The sum of all electrical energy generated by the grid throughout the day.",
      total_grid_power_generation_des: "The overall electrical energy produced by the grid.",
      grid_voltage_des: "AC Input Voltage: the current flowing between the system and the electrical grid.",
      grid_output_frequency_des: "Short for Grid Frequency, it indicates the frequency of the electrical grid to which the system is connected.",
      grid_current_output_des: "Indicates the amount of current being supplied by the grid to the system.",
      output_frequency_des: "The frequency of alternating current (AC) electricity produced by a power generation system or electrical device. It is measured in Hertz (Hz) and indicates the id of complete cycles per second.",

      // Bill
      BillSpan1: "Earn Profit Energy Bill",
      BillSpan2: "Unit",
      BillSpan3: "Saved",
      BillSpan4: "THB",
      BillSpan5: "",
      // solar energy
      "Solar Energy Flow": "Solar Energy Flow",
      ON: "ON",
      OFF: "OFF",
      "Output active power": "Output active power",
      "Photovoltaic power": "Photovoltaic power",
      Battery: "Battery",
      Grid: "Grid",
      Load: "Load",

      // popup flow load
      "Load percentage": "Load percentage ",
      "Load Half Ratio": "Load Half Ratio",
      "Load apparent power": "Load apparent power",
      "Load active power": "Load active power",
      "Output voltage": "Output voltage",
      "Output frequency": "Output frequency",
      "Output current": "Output current",
      "Output active power": "Output active power",
      "Output apparent power": "Output apparent power",
      "Total power output on the day": "Total power output on the day",
      // popup flow inverter
      "Inverter voltage": "Inverter voltage",
      "Inverter frequency": "Inverter frequency",
      "Inverter current": "Inverter current",
      // popup flow PV
      "Photovoltaic voltage": "Photovoltaic voltage",
      "Photovoltaic charging current": "Photovoltaic charging current",
      "Photovoltaic current": "Photovoltaic current",
      "Total photovoltaic power": "Total photovoltaic power",
      "Total photovoltaic power generation on that day":
        "Total photovoltaic power generation on that day",
      "Total photovoltaic power generations":
        "Total photovoltaic power generations",
      "Total photovoltaic power generation":
        "Total photovoltaic power generation",
      // popup flow battery
      "Battery Voltage": "Battery Voltage",
      "Battery Discharge Current": "Battery Discharge Current",
      "Charging Voltage": "Charging Voltage",
      "Number of Battery Cells": "Number of Battery Cells",
      "Charging Current": "Charging Current",
      "Charging Power": "Charging Power",
      "Battery Capacity (Battery SOC)": "Battery Capacity (Battery SOC)",
      "Battery Capacity Query": "Battery Capacity Query",
      "Battery Current": "Battery Current",
      // popup gird
      "Grid Input voltage": "Grid Input voltage",
      "Grid  Frequency": "Grid Frequency",
      "Total power generated by the Grid on that day":
        "Total power generated by the Grid on that day",
      "Total Grid power generation": "Total Grid power generation",
      "Grid voltage": "Grid voltage",
      "Grid frequency": "Grid frequency",
      "Grid current output": "Grid current output",
      "Output frequency": "Output frequency",

      // log out
      logOutSpan1: "Log Out",
      logOutSpan2: "Are you sure you want to log out?",
      logOutSpan3: "Cancel",
      logOutSpan4: "Log Out",

      // status code 
      4500: "Error Starting Work",
      4501: "High Voltage Input",
      4502: "Low Voltage Input",
      4503: "Issue in the DC Circuit",
      4504: "High Temperature",
      4505: "High Battery Voltage",
      4506: "Increasing the Input Voltage Failed",
      4507: "Problems in the Input Terminal",
      4508: "Fluid Related Issues at the Start of the Inverter",
      4509: "High Voltage in the Inverter",
      4510: "Low Voltage in the Inverter",
      4511: "Issue in the Inverter Circuit",
      4512: "Protection Against Negative Influences on the Inverter",
      4513: "Issue in Exceeding Power Capacity",
      4514: "Problem in Writing Machine Model Code",
      4515: "Lack of Boot Programs",
      4516: "Problem in Writing Machine Programs",
      4517: "Excessive Current in the Neutral Line",
      4518: "Identical Product Codes",
      4519: "CAN Communication Issues",
      4520: "Significant Differences in Battery Voltage",
      4521: "Significant Differences in Power Supply Voltage",
      4522: "Significant Differences in Frequency from the Power Supply",
      4523: "Incorrect Settings Affecting Collaborative Operation Results",
      4524: "Loss of Improvement Adjustments",
      4525: "Issues in BMS Battery",
      4600: "Chip is Broken",
      4601: "The Fan is Broken",
      4602: "High Temperature (Excessive)",
      4603: "High Charging Voltage",
      4604: "Failure to Start the Battery in Cold Conditions",
      4605: "Low State of Charge (SOC)",
      4606: "Battery Low Turning Off",
      4607: "Full Charge Cycle",
      4608: "Battery Not Connected",
      4609: "Low Battery",
      4610: "Over Load",
      4700: "Battery Voltage Drop",
      4701: "Storage Error",
      4702: "Low Energy Discharging",
      4703: "The Fan is Not Working",
      4704: "The Temperature is Too High",
      4705: "Charging Over Current",
      4706: "Lost Communication with BMS",
      4707: "Phase Sequence Error",
      4708: "Battery Open Circuit",
      4709: "Low Battery Voltage",
      4710: "Parallel Setup Error",
      4711: "Parallel Synchronization Error",
      4712: "Parallel Communication Failure",
      4713: "Parallel Models are Not Compatible",
      4714: "Main Power Phase in Parallel is Wrong",
      4715: "Insufficient PV Power",
      4716: "Overload",
      4717: "Main Frequency is Absent",
      4718: "Mains Voltage has Disappeared",
    },
  },
}

const getLang = localStorage.getItem("Language") || "EN"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLang == "EN" ? "en" : "th",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
