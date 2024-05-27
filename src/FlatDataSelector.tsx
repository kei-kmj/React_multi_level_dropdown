import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";


type DropdownProps = {
    label: string;
    labelId: string;
    selectedValue: string;
    nominationsList: string[];
    onChange: (event: SelectChangeEvent<string>) => void;
}
export const FlatDataSelector = ({label, labelId, selectedValue, nominationsList, onChange}: DropdownProps) => {
    return <FormControl variant="outlined" margin="normal" sx={{minWidth: 200}}>
        <InputLabel>{label}</InputLabel>
        <Select
            labelId={labelId}
            value={selectedValue}
            onChange={onChange}
            label={label}
        >
            {nominationsList.map(nominate => (
                <MenuItem key={nominate} value={nominate}>{nominate}</MenuItem>
            ))}
        </Select>
    </FormControl>;
}