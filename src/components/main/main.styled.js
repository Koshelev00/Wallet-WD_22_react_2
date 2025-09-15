import styled from 'styled-components'

export const MainBlock = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: #f4f5f6;
    min-height: 100vh;
`

export const H2 = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0px;
    padding-top: 20px;
`

export const ContentContainer = styled.div`
    display: flex;
    margin-top: 32px;
    gap: 36px;
`

export const ExpensesTableContainer = styled.div`
    width: 789px;
    border-radius: 30px;
    background-color: #fff;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 32px;
    overflow-x: auto;
`

export const NewExpenseContainer = styled.div`
    width: 379px;
    border-radius: 30px;
    background-color: #fff;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 32px;
`

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
`

export const H3 = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
`

export const FiltersRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export const FilterWrapper = styled.div`
    position: relative;
    display: inline-block;
`

export const FilterButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    cursor: pointer;
`

export const GreenLink = styled.span`
    color: #1fa46c;
    &:hover {
        text-decoration: underline;
    }
`

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

export const DropdownItem = styled.div`
    padding: 8px 20px;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 7px;
    width: fit-content;
    border-radius: 30px;
    background-color: #f0f0f0;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        background-color: #dbffe9;
        color: #1fa46c;

        img,
        svg {
            filter: brightness(0) saturate(100%) invert(39%) sepia(70%)
                saturate(2756%) hue-rotate(88deg) brightness(97%) contrast(99%);
        }
    }
`

export const DropdownArrow = styled.img`
    margin-left: 8px;
    height: 7px;
    transition: transform 0.3s ease;
    transform: ${(props) =>
        props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    position: relative;
    table-layout: auto;
`

export const TableHead = styled.thead`
    color: #999999;
    border-bottom: 1px solid #ddd;
`

export const TableHeaderCell = styled.th`
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    white-space: nowrap;

    &:first-child {
        padding-left: 0;
        min-width: 150px;
    }

    &:last-child {
        padding-right: 108px;
        width: 40px;
    }

    &:nth-child(2) {
        padding-right: 30px;
        min-width: 120px;
    }

    &:nth-child(3) {
        min-width: 100px;
    }

    &:nth-child(4) {
        min-width: 100px;
    }
`

export const TableRow = styled.tr`
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    background-color: ${(props) =>
        props.$isEditing ? '#DBFFE9' : 'transparent'};
    color: ${(props) => (props.$isEditing ? '#1FA46C' : 'black')};
`

export const TableCell = styled.td`
    padding-top: 14px;
    white-space: nowrap;

    &:first-child {
        padding-left: 0;
        padding-right: 10px;
        min-width: 150px;
    }

    &:last-child {
        padding-right: 12px;
        width: 40px;
    }

    &:nth-child(2) {
        min-width: 120px;
    }

    &:nth-child(3) {
        min-width: 100px;
    }

    &:nth-child(4) {
        min-width: 100px;
    }

    &:nth-child(5) {
        padding-left: 82px;
    }
`

export const EditButton = styled.button`
    border: none;
    background: none;
    padding: 0 8px;
    cursor: pointer;
`

export const EditIcon = styled.img`
    width: 12px;
    height: 12px;
`


export const NewExpenseTitle = styled.h2`
    margin-bottom: 26px;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
`

export const InputLabel = styled.label`
    display: block;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
`

export const ErrorStar = styled.span`
    color: red;
`

export const InputField = styled.input`
    width: 100%;
    padding: 12px;
    margin-bottom: 22px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;

    &:focus {
        outline: none;
    }
    border-color: ${({
        $descriptionerror,
        $dateerror,
        $amounterror,
        $newdate,
        $newamount,
        $errors = {},
        $newdescription,
    }) => {
        if ($descriptionerror || $errors.description) {
            return 'red'
        }
        if ($dateerror || $errors.date) {
            return 'red'
        }
        if ($amounterror || $errors.amount) {
            return 'red'
        }
        if ($newdescription) {
            return '#1FA46C'
        }
        if ($newdate) {
            return '#1FA46C'
        }
        if ($newamount) {
            return '#1FA46C'
        }
        return '#999999'
    }};

    background-color: ${({
        $descriptionerror,
        $dateerror,
        $amounterror,
        $newdate,
        $newamount,
        $errors = {},
        $newdescription,
    }) => {
        if ($descriptionerror || $errors.description) {
            return '#FFF5F5'
        }
        if ($dateerror || $errors.date) {
            return '#FFF5F5'
        }
        if ($amounterror || $errors.amount) {
            return '#FFF5F5'
        }
        if ($newdescription) {
            return '#DBFFE9'
        }
        if ($newdate) {
            return '#DBFFE9'
        }
        if ($newamount) {
            return '#DBFFE9'
        }
        return '#FFFFFF'
    }};
`

export const CategoryButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 26px;
`

export const CategoryButton = styled.button`
    border: none;
    border-radius: 30px;
    padding: 8px 20px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    vertical-align: middle;
    background-color: #f0f0f0;

    &:hover {
        background-color: #dbffe9;
        color: #1fa46c;

        img,
        svg {
            filter: brightness(0) saturate(100%) invert(39%) sepia(70%)
                saturate(2756%) hue-rotate(88deg) brightness(97%) contrast(99%);
        }
    }

    &.selected {
        background-color: #dbffe9;
        color: #1fa46c;

        img,
        svg {
            filter: brightness(0) saturate(100%) invert(39%) sepia(70%)
                saturate(2756%) hue-rotate(88deg) brightness(97%) contrast(99%);
        }
    }
`

export const CategoryIcon = styled.img`
    width: 14px;
    height: 14px;
`

export const AddExpenseButton = styled.button`
    background-color: ${(props) =>
        props.$initialGreen
            ? '#1fa46c'
            : props.$isbuttonvalid
            ? '#1fa46c'
            : '#999999'};
    cursor: ${(props) => (props.$isbuttonvalid ? 'pointer' : 'not-allowed')};
    color: white;
    border: none;
    font-size: 1em;
    width: 313px;
    height: 39px;
    border-radius: 6px;
    gap: 12px;
    padding: 12px;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${(props) =>
            props.$isbuttonvalid ? '#147049' : '#7b7878'};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`

export const CancelButton = styled.button`
    background-color: #999999;
    color: white;
    border: none;
    cursor: pointer;
    width: 313px;
    height: 39px;
    border-radius: 6px;
    padding: 12px;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #777777;
    }
`

export const DeleteButton = styled.button`
    border: none;
    background: none;
    padding: 0 8px;
    cursor: pointer;
`

export const DeleteIcon = styled.img`
    width: 12px;
    height: 12px;
`
