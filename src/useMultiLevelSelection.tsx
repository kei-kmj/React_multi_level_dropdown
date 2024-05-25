import {useState} from "react";
import {SelectChangeEvent} from "@mui/material";

type DeviceData = {
    device_id: string;
    device_name: string;
    product_id: string;
    product: string;
}

export const useMultiLevelSelection = (deviceData: DeviceData[]) => {
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

    const uniqueDevices: string[] = Array.from(new Set(deviceData.map(item => item.device_name)));

    return {
        selectedDevice,
        products,
        selectedProduct,
        handleDeviceChange,
        handleProductChange,
        uniqueDevices
    };
};