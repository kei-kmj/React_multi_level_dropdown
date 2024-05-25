import {Box} from '@mui/material';
import {Dropdown} from "./Dropdown.tsx";
import {useMultiLevelSelection} from "./useMultiLevelSelection.tsx";

type DeviceData = {
    device_id: string;
    device_name: string;
    product_id: string;
    product: string;
}

const deviceData: DeviceData[] = [
    {device_id: "1", device_name: "USBメモリ", product_id: "1", product: "Buffalo_1"},
    {device_id: "1", device_name: "USBメモリ", product_id: "2", product: "Buffalo_2"},
    {device_id: "1", device_name: "USBメモリ", product_id: "3", product: "Buffalo_3"},
    {device_id: "2", device_name: "HDD", product_id: "4", product: "IO_DATA_1"},
    {device_id: "2", device_name: "HDD", product_id: "5", product: "IO_DATA_2"},
    {device_id: "2", device_name: "HDD", product_id: "6", product: "IO_DATA_3"},
    {device_id: "3", device_name: "SSD", product_id: "7", product: "ELECOM_1"},
    {device_id: "3", device_name: "SSD", product_id: "8", product: "ELECOM_2"},
    {device_id: "3", device_name: "SSD", product_id: "9", product: "ELECOM_3"}
];

export const ActualMultiLevelDropdown = () => {
    const {
        selectedDevice,
        products,
        selectedProduct,
        handleDeviceChange,
        handleProductChange,
        uniqueDevices
    } = useMultiLevelSelection(deviceData);

    return (
        <Box display="flex" gap={2} flexWrap="wrap">
            <Dropdown label="デバイス" labelId="device-select-label" value={selectedDevice} options={uniqueDevices}
                      onChange={handleDeviceChange}/>

            <Dropdown label="製品" labelId="product-select-label" value={selectedProduct} options={products}
                      onChange={handleProductChange}/>
        </Box>
    );
};
