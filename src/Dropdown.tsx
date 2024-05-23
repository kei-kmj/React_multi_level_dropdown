import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FC} from "react";

type DropdownProps = {
    labelID: string
    label: string
    value: string
    options: string[]
    onChange: (e: SelectChangeEvent) => void
}

export const Dropdown: FC<DropdownProps> = ({labelID, label, value, options, onChange}) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel id={labelID}>{label}</InputLabel>
            <Select
                labelId={labelID}
                value={value}
                onChange={onChange}
                style={{minWidth: 120}}
            >
                <MenuItem value="">
                    <em>選択してください</em>
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}