import {Box} from '@mui/material';
import {FlatDataSelector} from "./FlatDataSelector.tsx";
import {useFlatItemSelection} from "./useFlatItemSelection.tsx";

export type ItemType = {
    item_id: string;
    name: string;
    subItem_id: string;
    subItem: string;
}

const deviceItem: ItemType[] = [
    {item_id: "1", name: "USBメモリ", subItem_id: "1", subItem: "Buffalo_1"},
    {item_id: "1", name: "USBメモリ", subItem_id: "2", subItem: "Buffalo_2"},
    {item_id: "1", name: "USBメモリ", subItem_id: "3", subItem: "Buffalo_3"},
    {item_id: "2", name: "HDD", subItem_id: "4", subItem: "IO_DATA_1"},
    {item_id: "2", name: "HDD", subItem_id: "5", subItem: "IO_DATA_2"},
    {item_id: "2", name: "HDD", subItem_id: "6", subItem: "IO_DATA_3"},
    {item_id: "3", name: "SSD", subItem_id: "7", subItem: "ELECOM_1"},
    {item_id: "3", name: "SSD", subItem_id: "8", subItem: "ELECOM_2"},
    {item_id: "3", name: "SSD", subItem_id: "9", subItem: "ELECOM_3"}
];

export const FlatItemDropdown = () => {
    const {
        selected:selectedDevice,
        filteredSubItems: products,
        selectedSubItem: selectedProduct,
        handleItemChange: handleDeviceChange,
        handleSubItemChange: handleProductChange,
        uniqueItems: uniqueDevices
    } = useFlatItemSelection(deviceItem);

    return (
        <Box display="flex" gap={2} flexWrap="wrap">
            <FlatDataSelector label="デバイス" labelId="device-select-label" value={selectedDevice} options={uniqueDevices}
                              onChange={handleDeviceChange}/>

            <FlatDataSelector label="製品" labelId="product-select-label" value={selectedProduct} options={products}
                              onChange={handleProductChange}/>
        </Box>
    );
};
