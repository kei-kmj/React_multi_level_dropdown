import {useState} from "react";
import {SelectChangeEvent} from "@mui/material";

export type ItemType = {
    itemId: string;
    name: string;
    subItemId: string;
    subItem: string;
}
export const useFlatItemSelection = (items: ItemType[]) => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [filteredSubItems, setFilteredSubItems] = useState<string[]>([]);
    const [selectedSubItem, setSelectedSubItem] = useState<string>('');

    const handleItemChange = (e: SelectChangeEvent<string>) => {
        const itemName = e.target.value;
        setSelectedItem(itemName);

        const filteredItems = items
            .filter(item => item.name === itemName)
            .map(item => item.subItem);

        setFilteredSubItems(filteredItems);
        // アイテムが変更されたときにサブアイテムをリセットする
        setSelectedSubItem('');
    };

    const handleSubItemChange = (e: SelectChangeEvent<string>) => {
        const subItemName = e.target.value;
        setSelectedSubItem(subItemName);
    };

    // アイテムの重複を除かないと、アイテムの数だけ選択肢が表示されてしまう
    const uniqueItems: string[] = Array.from(new Set(items.map(item => item.name)));

    return {
        selectedItem,
        filteredSubItems,
        selectedSubItem,
        handleItemChange,
        handleSubItemChange,
        uniqueItems
    };
};