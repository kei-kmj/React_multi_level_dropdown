import {Box} from '@mui/material';
import {FlatDataSelector} from "./FlatDataSelector.tsx";
import {ItemType, useFlatItemSelection} from "./useFlatItemSelection.tsx";


const deviceItem: ItemType[] = [
    {itemId: "1", name: "USBメモリ", subItemId: "1", subItem: "Buffalo_1"},
    {itemId: "1", name: "USBメモリ", subItemId: "2", subItem: "Buffalo_2"},
    {itemId: "1", name: "USBメモリ", subItemId: "3", subItem: "Buffalo_3"},
    {itemId: "2", name: "HDD", subItemId: "4", subItem: "IO_DATA_1"},
    {itemId: "2", name: "HDD", subItemId: "5", subItem: "IO_DATA_2"},
    {itemId: "2", name: "HDD", subItemId: "6", subItem: "IO_DATA_3"},
    {itemId: "3", name: "SSD", subItemId: "7", subItem: "ELECOM_1"},
    {itemId: "3", name: "SSD", subItemId: "8", subItem: "ELECOM_2"},
    {itemId: "3", name: "SSD", subItemId: "9", subItem: "ELECOM_3"}
];

export const FlatItemDropdown = () => {
    const {
        selectedItem: selectedDevice,
        filteredSubItems: products,
        selectedSubItem: selectedProduct,
        handleItemChange: handleDeviceChange,
        handleSubItemChange: handleProductChange,
        uniqueItems: uniqueDevices
    } = useFlatItemSelection(deviceItem);

    return (
        <Box display="flex" gap={2} flexWrap="wrap">
            <FlatDataSelector label="デバイス" labelId="device-select-label" selectedValue={selectedDevice}
                              nominationsList={uniqueDevices}
                              onChange={handleDeviceChange}/>

            <FlatDataSelector label="製品" labelId="product-select-label" selectedValue={selectedProduct}
                              nominationsList={products}
                              onChange={handleProductChange}/>
        </Box>
    );
};
