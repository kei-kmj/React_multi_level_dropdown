import './App.css'
import {Box} from "@mui/material";
import {Dropdown} from "./Dropdown.tsx";
import {useMultiLevelDropdown} from "./useMultiLevelDropdown.tsx";


export const NormalData = () => {
    const initialOptions = {
        first: ['肉', '野菜', '果物'],
        second: {肉: ['牛', '豚', '鶏'], 野菜: ['ジャガイモ', '人参', '玉ねぎ'], 果物: ['リンゴ', 'ミカン', 'バナナ']},
        third: {牛: ['和牛', '洋牛'], 豚: ['国産', '外国産'], 鶏: ['むね肉', 'ひき肉'], ジャガイモ: ['男爵', 'メークイン'], 人参: ['国産', '外国産'], 玉ねぎ: ['国産', '外国産'], リンゴ: ['国産', '外国産'], ミカン: ['国産', '外国産'], バナナ: ['国産', '外国産']}
    }

    const {
        firstSelection,
        secondSelection,
        thirdSelection,
        firstOptions,
        secondOptions,
        thirdOptions,
        handleFirstSelection,
        handleSecondSelection,
        handleThirdSelection
    } = useMultiLevelDropdown(initialOptions)

    return (
        <Box display="flex" justifyContent="space-between" gap={5}>
            <Dropdown labelID="first-select-label"
                      label="First" value={firstSelection} options={firstOptions} onChange={handleFirstSelection}
            />
            <Dropdown labelID="second-select-label"
                      label="Second" value={secondSelection} options={secondOptions}
                      onChange={handleSecondSelection}

            />
            <Dropdown labelID="third-select-label"
                      label="Third" value={thirdSelection}
                      options={thirdOptions} onChange={handleThirdSelection}
            />
        </Box>
    )
}

