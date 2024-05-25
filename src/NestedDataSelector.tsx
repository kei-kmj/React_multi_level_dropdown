import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FC} from "react";

type DropdownProps = {
    labelID: string
    label: string
    value: string
    options: string[]
    onChange: (e: SelectChangeEvent) => void
}

export const NestedDataSelector: FC<DropdownProps> = ({labelID, label, value, options, onChange}) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel id={labelID}>{label}</InputLabel>
            <Select
                labelId={labelID}
                value={value}
                onChange={onChange}
                style={{minWidth: 120}}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}