import React, { useState, useEffect } from "react";
import { Col, Row, Statistic, Card, Space, Divider, Typography } from 'antd';
import Thermometer from 'react-thermometer-component'
import { Badge } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { Modal } from 'antd';
import axios from "axios";
import { Slider } from 'antd';
import { Switch } from 'antd';
const { Title } = Typography;

const DashboardData = () => {
    //writable data
    const writable_data = [
        {
            "id": 1,
            "parameter": "P2",

        },
        {
            "id": 2,
            "parameter": "P3"
        },
        {
            "id": 3,
            "parameter": "P4"
        },
        {
            "id": 4,
            "parameter": "P5"
        },
        {
            "id": 5,
            "parameter": "P6"
        },
        {
            "id": 6,
            "parameter": "P7"
        },
        {
            "id": 7,
            "parameter": "P8"
        },
        {
            "id": 8,
            "parameter": "P9"
        },
        {
            "id": 9,
            "parameter": "P10"
        },
        {
            "id": 10,
            "parameter": "P11"
        },
        {
            "id": 11,
            "parameter": "P12"
        },
        {
            "id": 12,
            "parameter": "P13"
        },
        {
            "id": 13,
            "parameter": "DI_D"
        },
        {
            "id": 14,
            "parameter": "OPS_SEL"
        },
        {
            "id": 15,
            "parameter": "QFD"
        },
        {
            "id": 16,
            "parameter": "CND6"
        },
        {
            "id": 17,
            "parameter": "CND7"
        },
        {
            "id": 18,
            "parameter": "L1"
        },
        {
            "id": 19,
            "parameter": "L2"
        },
        {
            "id": 20,
            "parameter": "L3"
        },
        {
            "id": 21,
            "parameter": "L4"
        },
        {
            "id": 22,
            "parameter": "L5"
        },
        {
            "id": 23,
            "parameter": "L7"
        },
        {
            "id": 24,
            "parameter": "L8"
        },
        {
            "id": 25,
            "parameter": "BUZ"
        },
        {
            "id": 26,
            "parameter": "AL"
        },
        {
            "id": 27,
            "parameter": "COMP_ UL"
        },
        {
            "id": 28,
            "parameter": "COMP_OL"
        },
        {
            "id": 29,
            "parameter": "C2"
        },
        {
            "id": 30,
            "parameter": "D0"
        },
        {
            "id": 31,
            "parameter": "D1"
        },
        {
            "id": 32,
            "parameter": "D2"
        },
        {
            "id": 33,
            "parameter": "D3"
        },
        {
            "id": 34,
            "parameter": "D4"
        },
        {
            "id": 35,
            "parameter": "E1"
        },
        {
            "id": 36,
            "parameter": "T_ON"
        },
        {
            "id": 37,
            "parameter": "T_OFF"
        },
        {
            "id": 38,
            "parameter": "E7"
        },
        {
            "id": 39,
            "parameter": "E8"
        },
        {
            "id": 40,
            "parameter": "LD"
        },
        {
            "id": 41,
            "parameter": "PDN"
        },
        {
            "id": 42,
            "parameter": "CCRH"
        },
        {
            "id": 43,
            "parameter": "LOCK"
        },
        {
            "id": 44,
            "parameter": "PO"
        },
        {
            "id": 45,
            "parameter": "PDIS"
        },
        {
            "id": 46,
            "parameter": "FS"
        },
        {
            "id": 47,
            "parameter": "SET POINT"
        },
        {
            "id": 48,
            "parameter": "QFS"
        }
    ]
    const onSwitchChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cur_para, setCur_Para] = useState();
    // const [readabledata,setReadabledata]=useState({})
    const readabledata = 

    {
      "inputs": [
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "RTEMP",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Room Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-RTEMP",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": -17.7
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "COILTEMP",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Coil Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-COILTEMP",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": -16.2
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "RELAYSTATUS",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Relay status",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-RELAYSTATUS",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 15
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "FAULT1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Fault 1 Status",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-FAULT1",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "DIGITALIN",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Digital input status",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-DIGITALIN",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 28672
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "SYSSTATUS",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "System status",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-SYSSTATUS",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "HRS",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "COMPRESSOR RUN HRS",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-HRS",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 18
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "current",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "I1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "COMP R-PH CURRENT",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-I1",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "current",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "I2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "COMP Y-PH CURRENT",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-I2",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "current",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "I3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "COMP B-PH CURRENT",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-I3",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Allowable High Temperature Limit",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P2",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 50
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Allowable Low Temperature Limit",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P3",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": -40
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P4",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set the Differential for Compressor Restart",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P4",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 2.5
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P5",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Room Probe Calibration",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P5",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": -1.5
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P6",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Time Delay Between Compressor Relay Restart Time ",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P6",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P7",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set duration of Defrost",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P7",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 54
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "Frequency",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P8",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Defrost Frequency",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P8",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 5
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P9",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Power On Defrost Delay",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P9",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P10",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Type Of Defrost",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P10",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P11",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Drip Time For Defrost",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P11",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 3
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P12",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Type Of Computation For Defrost Time",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P12",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "P13",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Defrost Stop Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-P13",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 33.4
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "DID",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Select AUX or Compressor Thermal Trip Digital I/P",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-DID",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "OPSSEL",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Enable /Disable Oil Pressure Switch",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-OPSSEL",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "QFD",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Quick Freeze Duration",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-QFD",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 2
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "CND6",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Condenser On Delay Time ",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-CND6",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 15
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "CND7",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Condenser Status At Hot Gas Defrost",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-CND7",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "L1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Evaporator Fan Stop Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-L1",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 26.6
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "L2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Evaporator Restart Delay",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-L2",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0.1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "L3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Evaporator Fan Status at Compressor Off",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-L3",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "L4",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Evaporator Fan Differential",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-L4",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 2
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "L5",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Evaporator Fan Probe Calibration",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-L5",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "L7",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Compressor-Evaporator Fan Status At Door Open Condition ",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-L7",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "L8",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Evaporator Fan Status During Defrost",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-L8",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "BUZ",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Enable /Disable Buzzer",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-BUZ",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "AL",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Alarm Relay Enable/Disable",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-AL",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "current",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "COMPUL",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Compressor  Current for Under Load",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-COMPUL",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 30
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "current",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "COMPOL",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Compressor  Current for Over Load",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-COMPOL",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 60
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "C2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Current Sensing Time Delay",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-C2",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "D0",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Enable or Disable HP Sensing",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-D0",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "D1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Enable or Disable LP Sensing",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-D1",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 150
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "voltage",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "D2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Fault Sensing Logic",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-D2",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 5
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "D3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set LP Sensing Delay",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-D3",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "D4",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Reset Mode for HP Fault",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-D4",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "E1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Compressor Relay Status On Probe Failure",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-E1",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "TON",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set On Cycle At Room Probe Fail",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-TON",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 30
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "TOFF",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set OFF Cycle At Room Probe Fail",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-TOFF",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "E7",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Display At DefrostingE7",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-E7",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "E8",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Defrost Duration during Coil Probe Failure",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-E8",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 10
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "LD",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Time Delay To Switch Off the Light",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-LD",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 4
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "PDN",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Activate Solenoid Valve Relay",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-PDN",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "CCRH",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Clear Compressor Run Hour",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-CCRH",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 5
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "LOCK",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "LOCK",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-LOCK",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 7
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "PO",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Enable/Disable Power Switch",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-PO",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "PDIS",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Display At Power Off Mode",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-PDIS",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "FS",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Restore Default Setting of the ControllerFS",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-FS",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "misc",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "SETPOINT",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set the Cut-Out Point Of the Controller",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-SETPOINT",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80210095",
            "device_code": "MOD01",
            "zone": "QFS",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Quick Freeze Set Point",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD01-QFS",
            "last_recv_dt": "2022-11-02T16:28:58+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-11-02T16:29:01+05:30"
        }
      ],
      "health": ""
    }
    
    const { Option } = Select;
    const showModal = (value) => {
        console.log(`selected ${value}`);
        setCur_Para(value)
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // api call for getting readable parameter
    // useEffect(()=>
    // {
    //     axios.get("//192.168.55.14:5001/devices/modbus/status?device_code=MOD51")
    //     .then((res)=>
    //     {
    //         console.log(res.data);
    //         setReadabledata(res.data)
    //     })
    //     .catch((error)=>
    //     {
    //         console.log(error)
    //     })

    // },[])
    const marks = {
        0.5: '0.5°C',
        10: '10°C',
        25: '25°C',
        50: {
            style: {
                color: '#f50',
            },
            label: <strong>50°C</strong>,
        },
    };
    function getminData(cur_para) {
        let minvalue;
        if (cur_para === "P2" || "P4") {
            minvalue = 0.5
        }
        return minvalue;
    }
    function getmaxData(cur_para) {
        let maxvalue;
        if (cur_para === "P2" || "P4") {
            maxvalue = 50
        }
        return maxvalue;
    }
    function openModalForm(cur_para) {
        if (cur_para === "P10" || cur_para === "P12" || cur_para === "DI_D" || cur_para === "OPS_SEL" || cur_para === "CND7" || cur_para === "L3" || cur_para === "L8" || cur_para === "BUZ" || cur_para === "AL" || cur_para === "D0" || cur_para === "D1" || cur_para === "D4" || cur_para === "E7" || cur_para === "PDN" || cur_para === "CCRH" || cur_para === "PO" || cur_para === "PDIS" || cur_para === "FS") {
            return (
                <>
                    <Switch defaultChecked onChange={onSwitchChange} />
                </>
            )
        }
        else {
            return (

                <>
                    <Slider min={getminData(cur_para)}
                        max={getmaxData(cur_para)}
                        marks={marks}
                        defaultValue={37} />
                </>
            )
        }

    }
    return (
        <>
            <Modal title="Set Parameter" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h1>{cur_para}</h1>
                {/*  this function is used to open modal according to parameter select */}
                {openModalForm(cur_para)}
            </Modal>
           
             <Row>
                <Row gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}>
                    <Space
                    >
                        <Col span={6}>
                            <Card style={{ width: 240 }}
                            >
                                <Statistic
                                    title={
                                        <>
                                            <Space direction="horizontal">
                                                <Badge size="default" color="red" className="ant-badge" />
                                                <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Digital Input Status</h1>
                                            </Space>
                                        </>
                                    }
                                    value={readabledata?.inputs[4]?.fields?.value}
                                    valueStyle={{
                                        color: 'black',
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col span={6} >
                            <Card style={{ width: 240 }}>
                                <Statistic
                                    title={
                                        <>
                                            <Space direction="horizontal">
                                                <Badge size="default" color="yellow" />
                                                <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Relay Status</h1>
                                            </Space>
                                        </>
                                    }
                                    value={readabledata?.inputs[2]?.fields?.value}
                                    valueStyle={{
                                        color: 'black',
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col span={6} >
                            <Card style={{ width: 240 }}>
                                <Statistic
                                    title={
                                        <>
                                            <Space direction="horizontal">
                                                <Badge size="default" color="green" />
                                                <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>System Status</h1>
                                            </Space>
                                        </>
                                    }
                                    value={readabledata?.inputs[5]?.fields?.value}
                                    precision={2}
                                    valueStyle={{
                                        color: 'black',
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col span={6} >
                            <Card style={{ width: 240 }}>
                                <Statistic
                                    title={
                                        <>
                                            <Space direction="horizontal">
                                                <Badge size="default" color="red" />
                                                <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>Fault Status</h1>
                                            </Space>
                                        </>
                                    }
                                    value={readabledata?.inputs[3]?.fields?.value}
                                    valueStyle={{
                                        color: 'black',
                                    }}
                                />
                            </Card>
                        </Col>
                    </Space>
                </Row>
                <Divider></Divider>
                <Row gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}>
                    <Space>
                        <Col span={3} >
                            <Card style={{ width: 240, height: 300 }}>
                                <Statistic
                                    title={
                                        <>
                                            <Space direction="vertical">
                                                <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>COIL TEMPERATURE</h1>
                                                <Thermometer
                                                    theme="light"
                                                    value={readabledata?.inputs[1]?.fields?.value}
                                                    max={100}
                                                    min={-50}
                                                    steps="4"
                                                    format="°C"
                                                    size="large"
                                                    height="150"
                                                />
                                            </Space>
                                        </>
                                    }
                                    value={readabledata?.inputs[1]?.fields?.value}
                                    suffix="°C"
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col span={3} >
                            <Card style={{ width: 240, height: 300 }}>
                                <div style={{ height: "50%" }}>
                                    <Statistic
                                        title={
                                            <>
                                                <Space direction="vertical">
                                                    <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>ROOM TEMPERATURE</h1>
                                                    <Thermometer
                                                        theme="light"
                                                        value={readabledata?.inputs[0]?.fields?.value}
                                                        max={100}
                                                        min={-50}
                                                        steps="4"
                                                        format="°C"
                                                        size="large"
                                                        height="150"
                                                    />
                                                </Space>
                                            </>
                                        }
                                        value={readabledata?.inputs[0]?.fields?.value}
                                        suffix="°C"
                                        valueStyle={{
                                            color: '#3f8600',
                                        }}
                                    />
                                </div>
                            </Card>
                        </Col>
                        <Col span={3} >
                            <Card style={{ width: 240, height: 300 }}>
                                <Statistic
                                    value={readabledata?.inputs[6]?.fields?.value}
                                    title={
                                        <>
                                            <Space align="horizontal">
                                                <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>COMP RUN HOURS</h1>
                                            </Space>
                                        </>
                                    }
                                    suffix="Hrs"
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                />

                            </Card>
                        </Col>
                    </Space>
                </Row>
                <Divider></Divider>
                <Row gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}>
                    <Col span={8}>
                        <Card style={{ width: 240 }}>
                            <Statistic
                                title={
                                    <>
                                        <Space direction="horizontal">
                                            <ThunderboltOutlined />
                                            <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>COMP.R-PH CURRENT</h1>
                                        </Space>
                                    </>
                                }
                                value={readabledata?.inputs[7]?.fields?.value}
                                suffix="A"
                                valueStyle={{
                                    color: 'black',
                                }}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{ width: 240 }}>
                            <Statistic
                                title={
                                    <>
                                        <Space direction="horizontal">
                                            <ThunderboltOutlined />
                                            <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>COMP.Y-PH CURRENT</h1>
                                        </Space>
                                    </>
                                }
                                value={readabledata?.inputs[8]?.fields?.value}
                                suffix="A"
                                valueStyle={{
                                    color: 'black',
                                }}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{ width: 240 }}>
                            <Statistic
                                title={
                                    <>
                                        <Space direction="horizontal">
                                            <ThunderboltOutlined />
                                            <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>COMP.B-PH CURRENT</h1>
                                        </Space>
                                    </>
                                }
                                value={readabledata?.inputs[9]?.fields?.value}
                                suffix="A"
                                valueStyle={{
                                    color: 'black',
                                }}
                            />
                        </Card>
                    </Col>
                </Row>
            </Row>
            <Divider></Divider>
            <Row>
                <Space>
                    <Title level={3}>Set Writable Parameter</Title>
                    <Select
                        placeholder="Plase select Parameter"
                        showSearch
                        style={{ width: 400 }}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                        onChange={showModal}
                    >
                        {writable_data.map((wdata) => {
                            return (
                                <Option key={wdata.key} value={wdata.parameter}>
                                    {wdata.parameter}
                                </Option>
                            );
                        })}
                    </Select>
                </Space>
            </Row>
        </>
    )
}
export default DashboardData;