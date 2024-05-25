import {useState} from "react";
import {SelectChangeEvent} from "@mui/material";

type OptionMap = {
    [key: string]: string[]
}

export const useOldMultiLevelDropdown = (initialOptions: { first: string[], second: OptionMap, third: OptionMap }) => {
    const [firstSelection, setFirstSelection] = useState<string>('')
    const [secondSelection, setSecondSelection] = useState<string>('')
    const [thirdSelection, setThirdSelection] = useState<string>('')

    const handleFirstSelection = (e: SelectChangeEvent) => {
        setFirstSelection(e.target.value as string)
        setSecondSelection('')
        setThirdSelection('')
    }
    const handleSecondSelection = (e: SelectChangeEvent) => {
        setSecondSelection(e.target.value as string)
        setThirdSelection('')
    }

    const handleThirdSelection = (e: SelectChangeEvent) => {
        setThirdSelection(e.target.value as string)
    }

    const firstOptions: string[] = initialOptions.first
    const secondOptions: string[] = getOptions(firstSelection, initialOptions.second);
    const thirdOptions: string[] = getOptions(secondSelection, initialOptions.third);

    return {firstSelection, secondSelection, thirdSelection, firstOptions, secondOptions, thirdOptions, handleFirstSelection, handleSecondSelection, handleThirdSelection}
}

const getOptions = (selection: string, options: OptionMap): string[] => {
    return selection ? options[selection] : []
}