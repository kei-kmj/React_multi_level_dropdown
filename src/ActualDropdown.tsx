import {useState} from 'react';
import {MenuItem, FormControl, InputLabel, Select, Box, SelectChangeEvent} from '@mui/material';

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
    const [selectedDevice, setSelectedDevice] = useState<string>('');
    const [products, setProducts] = useState<string[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<string>('');

    const handleDeviceChange = (e: SelectChangeEvent<string>) => {
        const deviceName = e.target.value;
        setSelectedDevice(deviceName);

        const filteredProducts = deviceData
            .filter(item => item.device_name === deviceName)
            .map(item => item.product);

        setProducts(filteredProducts);
        setSelectedProduct('');
    };

    const handleProductChange = (e: SelectChangeEvent<string>) => {
        const productName = e.target.value;
        setSelectedProduct(productName);
    };

    const uniqueDevices = Array.from(new Set(deviceData.map(item => item.device_name)));

    return (
        <Box display="flex" gap={2} flexWrap="wrap">
            <FormControl variant="outlined" margin="normal" style={{minWidth: 200}}>
                <InputLabel id="device-select-label">デバイス</InputLabel>
                <Select
                    labelId="device-select-label"
                    value={selectedDevice}
                    onChange={handleDeviceChange}
                    label="Device"
                >
                    {uniqueDevices.map((device) => (
                        <MenuItem key={device} value={device}>{device}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl variant="outlined" margin="normal" style={{minWidth: 200}}>
                <InputLabel id="product-select-label">製品</InputLabel>
                <Select
                    labelId="product-select-label"
                    value={products.includes(selectedProduct) ? selectedProduct : ''}
                    onChange={handleProductChange}
                    label="Product"
                >
                    {products.map((product) => (
                        <MenuItem key={product} value={product}>{product}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
