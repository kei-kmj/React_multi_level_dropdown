import {useState} from 'react'
import './App.css'
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";


type OptionMap = {
    [key: string]: string[]
}

export const NormalData = () => {
    const [firstSelection, setFirstSelection] = useState<string>('')
    const [secondSelection, setSecondSelection] = useState<string>('')
    const [thirdSelection, setThirdSelection] = useState<string>('')

    const firstOptions: string[] = ['肉', '野菜', '果物']
    const secondOptions: OptionMap = {肉: ['牛', '豚', '鶏'], 野菜: ['ジャガイモ', '人参', '玉ねぎ'], 果物: ['リンゴ', 'ミカン', 'バナナ']}
    const thirdOptions: OptionMap = {牛: ['和牛', '洋牛'], 豚: ['国産', '外国産'], 鶏: ['むね肉', 'ひき肉'], ジャガイモ: ['男爵', 'メークイン'], 人参: ['国産', '外国産'], 玉ねぎ: ['国産', '外国産'], リンゴ: ['国産', '外国産'], ミカン: ['国産', '外国産'], バナナ: ['国産', '外国産']}


    const handleFirstSelection = (e: SelectChangeEvent) => {
        setFirstSelection(e.target.value)
        setSecondSelection('')
        setThirdSelection('')
    }
    const handleSecondSelection = (e: SelectChangeEvent) => {
        setSecondSelection(e.target.value)
        setThirdSelection('')
    }

    const handleThirdSelection = (e: SelectChangeEvent) => {
        setThirdSelection(e.target.value)
    }

    return (
        <Box display="flex" justifyContent="space-between" gap={5}>
            <FormControl fullWidth margin="normal">
                <InputLabel id="first-select-label">First</InputLabel>
                <Select
                    labelId="first-select-label"
                    value={firstSelection}
                    onChange={handleFirstSelection}
                    style={{minWidth: 120}}
                >
                    <MenuItem value="">
                        <em>選択してください</em>
                    </MenuItem>
                    {firstOptions.map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="second-select-label">Second</InputLabel>
                <Select
                    labelId="second-select-label"
                    value={secondSelection}
                    onChange={handleSecondSelection}
                    style={{minWidth: 120}}
                >
                    <MenuItem value="">
                        <em>選択してください</em>
                    </MenuItem>
                    {(firstSelection ? secondOptions[firstSelection] : []).map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="third-select-label">Third</InputLabel>
                <Select
                    labelId="third-select-label"
                    value={thirdSelection}
                    onChange={handleThirdSelection}
                    style={{minWidth: 120}}
                >
                    <MenuItem value="">
                        <em>選択してください</em>
                    </MenuItem>
                    {(secondSelection ? thirdOptions[secondSelection] : []).map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

