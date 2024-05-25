import './App.css'
import {Box} from "@mui/material";
import {NestedDataSelector} from "./NestedDataSelector.tsx";
import {useNestedDataSelection} from "./useNestedDataSelection.tsx";


export const NestedData = () => {
    const initialOptions = {
        first: ['肉', '野菜', '果物'],
        second: {肉: ['牛', '豚', '鶏'], 野菜: ['ジャガイモ', '人参', '玉ねぎ'], 果物: ['リンゴ', 'ミカン', 'バナナ']},
        third: {牛: ['米沢牛', '松坂牛', '飛騨牛'], 豚: ['黒豚', 'アグー豚', '三元豚'], 鶏: ['比内地鶏', '名古屋コーチン', '軍鶏'], ジャガイモ: ['男爵', 'メークイン'], 人参: ['人参', '金時人参', '高麗人参'], 玉ねぎ: ['国産', '外国産'], リンゴ: ['フジ', '秋映'], ミカン: ['文旦', 'デコポン', '温州ミカン'], バナナ: ['台湾産', 'フィリピン産']}
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
    } = useNestedDataSelection(initialOptions)

    return (
        <Box display="flex" justifyContent="space-between" gap={5}>
            <NestedDataSelector labelID="first-select-label"
                                label="食材" value={firstSelection} options={firstOptions} onChange={handleFirstSelection}
            />
            <NestedDataSelector labelID="second-select-label"
                                label="材料" value={secondSelection} options={secondOptions}
                                onChange={handleSecondSelection}

            />
            <NestedDataSelector labelID="third-select-label"
                                label="詳細" value={thirdSelection}
                                options={thirdOptions} onChange={handleThirdSelection}
            />
        </Box>
    )
}

