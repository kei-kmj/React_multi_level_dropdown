import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";


type DropdownProps = {
    label: string;
    labelId: string;
    value: string;
    options: string[];
    onChange: (event: SelectChangeEvent<string>) => void;
}
export const FlatDataDropdown = ({label, labelId, value, options, onChange}: DropdownProps) => {
    return <FormControl variant="outlined" margin="normal" style={{minWidth: 200}}>
        <InputLabel id="product-select-label">製品</InputLabel>
        <Select
            labelId={labelId}
            value={value}
            onChange={onChange}
            label={label}
        >
            {options.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
        </Select>
    </FormControl>;
}