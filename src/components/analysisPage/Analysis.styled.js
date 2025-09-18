import styled from 'styled-components';

export const MainBlock = styled.div`
  height: 100vh;
  background: #f4f5f6;
  margin-left: 118px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: 16px;
     background: #ffffff;
     display:flex;
     align-content: center
  }
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0px;
  margin-bottom: 32px;
  padding-top: 20px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap:32px;
`;

export const NewExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 379px;
  height: 542px;
  padding-left: 32px;
  padding-bottom: 32px;
  padding-right: 16px;
  background-color: #ffffff;
  border-radius:30px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 400px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1px;
  }

  &::-webkit-scrollbar-track {
    scroll-padding-top: 100px;
    background-color: transparent;
    margin-top: 100px;
    padding-top: 100px;
  }

  scrollbar-width: thin;
  scrollbar-color: #d9d9d9 transparent;
  @media (max-width: 767px) {
    width: 375px;
    padding-right: 16px;
    padding-left: 16px;
    box-shadow:none;
    border-radius:0px;
  }
  @media (min-width: 7678x) {
    .hidden {
      display: block;
    }
    margin-right: 32px;
    border-radius: 30px;
    
  }
`;

export const NewExpenseTitle = styled.h2`
  position: sticky;
  top: 0;
  background-color: white;

  z-index: 10;
  font-size: 1.5em;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding-top: 32px;
  padding-bottom: 12px;
  @media (max-widt: 767px) {
    font-size: 24px;
  }
`;

export const PeriodElements = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;
export const PeriodElement = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  height: 18px;
  border-bottom: ${(props) => (props.$isActive ? '1px solid #1fa46c' : 'none')};
  color: ${(props) => (props.$isActive ? ' #1fa46c' : 'none')};
  &:hover {
    color: #1fa46c;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 0.5px solid #1fa46c;
  }
`;

export const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CategoryButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const AddExpenseButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const CalendarContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
   overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE и Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CalendarTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  margin-bottom: 12px;
`;

export const CalendarControls = styled.div`
  display: flex;
  gap: 10px;
`;

export const CalendarButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  margin-bottom: 30px;
  color: #999999;
  border-bottom: 1px solid #999999;
  position: sticky;
  top: 72px;
  background-color: white;
`;

export const DayOfWeek = styled.div`
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
  margin-bottom: 24px;
`;

export const Day = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: #f4f5f6;
  border: 1px solid #eee;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;

  &:hover {
    background-color: #dbffe9;
  }

  &.selected {
    background-color: #dbffe9;
    color: #1fa46c;
  }

  &.today {
    background-color: #9cea9fa6;
  }
`;

export const ExpensesTableContainer = styled.div`
  width: 789px;
  height: 540px;
  top: 100px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    width: 375px;
    border-radius: 0px;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: none;
  }

  @media ((max-width: 767px){
    width: 375px;
  }
  @media (min-width:768px) {
    .hidden {
      display: block;
    }
  }
`;

export const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 12px;
  margin-bottom: 20px;
  margin-top: 32px;
`;
export const H3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin-left: 32px;
`;
export const FiltersContainer = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 32px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #999999;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;
`;

export const TableHead = styled.thead`
  color: #999999;
  border-bottom: 1px solid #ddd;
`;

export const TableHeaderCell = styled.th`
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;

  &:first-child {
    padding-left: 32px;
  }

  &:last-child {
    padding-right: 108px;
  }

  &:nth-child(2) {
    padding-right: 30px;
  }
  &:nth-child(3) {
    width: 170px;
  }
`;

export const TableRow = styled.tr`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const TableCell = styled.td`
  padding-top: 20px;

  &:first-child {
    padding-left: 32px;
    padding-right: 10px;
  }

  &:last-child {
    padding-right: 12px;
  }

  &:nth-child(3) {
    width: 170px;
  }

  &:nth-child(5) {
    width: 12px;
    padding-left: 82px;
  }
`;

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
    border-color: #1fa46c;
    outline: none;
  }
`;

export const CategoryButton = styled.button`
  background-color: #eee;
  border: none;
  border-radius: 30px;
  padding-top: 8px;
  padding-right: 20px;
  padding-bottom: 8px;
  padding-left: 20px;
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

  &:hover {
    background-color: #ddd;
  }
`;

export const YearContainer = styled.div`
  border-bottom: 1px solid #999999;
`;

export const YearTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const MonthsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
  color: #000000;
`;

export const MonthName = styled.div`
  height: 34px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: #f4f5f6;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;

  &.selected {
    background-color: #dbffe9;
    color: #1fa46c;
  }
`;
export const ChartContainer = styled.div`
  width: 100%;
  height: 387px;
  padding: 20px;
  margin-bottom: 0;
  border-radius: 12px;
`;
export const ButtonPeriod = styled.button`
  display: none;
  border-radius: 6px;
  height: 39px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  width: 343px;
  &:hover {
    background-color: #147049;
  }

  background-color: #1fa46c;
  @media (max-width: 1024px) {
    display: block;
  }
`;
export const BackDiagramm = styled.div`
  with: 131px;
  height: 18px;
  margin-top: 24px;
  magin-botom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
export const BackImage = styled.img`
  width: 14px;
  height: 14px;
`;
export const BackTitle = styled.p`
  color: rgba(153, 153, 153, 1);

  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: center;
`;
export const ButtonBox = styled.div`
  width: 375px;
  height: 87px;
  padding: 24px 16px 24px 16px;
  background-color: #ffffff;
`;
