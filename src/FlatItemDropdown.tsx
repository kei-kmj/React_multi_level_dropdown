import {Box} from '@mui/material';
import {FlatDataSelector} from "./FlatDataSelector.tsx";
import {ItemType, useFlatItemSelection} from "./useFlatItemSelection.tsx";


const foodItems: ItemType[] = [
    {itemId: "1", name: "野菜", subItemId: "1", subItem: "じゃがいも"},
    {itemId: "1", name: "野菜", subItemId: "2", subItem: "ニンジン"},
    {itemId: "1", name: "野菜", subItemId: "3", subItem: "玉ねぎ"},
    {itemId: "2", name: "肉", subItemId: "4", subItem: "牛肉"},
    {itemId: "2", name: "肉", subItemId: "5", subItem: "豚肉"},
    {itemId: "2", name: "肉", subItemId: "6", subItem: "鶏肉"},
    {itemId: "3", name: "果物", subItemId: "7", subItem: "りんご"},
    {itemId: "3", name: "果物", subItemId: "8", subItem: "みかん"},
    {itemId: "3", name: "果物", subItemId: "9", subItem: "いちご"}
];

export const FlatItemDropdown = () => {
    const {
        selectedItem: selectedFoodCategory,
        filteredSubItems: foods,
        selectedSubItem: selectedFood,
        handleItemChange: handleCategoryChange,
        handleSubItemChange: handleFoodStuffChange,
        uniqueItems: uniqueCategory
    } = useFlatItemSelection(foodItems);

    return (
        <Box display="flex" gap={2} flexWrap="wrap">
            <FlatDataSelector label="カテゴリ" labelId="device-select-label" selectedValue={selectedFoodCategory}
                              nominationsList={uniqueCategory}
                              onChange={handleCategoryChange}/>

            <FlatDataSelector label="食材" labelId="product-select-label" selectedValue={selectedFood}
                              nominationsList={foods}
                              onChange={handleFoodStuffChange}/>
        </Box>
    );
};
