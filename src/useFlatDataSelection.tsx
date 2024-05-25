import {useState} from "react";
import {SelectChangeEvent} from "@mui/material";
import {ItemType} from "./FlatData.tsx";


export const useFlatDataSelection = (items: ItemType[]) => {
    const [selected, setSelected] = useState<string>('');
    const [filteredSubItems, setFilteredSubItems] = useState<string[]>([]);
    const [selectedSubItem, setSelectedSubItem] = useState<string>('');

    const handleItemChange = (e: SelectChangeEvent<string>) => {
        const itemName = e.target.value;
        setSelected(itemName);

        const filteredItems = items
            .filter(item => item.name === itemName)
            .map(item => item.subItem);

        setFilteredSubItems(filteredItems);
        setSelectedSubItem('');
    };

    const handleSubItemChange = (e: SelectChangeEvent<string>) => {
        const subItemName = e.target.value;
        setSelectedSubItem(subItemName);
    };

    const uniqueItems: string[] = Array.from(new Set(items.map(item => item.name)));

    return {
        selected,
        filteredSubItems,
        selectedSubItem,
        handleItemChange,
        handleSubItemChange,
        uniqueItems
    };
};