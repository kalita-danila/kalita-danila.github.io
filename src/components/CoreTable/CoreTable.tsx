import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CoreTable() {
  const [firstYear, setFirstYear] = useState('');
  const [secondYear, setSecondYear] = useState('');
  const [thirdYear, setThirdYear] = useState('');

  const [FY1110, setFY1110] = useState(localStorage.getItem('FY1110') || '');
  const [SY1110, setSY1110] = useState(localStorage.getItem('SY1110') || '');
  const [TY1110, setTY1110] = useState(localStorage.getItem('TY1110') || '');

  const [FY1120, setFY1120] = useState(localStorage.getItem('FY1120') || '');
  const [SY1120, setSY1120] = useState(localStorage.getItem('SY1120') || '');
  const [TY1120, setTY1120] = useState(localStorage.getItem('TY1120') || '');

  const [FY1130, setFY1130] = useState(localStorage.getItem('FY1130') || '');
  const [SY1130, setSY1130] = useState(localStorage.getItem('SY1130') || '');
  const [TY1130, setTY1130] = useState(localStorage.getItem('TY1130') || '');

  const [FY1140, setFY1140] = useState(localStorage.getItem('FY1140') || '');
  const [SY1140, setSY1140] = useState(localStorage.getItem('SY1140') || '');
  const [TY1140, setTY1140] = useState(localStorage.getItem('TY1140') || '');

  const [FY1150, setFY1150] = useState(localStorage.getItem('FY1150') || '');
  const [SY1150, setSY1150] = useState(localStorage.getItem('SY1150') || '');
  const [TY1150, setTY1150] = useState(localStorage.getItem('TY1150') || '');

  const [FY1160, setFY1160] = useState(localStorage.getItem('FY1160') || '');
  const [SY1160, setSY1160] = useState(localStorage.getItem('SY1160') || '');
  const [TY1160, setTY1160] = useState(localStorage.getItem('TY1160') || '');

  const [FY1170, setFY1170] = useState(localStorage.getItem('FY1170') || '');
  const [SY1170, setSY1170] = useState(localStorage.getItem('SY1170') || '');
  const [TY1170, setTY1170] = useState(localStorage.getItem('TY1170') || '');

  const [FY1180, setFY1180] = useState(localStorage.getItem('FY1180') || '');
  const [SY1180, setSY1180] = useState(localStorage.getItem('SY1180') || '');
  const [TY1180, setTY1180] = useState(localStorage.getItem('TY1180') || '');

  const [FY1190, setFY1190] = useState(localStorage.getItem('FY1190') || '');
  const [SY1190, setSY1190] = useState(localStorage.getItem('SY1190') || '');
  const [TY1190, setTY1190] = useState(localStorage.getItem('TY1190') || '');

  const [FY1100, setFY1100] = useState<any>('');
  const [SY1100, setSY1100] = useState<any>('');
  const [TY1100, setTY1100] = useState<any>('');

  const [FY1210, setFY1210] = useState(localStorage.getItem('FY1210') || '');
  const [SY1210, setSY1210] = useState(localStorage.getItem('SY1210') || '');
  const [TY1210, setTY1210] = useState(localStorage.getItem('TY1210') || '');

  const [FY1220, setFY1220] = useState(localStorage.getItem('FY1220') || '');
  const [SY1220, setSY1220] = useState(localStorage.getItem('SY1220') || '');
  const [TY1220, setTY1220] = useState(localStorage.getItem('TY1220') || '');

  const [FY1230, setFY1230] = useState(localStorage.getItem('FY1230') || '');
  const [SY1230, setSY1230] = useState(localStorage.getItem('SY1230') || '');
  const [TY1230, setTY1230] = useState(localStorage.getItem('TY1230') || '');

  const [FY1240, setFY1240] = useState(localStorage.getItem('FY1240') || '');
  const [SY1240, setSY1240] = useState(localStorage.getItem('SY1240') || '');
  const [TY1240, setTY1240] = useState(localStorage.getItem('TY1240') || '');

  const [FY1250, setFY1250] = useState(localStorage.getItem('FY1250') || '');
  const [SY1250, setSY1250] = useState(localStorage.getItem('SY1250') || '');
  const [TY1250, setTY1250] = useState(localStorage.getItem('TY1250') || '');

  const [FY1260, setFY1260] = useState(localStorage.getItem('FY1260') || '');
  const [SY1260, setSY1260] = useState(localStorage.getItem('SY1260') || '');
  const [TY1260, setTY1260] = useState(localStorage.getItem('TY1260') || '');

  const [FY1200, setFY1200] = useState<any>('');
  const [SY1200, setSY1200] = useState<any>('');
  const [TY1200, setTY1200] = useState<any>('');

  const [FY1310, setFY1310] = useState(localStorage.getItem('FY1310') || '');
  const [SY1310, setSY1310] = useState(localStorage.getItem('SY1310') || '');
  const [TY1310, setTY1310] = useState(localStorage.getItem('TY1310') || '');
  
  const [FY1320, setFY1320] = useState(localStorage.getItem('FY1320') || '');
  const [SY1320, setSY1320] = useState(localStorage.getItem('SY1320') || '');
  const [TY1320, setTY1320] = useState(localStorage.getItem('TY1320') || '');
  
  const [FY1340, setFY1340] = useState(localStorage.getItem('FY1340') || '');
  const [SY1340, setSY1340] = useState(localStorage.getItem('SY1340') || '');
  const [TY1340, setTY1340] = useState(localStorage.getItem('TY1340') || '');
  
  const [FY1350, setFY1350] = useState(localStorage.getItem('FY1350') || '');
  const [SY1350, setSY1350] = useState(localStorage.getItem('SY1350') || '');
  const [TY1350, setTY1350] = useState(localStorage.getItem('TY1350') || '');
  
  const [FY1360, setFY1360] = useState(localStorage.getItem('FY1360') || '');
  const [SY1360, setSY1360] = useState(localStorage.getItem('SY1360') || '');
  const [TY1360, setTY1360] = useState(localStorage.getItem('TY1360') || '');
  
  const [FY1370, setFY1370] = useState(localStorage.getItem('FY1370') || '');
  const [SY1370, setSY1370] = useState(localStorage.getItem('SY1370') || '');
  const [TY1370, setTY1370] = useState(localStorage.getItem('TY1370') || '');

  const [FY1300, setFY1300] = useState<any>('');
  const [SY1300, setSY1300] = useState<any>('');
  const [TY1300, setTY1300] = useState<any>('');

  const [FY1410, setFY1410] = useState(localStorage.getItem('FY1410') || '');
  const [SY1410, setSY1410] = useState(localStorage.getItem('SY1410') || '');
  const [TY1410, setTY1410] = useState(localStorage.getItem('TY1410') || '');
  
  const [FY1420, setFY1420] = useState(localStorage.getItem('FY1420') || '');
  const [SY1420, setSY1420] = useState(localStorage.getItem('SY1420') || '');
  const [TY1420, setTY1420] = useState(localStorage.getItem('TY1420') || '');
  
  const [FY1430, setFY1430] = useState(localStorage.getItem('FY1430') || '');
  const [SY1430, setSY1430] = useState(localStorage.getItem('SY1430') || '');
  const [TY1430, setTY1430] = useState(localStorage.getItem('TY1430') || '');
  
  const [FY1450, setFY1450] = useState(localStorage.getItem('FY1450') || '');
  const [SY1450, setSY1450] = useState(localStorage.getItem('SY1450') || '');
  const [TY1450, setTY1450] = useState(localStorage.getItem('TY1450') || '');

  const [FY1400, setFY1400] = useState<any>('');
  const [SY1400, setSY1400] = useState<any>('');
  const [TY1400, setTY1400] = useState<any>('');

  const [FY1510, setFY1510] = useState(localStorage.getItem('FY1510') || '');
  const [SY1510, setSY1510] = useState(localStorage.getItem('SY1510') || '');
  const [TY1510, setTY1510] = useState(localStorage.getItem('TY1510') || '');

  const [FY1520, setFY1520] = useState(localStorage.getItem('FY1520') || '');
  const [SY1520, setSY1520] = useState(localStorage.getItem('SY1520') || '');
  const [TY1520, setTY1520] = useState(localStorage.getItem('TY1520') || '');

  const [FY1530, setFY1530] = useState(localStorage.getItem('FY1530') || '');
  const [SY1530, setSY1530] = useState(localStorage.getItem('SY1530') || '');
  const [TY1530, setTY1530] = useState(localStorage.getItem('TY1530') || '');

  const [FY1540, setFY1540] = useState(localStorage.getItem('FY1540') || '');
  const [SY1540, setSY1540] = useState(localStorage.getItem('SY1540') || '');
  const [TY1540, setTY1540] = useState(localStorage.getItem('TY1540') || '');

  const [FY1550, setFY1550] = useState(localStorage.getItem('FY1550') || '');
  const [SY1550, setSY1550] = useState(localStorage.getItem('SY1550') || '');
  const [TY1550, setTY1550] = useState(localStorage.getItem('TY1550') || '');

  const [FY1500, setFY1500] = useState<any>('');
  const [SY1500, setSY1500] = useState<any>('');
  const [TY1500, setTY1500] = useState<any>('');

  const [FY1600, setFY1600] = useState<any>('');
  const [SY1600, setSY1600] = useState<any>('');
  const [TY1600, setTY1600] = useState<any>('');

  const [FY1700, setFY1700] = useState<any>('');
  const [SY1700, setSY1700] = useState<any>('');
  const [TY1700, setTY1700] = useState<any>('');

  useEffect(() => {
    setFY1100(Number(FY1110) + Number(FY1120) + Number(FY1130) + Number(FY1140) + Number(FY1150) + Number(FY1160) + Number(FY1170) + Number(FY1180) + Number(FY1190));
    setSY1100(Number(SY1110) + Number(SY1120) + Number(SY1130) + Number(SY1140) + Number(SY1150) + Number(SY1160) + Number(SY1170) + Number(SY1180) + Number(SY1190));
    setTY1100(Number(TY1110) + Number(TY1120) + Number(TY1130) + Number(TY1140) + Number(TY1150) + Number(TY1160) + Number(TY1170) + Number(TY1180) + Number(TY1190));
  }, [FY1110, FY1120, FY1130, FY1140, FY1150, FY1160, FY1170, FY1180, FY1190, SY1110, SY1120, SY1130, SY1140, SY1150, SY1160, SY1170, SY1180, SY1190, TY1110, TY1120, TY1130, TY1140, TY1150, TY1160, TY1170, TY1180, TY1190]);

  useEffect(() => {
    setFY1200(Number(FY1210) + Number(FY1220) + Number(FY1230) + Number(FY1240) + Number(FY1250) + Number(FY1260));
    setSY1200(Number(SY1210) + Number(SY1220) + Number(SY1230) + Number(SY1240) + Number(SY1250) + Number(SY1260));
    setTY1200(Number(TY1210) + Number(TY1220) + Number(TY1230) + Number(TY1240) + Number(TY1250) + Number(TY1260));
  }, [FY1210, FY1220, FY1230, FY1240, FY1250, FY1260, SY1210, SY1220, SY1230, SY1240, SY1250, SY1260, TY1210, TY1220, TY1230, TY1240, TY1250, TY1260]);

  useEffect(() => {
    setFY1300(Number(FY1310) + Number(FY1320) + Number(FY1340) + Number(FY1350) + Number(FY1360) + Number(FY1370));
    setSY1300(Number(SY1310) + Number(SY1320) + Number(SY1340) + Number(SY1350) + Number(SY1360) + Number(SY1370));
    setTY1300(Number(TY1310) + Number(TY1320) + Number(TY1340) + Number(TY1350) + Number(TY1360) + Number(TY1370));
  }, [FY1310, FY1320, FY1340, FY1350, FY1360, FY1370, SY1310, SY1320, SY1340, SY1350, SY1360, SY1370, TY1310, TY1320, TY1340, TY1350, TY1360, TY1370]);

  useEffect(() => {
    setFY1400(Number(FY1410) + Number(FY1420) + Number(FY1430) + Number(FY1450));
    setSY1400(Number(SY1410) + Number(SY1420) + Number(SY1430) + Number(SY1450));
    setTY1400(Number(TY1410) + Number(TY1420) + Number(TY1430) + Number(TY1450));
  }, [FY1410, FY1420, FY1430, FY1450, SY1410, SY1420, SY1430, SY1450, TY1410, TY1420, TY1430, TY1450]);

  useEffect(() => {
    setFY1500(Number(FY1510) + Number(FY1520) + Number(FY1530) + Number(FY1540) + Number(FY1550));
    setSY1500(Number(SY1510) + Number(SY1520) + Number(SY1530) + Number(SY1540) + Number(SY1550));
    setTY1500(Number(TY1510) + Number(TY1520) + Number(TY1530) + Number(TY1540) + Number(TY1550));
  }, [FY1510, FY1520, FY1530, FY1540, FY1550, SY1510, SY1520, SY1530, SY1540, SY1550, TY1510, TY1520, TY1530, TY1540, TY1550]);

  useEffect(() => {
    setFY1600(Number(FY1100) + Number(FY1200));
    setSY1600(Number(SY1100) + Number(SY1200));
    setTY1600(Number(TY1100) + Number(TY1200));
  }, [FY1100, FY1200, SY1100, SY1200, TY1100, TY1200]);

  useEffect(() => {
    setFY1700(Number(FY1300) + Number(FY1400) + Number(FY1500));
    setSY1700(Number(SY1300) + Number(SY1400) + Number(SY1500));
    setTY1700(Number(TY1300) + Number(TY1400) + Number(TY1500));
  }, [FY1300, FY1400, FY1500, SY1300, SY1400, SY1500, TY1300, TY1400, TY1500]);

  const [FY2110, setFY2110] = useState(localStorage.getItem('FY2110') || '');
  const [SY2110, setSY2110] = useState(localStorage.getItem('SY2110') || '');
  const [TY2110, setTY2110] = useState(localStorage.getItem('TY2110') || '');
  
  const [FY2120, setFY2120] = useState(localStorage.getItem('FY2120') || '');
  const [SY2120, setSY2120] = useState(localStorage.getItem('SY2120') || '');
  const [TY2120, setTY2120] = useState(localStorage.getItem('TY2120') || '');

  const [FY2100, setFY2100] = useState<any>('');
  const [SY2100, setSY2100] = useState<any>('');
  const [TY2100, setTY2100] = useState<any>('');

  useEffect(() => {
    setFY2100(Number(FY2110) + Number(FY2120));
    setSY2100(Number(SY2110) + Number(SY2120));
    setTY2100(Number(TY2110) + Number(TY2120));
  }, [FY2110, FY2120, SY2110, SY2120, TY2110, TY2120]);

  const [FY2210, setFY2210] = useState(localStorage.getItem('FY2210') || '');
  const [SY2210, setSY2210] = useState(localStorage.getItem('SY2210') || '');
  const [TY2210, setTY2210] = useState(localStorage.getItem('TY2210') || '');
  
  const [FY2220, setFY2220] = useState(localStorage.getItem('FY2220') || '');
  const [SY2220, setSY2220] = useState(localStorage.getItem('SY2220') || '');
  const [TY2220, setTY2220] = useState(localStorage.getItem('TY2220') || '');
  
  const [FY2200, setFY2200] = useState<any>('');
  const [SY2200, setSY2200] = useState<any>('');
  const [TY2200, setTY2200] = useState<any>('');

  useEffect(() => {
    setFY2200(Number(FY2100) - Number(FY2210) - Number(FY2220));
    setSY2200(Number(SY2100) - Number(SY2210) - Number(SY2220));
    setTY2200(Number(TY2100) - Number(TY2210) - Number(TY2220));
  }, [FY2210, FY2220, SY2210, SY2220, TY2210, TY2220, FY2100, SY2100, TY2100]);

  const [FY2310, setFY2310] = useState(localStorage.getItem('FY2310') || '');
  const [SY2310, setSY2310] = useState(localStorage.getItem('SY2310') || '');
  const [TY2310, setTY2310] = useState(localStorage.getItem('TY2310') || '');
  
  const [FY2320, setFY2320] = useState(localStorage.getItem('FY2320') || '');
  const [SY2320, setSY2320] = useState(localStorage.getItem('SY2320') || '');
  const [TY2320, setTY2320] = useState(localStorage.getItem('TY2320') || '');
  
  const [FY2330, setFY2330] = useState(localStorage.getItem('FY2330') || '');
  const [SY2330, setSY2330] = useState(localStorage.getItem('SY2330') || '');
  const [TY2330, setTY2330] = useState(localStorage.getItem('TY2330') || '');
  
  const [FY2340, setFY2340] = useState(localStorage.getItem('FY2340') || '');
  const [SY2340, setSY2340] = useState(localStorage.getItem('SY2340') || '');
  const [TY2340, setTY2340] = useState(localStorage.getItem('TY2340') || '');
  
  const [FY2350, setFY2350] = useState(localStorage.getItem('FY2350') || '');
  const [SY2350, setSY2350] = useState(localStorage.getItem('SY2350') || '');
  const [TY2350, setTY2350] = useState(localStorage.getItem('TY2350') || '');

  const [FY2300, setFY2300] = useState<any>('');
  const [SY2300, setSY2300] = useState<any>('');
  const [TY2300, setTY2300] = useState<any>('');

  useEffect(() => {
    setFY2300(Number(FY2200) + Number(FY2310) + Number(FY2320) + Number(FY2330) + Number(FY2340) + Number(FY2350));
    setSY2300(Number(SY2200) + Number(SY2310) + Number(SY2320) + Number(SY2330) + Number(SY2340) + Number(SY2350));
    setTY2300(Number(TY2200) + Number(TY2310) + Number(TY2320) + Number(TY2330) + Number(TY2340) + Number(TY2350));
  }, [FY2310, FY2320, FY2330, FY2340, FY2350, SY2310, SY2320, SY2330, SY2340, SY2350, TY2310, TY2320, TY2330, TY2340, TY2350, FY2200, SY2200, TY2200]);

  const [FY2400, setFY2400] = useState<any>(localStorage.getItem('TY1160') || '');
  const [SY2400, setSY2400] = useState<any>(localStorage.getItem('TY1160') || '');
  const [TY2400, setTY2400] = useState<any>(localStorage.getItem('TY1160') || '');

  useEffect(() => {
    setFY2400((Number(FY2300) - (Number(FY2300) * 0.13)).toFixed(2));
    setSY2400((Number(SY2300) - (Number(SY2300) * 0.13)).toFixed(2));
    setTY2400((Number(TY2300) - (Number(TY2300) * 0.13)).toFixed(2));
  }, [FY2300, SY2300, TY2300, FY2300, SY2300, TY2300]);

  const [FY2510, setFY2510] = useState(localStorage.getItem('FY2510') || '');
  const [SY2510, setSY2510] = useState(localStorage.getItem('SY2510') || '');
  const [TY2510, setTY2510] = useState(localStorage.getItem('TY2510') || '');
  
  const [FY2520, setFY2520] = useState(localStorage.getItem('FY2520') || '');
  const [SY2520, setSY2520] = useState(localStorage.getItem('SY2520') || '');
  const [TY2520, setTY2520] = useState(localStorage.getItem('TY2520') || '');
  
  const [FY2530, setFY2530] = useState(localStorage.getItem('FY2530') || '');
  const [SY2530, setSY2530] = useState(localStorage.getItem('SY2530') || '');
  const [TY2530, setTY2530] = useState(localStorage.getItem('TY2530') || '');

  const [FY2500, setFY2500] = useState<any>('');
  const [SY2500, setSY2500] = useState<any>('');
  const [TY2500, setTY2500] = useState<any>('');

  useEffect(() => {
    setFY2500(Number(FY2510) + Number(FY2520) + Number(FY2530));
    setSY2500(Number(SY2510) + Number(SY2520) + Number(SY2530));
    setTY2500(Number(TY2510) + Number(TY2520) + Number(TY2530));
  }, [FY2510, FY2520, FY2530, SY2510, SY2520, SY2530, TY2510, TY2520, TY2530]);

  return (
    <TableContainer component={Paper}>
      <h2>БУХГАЛТЕРСКИЙ БАЛАНС</h2>
      <Button variant="contained" color="error" onClick={() => {localStorage.clear(); location.reload();}} style={{marginBottom: '15px'}}>Очистить форму</Button>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>АКТИВ</div>
              <div>I. ВНЕОБОРОТНЫЕ АКТИВЫ</div>
            </StyledTableCell>
            <StyledTableCell align="left">Код</StyledTableCell>
            <StyledTableCell align="left">
              <label>На 31 декабря
              <input
                onChange={(e) => setFirstYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={firstYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
            <StyledTableCell align="left">
              <label>На 31 декабря
              <input
                onChange={(e) => setSecondYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={secondYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
            <StyledTableCell align="left">
              <label>На 31 декабря
              <input
                onChange={(e) => setThirdYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={thirdYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1110}>
            <StyledTableCell component="th" scope="row">
              Нематериальные активы
            </StyledTableCell>
            <StyledTableCell align="left">{1110}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1110} onChange={(event: any) => {setFY1110(event.target.value); localStorage.setItem('FY1110', event.target.value)}} id="1110-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1110} onChange={(event: any) => {setSY1110(event.target.value); localStorage.setItem('SY1110', event.target.value)}} id="1110-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1110} onChange={(event: any) => {setTY1110(event.target.value); localStorage.setItem('TY1110', event.target.value)}} id="1110-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1120}>
            <StyledTableCell component="th" scope="row">
              Результаты исследований и разработок
            </StyledTableCell>
            <StyledTableCell align="left">{1120}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1120} onChange={(event: any) => {setFY1120(event.target.value); localStorage.setItem('FY1120', event.target.value)}} id="1120-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1120} onChange={(event: any) => {setSY1120(event.target.value); localStorage.setItem('SY1120', event.target.value)}} id="1120-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1120} onChange={(event: any) => {setTY1120(event.target.value); localStorage.setItem('TY1120', event.target.value)}} id="1120-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1130}>
            <StyledTableCell component="th" scope="row">
              Результаты исследований и разработок
            </StyledTableCell>
            <StyledTableCell align="left">{1130}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1130} onChange={(event: any) => {setFY1130(event.target.value); localStorage.setItem('FY1130', event.target.value)}} id="1130-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1130} onChange={(event: any) => {setSY1130(event.target.value); localStorage.setItem('SY1130', event.target.value)}} id="1130-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1130} onChange={(event: any) => {setTY1130(event.target.value); localStorage.setItem('TY1130', event.target.value)}} id="1130-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1140}>
            <StyledTableCell component="th" scope="row">
              Материальные поисковые активы
            </StyledTableCell>
            <StyledTableCell align="left">{1140}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1140} onChange={(event: any) => {setFY1140(event.target.value); localStorage.setItem('FY1140', event.target.value)}} id="1140-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1140} onChange={(event: any) => {setSY1140(event.target.value); localStorage.setItem('SY1140', event.target.value)}} id="1140-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1140} onChange={(event: any) => {setTY1140(event.target.value); localStorage.setItem('TY1140', event.target.value)}} id="1140-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1150}>
            <StyledTableCell component="th" scope="row">
              Основные средства
            </StyledTableCell>
            <StyledTableCell align="left">{1150}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1150} onChange={(event: any) => {setFY1150(event.target.value); localStorage.setItem('FY1150', event.target.value)}} id="1150-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1150} onChange={(event: any) => {setSY1150(event.target.value); localStorage.setItem('SY1150', event.target.value)}} id="1150-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1150} onChange={(event: any) => {setTY1150(event.target.value); localStorage.setItem('TY1150', event.target.value)}} id="1150-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1160}>
            <StyledTableCell component="th" scope="row">
              Доходные вложения в материальные ценности
            </StyledTableCell>
            <StyledTableCell align="left">{1160}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1160} onChange={(event: any) => {setFY1160(event.target.value); localStorage.setItem('FY1160', event.target.value)}} id="1160-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1160} onChange={(event: any) => {setSY1160(event.target.value); localStorage.setItem('SY1160', event.target.value)}} id="1160-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1160} onChange={(event: any) => {setTY1160(event.target.value); localStorage.setItem('TY1160', event.target.value)}} id="1160-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1170}>
            <StyledTableCell component="th" scope="row">
              Финансовые вложения
            </StyledTableCell>
            <StyledTableCell align="left">{1170}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1170} onChange={(event: any) => {setFY1170(event.target.value); localStorage.setItem('FY1170', event.target.value)}} id="1170-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1170} onChange={(event: any) => {setSY1170(event.target.value); localStorage.setItem('SY1170', event.target.value)}} id="1170-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1170} onChange={(event: any) => {setTY1170(event.target.value); localStorage.setItem('TY1170', event.target.value)}} id="1170-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1180}>
            <StyledTableCell component="th" scope="row">
              Отложенные налоговые активы
            </StyledTableCell>
            <StyledTableCell align="left">{1180}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1180} onChange={(event: any) => {setFY1180(event.target.value); localStorage.setItem('FY1180', event.target.value)}} id="1180-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1180} onChange={(event: any) => {setSY1180(event.target.value); localStorage.setItem('SY1180', event.target.value)}} id="1180-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1180} onChange={(event: any) => {setTY1180(event.target.value); localStorage.setItem('TY1180', event.target.value)}} id="1180-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1190}>
            <StyledTableCell component="th" scope="row">
              Прочие внеоборотные активы
            </StyledTableCell>
            <StyledTableCell align="left">{1190}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1190} onChange={(event: any) => {setFY1190(event.target.value); localStorage.setItem('FY1190', event.target.value)}} id="1190-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1190} onChange={(event: any) => {setSY1190(event.target.value); localStorage.setItem('SY1190', event.target.value)}} id="1190-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1190} onChange={(event: any) => {setTY1190(event.target.value); localStorage.setItem('TY1190', event.target.value)}} id="1190-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1100}>
            <StyledTableCell component="th" scope="row">
              <b>Итого по разделу I</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>1100</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{FY1100}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{SY1100}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{TY1100}</b></StyledTableCell>
          </StyledTableRow>

        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>II. ОБОРОТНЫЕ АКТИВЫ</div>
            </StyledTableCell>
            <StyledTableCell align="left">Код</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1210}>
            <StyledTableCell component="th" scope="row">
            Запасы
            </StyledTableCell>
            <StyledTableCell align="left">{1210}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1210} onChange={(event: any) => {setFY1210(event.target.value); localStorage.setItem('FY1210', event.target.value)}} id="1210-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1210} onChange={(event: any) => {setSY1210(event.target.value); localStorage.setItem('SY1210', event.target.value)}} id="1210-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1210} onChange={(event: any) => {setTY1210(event.target.value); localStorage.setItem('TY1210', event.target.value)}} id="1210-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1220}>
            <StyledTableCell component="th" scope="row">
            Налог на добавленную стоимость по приобретенным ценностям
            </StyledTableCell>
            <StyledTableCell align="left">{1220}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1220} onChange={(event: any) => {setFY1220(event.target.value); localStorage.setItem('FY1220', event.target.value)}} id="1220-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1220} onChange={(event: any) => {setSY1220(event.target.value); localStorage.setItem('SY1220', event.target.value)}} id="1220-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1220} onChange={(event: any) => {setTY1220(event.target.value); localStorage.setItem('TY1220', event.target.value)}} id="1220-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1230}>
            <StyledTableCell component="th" scope="row">
            Дебиторская задолженность
            </StyledTableCell>
            <StyledTableCell align="left">{1230}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1230} onChange={(event: any) => {setFY1230(event.target.value); localStorage.setItem('FY1230', event.target.value)}} id="1230-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1230} onChange={(event: any) => {setSY1230(event.target.value); localStorage.setItem('SY1230', event.target.value)}} id="1230-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1230} onChange={(event: any) => {setTY1230(event.target.value); localStorage.setItem('TY1230', event.target.value)}} id="1230-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1240}>
            <StyledTableCell component="th" scope="row">
            Финансовые вложения (за исключением денежных эквивалентов)
            </StyledTableCell>
            <StyledTableCell align="left">{1240}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1240} onChange={(event: any) => {setFY1240(event.target.value); localStorage.setItem('FY1240', event.target.value)}} id="1240-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1240} onChange={(event: any) => {setSY1240(event.target.value); localStorage.setItem('SY1240', event.target.value)}} id="1240-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1240} onChange={(event: any) => {setTY1240(event.target.value); localStorage.setItem('TY1240', event.target.value)}} id="1240-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1250}>
            <StyledTableCell component="th" scope="row">
            Денежные средства и денежные эквиваленты
            </StyledTableCell>
            <StyledTableCell align="left">{1250}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1250} onChange={(event: any) => {setFY1250(event.target.value); localStorage.setItem('FY1250', event.target.value)}} id="1250-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1250} onChange={(event: any) => {setSY1250(event.target.value); localStorage.setItem('SY1250', event.target.value)}} id="1250-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1250} onChange={(event: any) => {setTY1250(event.target.value); localStorage.setItem('TY1250', event.target.value)}} id="1250-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1260}>
            <StyledTableCell component="th" scope="row">
            Прочие оборотные активы
            </StyledTableCell>
            <StyledTableCell align="left">{1260}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1260} onChange={(event: any) => {setFY1260(event.target.value); localStorage.setItem('FY1260', event.target.value)}} id="1260-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1260} onChange={(event: any) => {setSY1260(event.target.value); localStorage.setItem('SY1260', event.target.value)}} id="1260-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1260} onChange={(event: any) => {setTY1260(event.target.value); localStorage.setItem('TY1260', event.target.value)}} id="1260-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1200}>
            <StyledTableCell component="th" scope="row">
            <b>Итого по разделу II</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>1200</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{FY1200}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{SY1200}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{TY1200}</b></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>
              <div><b>БАЛАНС</b></div>
            </StyledTableCell>
            <StyledTableCell align="left"><b>1600</b></StyledTableCell>
            <StyledTableCell align="left"><b>{FY1600}</b></StyledTableCell>
            <StyledTableCell align="left"><b>{SY1600}</b></StyledTableCell>
            <StyledTableCell align="left"><b>{TY1600}</b></StyledTableCell>
          </StyledTableRow>
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>ПАССИВ</div>
              <div>III. КАПИТАЛ И РЕЗЕРВЫ 6</div>
            </StyledTableCell>
            <StyledTableCell align="left">Код</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1310}>
            <StyledTableCell component="th" scope="row">
            Уставный капитал (складочный капитал, уставный фонд, вклады товарищей)
            </StyledTableCell>
            <StyledTableCell align="left">{1310}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1310} onChange={(event: any) => {setFY1310(event.target.value); localStorage.setItem('FY1310', event.target.value)}} id="1310-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1310} onChange={(event: any) => {setSY1310(event.target.value); localStorage.setItem('SY1310', event.target.value)}} id="1310-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1310} onChange={(event: any) => {setTY1310(event.target.value); localStorage.setItem('TY1310', event.target.value)}} id="1310-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1320}>
            <StyledTableCell component="th" scope="row">
            Собственные акции, выкупленные у акционеров
            </StyledTableCell>
            <StyledTableCell align="left">{1320}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1320} onChange={(event: any) => {setFY1320(event.target.value); localStorage.setItem('FY1320', event.target.value)}} id="1320-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1320} onChange={(event: any) => {setSY1320(event.target.value); localStorage.setItem('SY1320', event.target.value)}} id="1320-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1320} onChange={(event: any) => {setTY1320(event.target.value); localStorage.setItem('TY1320', event.target.value)}} id="1320-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1340}>
            <StyledTableCell component="th" scope="row">
            Переоценка внеоборотных активов
            </StyledTableCell>
            <StyledTableCell align="left">{1340}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1340} onChange={(event: any) => {setFY1340(event.target.value); localStorage.setItem('FY1340', event.target.value)}} id="1340-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1340} onChange={(event: any) => {setSY1340(event.target.value); localStorage.setItem('SY1340', event.target.value)}} id="1340-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1340} onChange={(event: any) => {setTY1340(event.target.value); localStorage.setItem('TY1340', event.target.value)}} id="1340-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1350}>
            <StyledTableCell component="th" scope="row">
            Добавочный капитал (без переоценки)
            </StyledTableCell>
            <StyledTableCell align="left">{1350}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1350} onChange={(event: any) => {setFY1350(event.target.value); localStorage.setItem('FY1350', event.target.value)}} id="1350-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1350} onChange={(event: any) => {setSY1350(event.target.value); localStorage.setItem('SY1350', event.target.value)}} id="1350-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1350} onChange={(event: any) => {setTY1350(event.target.value); localStorage.setItem('TY1350', event.target.value)}} id="1350-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1360}>
            <StyledTableCell component="th" scope="row">
            Резервный капитал
            </StyledTableCell>
            <StyledTableCell align="left">{1360}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1360} onChange={(event: any) => {setFY1360(event.target.value); localStorage.setItem('FY1360', event.target.value)}} id="1360-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1360} onChange={(event: any) => {setSY1360(event.target.value); localStorage.setItem('SY1360', event.target.value)}} id="1360-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1360} onChange={(event: any) => {setTY1360(event.target.value); localStorage.setItem('TY1360', event.target.value)}} id="1360-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1370}>
            <StyledTableCell component="th" scope="row">
            Нераспределенная прибыль (непокрытый убыток)
            </StyledTableCell>
            <StyledTableCell align="left">{1370}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1370} onChange={(event: any) => {setFY1370(event.target.value); localStorage.setItem('FY1370', event.target.value)}} id="1370-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1370} onChange={(event: any) => {setSY1370(event.target.value); localStorage.setItem('SY1370', event.target.value)}} id="1370-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1370} onChange={(event: any) => {setTY1370(event.target.value); localStorage.setItem('TY1370', event.target.value)}} id="1370-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1300}>
            <StyledTableCell component="th" scope="row">
            <b>Итого по разделу III</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>1300</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{FY1300}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{SY1300}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{TY1300}</b></StyledTableCell>
          </StyledTableRow>
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>IV. ДОЛГОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА</div>
            </StyledTableCell>
            <StyledTableCell align="left">Код</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1410}>
            <StyledTableCell component="th" scope="row">
            Заемные средства
            </StyledTableCell>
            <StyledTableCell align="left">{1410}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1410} onChange={(event: any) => {setFY1410(event.target.value); localStorage.setItem('FY1410', event.target.value)}} id="1410-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1410} onChange={(event: any) => {setSY1410(event.target.value); localStorage.setItem('SY1410', event.target.value)}} id="1410-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1410} onChange={(event: any) => {setTY1410(event.target.value); localStorage.setItem('TY1410', event.target.value)}} id="1410-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1420}>
            <StyledTableCell component="th" scope="row">
            Отложенные налоговые обязательства
            </StyledTableCell>
            <StyledTableCell align="left">{1420}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1420} onChange={(event: any) => {setFY1420(event.target.value); localStorage.setItem('FY1420', event.target.value)}} id="1420-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1420} onChange={(event: any) => {setSY1420(event.target.value); localStorage.setItem('SY1420', event.target.value)}} id="1420-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1420} onChange={(event: any) => {setTY1420(event.target.value); localStorage.setItem('TY1420', event.target.value)}} id="1420-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1430}>
            <StyledTableCell component="th" scope="row">
            Оценочные обязательства
            </StyledTableCell>
            <StyledTableCell align="left">{1430}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1430} onChange={(event: any) => {setFY1430(event.target.value); localStorage.setItem('FY1430', event.target.value)}} id="1430-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1430} onChange={(event: any) => {setSY1430(event.target.value); localStorage.setItem('SY1430', event.target.value)}} id="1430-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1430} onChange={(event: any) => {setTY1430(event.target.value); localStorage.setItem('TY1430', event.target.value)}} id="1430-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1450}>
            <StyledTableCell component="th" scope="row">
            Прочие обязательства
            </StyledTableCell>
            <StyledTableCell align="left">{1450}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1450} onChange={(event: any) => {setFY1450(event.target.value); localStorage.setItem('FY1450', event.target.value)}} id="1450-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1450} onChange={(event: any) => {setSY1450(event.target.value); localStorage.setItem('SY1450', event.target.value)}} id="1450-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1450} onChange={(event: any) => {setTY1450(event.target.value); localStorage.setItem('TY1450', event.target.value)}} id="1450-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1400}>
            <StyledTableCell component="th" scope="row">
            <b>Итого по разделу IV</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>1400</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{FY1400}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{SY1400}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{TY1400}</b></StyledTableCell>
          </StyledTableRow>
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>V. КРАТКОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА</div>
            </StyledTableCell>
            <StyledTableCell align="left">Код</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1510}>
            <StyledTableCell component="th" scope="row">
            Заемные средства
            </StyledTableCell>
            <StyledTableCell align="left">{1510}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1510} onChange={(event: any) => {setFY1510(event.target.value); localStorage.setItem('FY1510', event.target.value)}} id="1510-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1510} onChange={(event: any) => {setSY1510(event.target.value); localStorage.setItem('SY1510', event.target.value)}} id="1510-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1510} onChange={(event: any) => {setTY1510(event.target.value); localStorage.setItem('TY1510', event.target.value)}} id="1510-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1520}>
            <StyledTableCell component="th" scope="row">
            Кредиторская задолженность
            </StyledTableCell>
            <StyledTableCell align="left">{1520}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1520} onChange={(event: any) => {setFY1520(event.target.value); localStorage.setItem('FY1520', event.target.value)}} id="1520-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1520} onChange={(event: any) => {setSY1520(event.target.value); localStorage.setItem('SY1520', event.target.value)}} id="1520-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1520} onChange={(event: any) => {setTY1520(event.target.value); localStorage.setItem('TY1520', event.target.value)}} id="1520-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1530}>
            <StyledTableCell component="th" scope="row">
            Доходы будущих периодов
            </StyledTableCell>
            <StyledTableCell align="left">{1530}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1530} onChange={(event: any) => {setFY1530(event.target.value); localStorage.setItem('FY1530', event.target.value)}} id="1530-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1530} onChange={(event: any) => {setSY1530(event.target.value); localStorage.setItem('SY1530', event.target.value)}} id="1530-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1530} onChange={(event: any) => {setTY1530(event.target.value); localStorage.setItem('TY1530', event.target.value)}} id="1530-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1540}>
            <StyledTableCell component="th" scope="row">
            Оценочные обязательства
            </StyledTableCell>
            <StyledTableCell align="left">{1540}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1540} onChange={(event: any) => {setFY1540(event.target.value); localStorage.setItem('FY1540', event.target.value)}} id="1540-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1540} onChange={(event: any) => {setSY1540(event.target.value); localStorage.setItem('SY1540', event.target.value)}} id="1540-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1540} onChange={(event: any) => {setTY1540(event.target.value); localStorage.setItem('TY1540', event.target.value)}} id="1540-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1550}>
            <StyledTableCell component="th" scope="row">
            Прочие обязательства
            </StyledTableCell>
            <StyledTableCell align="left">{1550}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY1550} onChange={(event: any) => {setFY1550(event.target.value); localStorage.setItem('FY1550', event.target.value)}} id="1550-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY1550} onChange={(event: any) => {setSY1550(event.target.value); localStorage.setItem('SY1550', event.target.value)}} id="1550-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY1550} onChange={(event: any) => {setTY1550(event.target.value); localStorage.setItem('TY1550', event.target.value)}} id="1550-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1500}>
            <StyledTableCell component="th" scope="row">
            <b>Итого по разделу V</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>1500</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{FY1500}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{SY1500}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{TY1500}</b></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>
              <div><b>БАЛАНС</b></div>
            </StyledTableCell>
            <StyledTableCell align="left"><b>1700</b></StyledTableCell>
            <StyledTableCell align="left"><b>{FY1700}</b></StyledTableCell>
            <StyledTableCell align="left"><b>{SY1700}</b></StyledTableCell>
            <StyledTableCell align="left"><b>{TY1700}</b></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>

      <h2>ОТЧЕТ О ФИНАНСОВЫХ РЕЗУЛЬТАТАХ</h2>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>НАИМЕНОВАНИЕ ПОКАЗАТЕЛЯ</div>
            </StyledTableCell>
            <StyledTableCell align="left">Код</StyledTableCell>
            <StyledTableCell align="left">
              <label>На 31 декабря
              <input
                onChange={(e) => setFirstYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={firstYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
            <StyledTableCell align="left">
            <label>На 31 декабря
              <input
                onChange={(e) => setSecondYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={secondYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
            <StyledTableCell align="left">
              <label>На 31 декабря
              <input
                onChange={(e) => setThirdYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={thirdYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={2110}>
            <StyledTableCell component="th" scope="row">
            Выручка 5
            </StyledTableCell>
            <StyledTableCell align="left">{2110}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2110} onChange={(event: any) => {setFY2110(event.target.value); localStorage.setItem('FY2110', event.target.value)}} id="2110-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2110} onChange={(event: any) => {setSY2110(event.target.value); localStorage.setItem('SY2110', event.target.value)}} id="2110-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2110} onChange={(event: any) => {setTY2110(event.target.value); localStorage.setItem('TY2110', event.target.value)}} id="2110-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2120}>
            <StyledTableCell component="th" scope="row">
            Себестоимость продаж
            </StyledTableCell>
            <StyledTableCell align="left">{2120}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2120} onChange={(event: any) => {setFY2120(event.target.value); localStorage.setItem('FY2120', event.target.value)}} id="2120-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2120} onChange={(event: any) => {setSY2120(event.target.value); localStorage.setItem('SY2120', event.target.value)}} id="2120-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2120} onChange={(event: any) => {setTY2120(event.target.value); localStorage.setItem('TY2120', event.target.value)}} id="2120-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2100}>
            <StyledTableCell component="th" scope="row">
              <b>Валовая прибыль (убыток)</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>2100</b>}</StyledTableCell>
            <StyledTableCell align="left"><b>{FY2100}</b></StyledTableCell>
            <StyledTableCell align="left"><b>{SY2100}</b></StyledTableCell>
            <StyledTableCell align="left"><b>{TY2100}</b></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2210}>
            <StyledTableCell component="th" scope="row">
            Коммерческие расходы
            </StyledTableCell>
            <StyledTableCell align="left">{2210}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2210} onChange={(event: any) => {setFY2210(event.target.value); localStorage.setItem('FY2210', event.target.value)}} id="2210-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2210} onChange={(event: any) => {setSY2210(event.target.value); localStorage.setItem('SY2210', event.target.value)}} id="2210-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2210} onChange={(event: any) => {setTY2210(event.target.value); localStorage.setItem('TY2210', event.target.value)}} id="2210-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2220}>
            <StyledTableCell component="th" scope="row">
            Управленческие расходы
            </StyledTableCell>
            <StyledTableCell align="left">{2220}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2220} onChange={(event: any) => {setFY2220(event.target.value); localStorage.setItem('FY2220', event.target.value)}} id="2220-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2220} onChange={(event: any) => {setSY2220(event.target.value); localStorage.setItem('SY2220', event.target.value)}} id="2220-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2220} onChange={(event: any) => {setTY2220(event.target.value); localStorage.setItem('TY2220', event.target.value)}} id="2220-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2200}>
            <StyledTableCell component="th" scope="row">
              <b>Прибыль (убыток) от продаж</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>2200</b>}</StyledTableCell>
            <StyledTableCell align="left"><b>{FY2200}</b></StyledTableCell>
            <StyledTableCell align="left"><b>{SY2200}</b></StyledTableCell>
            <StyledTableCell align="left"><b>{TY2200}</b></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2310}>
            <StyledTableCell component="th" scope="row">
            Доходы от участия в других организациях
            </StyledTableCell>
            <StyledTableCell align="left">{2310}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2310} onChange={(event: any) => {setFY2310(event.target.value); localStorage.setItem('FY2310', event.target.value)}} id="2310-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2310} onChange={(event: any) => {setSY2310(event.target.value); localStorage.setItem('SY2310', event.target.value)}} id="2310-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2310} onChange={(event: any) => {setTY2310(event.target.value); localStorage.setItem('TY2310', event.target.value)}} id="2310-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2320}>
            <StyledTableCell component="th" scope="row">
            Проценты к получению
            </StyledTableCell>
            <StyledTableCell align="left">{2320}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2320} onChange={(event: any) => {setFY2320(event.target.value); localStorage.setItem('FY2320', event.target.value)}} id="2320-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2320} onChange={(event: any) => {setSY2320(event.target.value); localStorage.setItem('SY2320', event.target.value)}} id="2320-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2320} onChange={(event: any) => {setTY2320(event.target.value); localStorage.setItem('TY2320', event.target.value)}} id="2320-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2330}>
            <StyledTableCell component="th" scope="row">
            Проценты к уплате
            </StyledTableCell>
            <StyledTableCell align="left">{2330}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2330} onChange={(event: any) => {setFY2330(event.target.value); localStorage.setItem('FY2330', event.target.value)}} id="2330-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2330} onChange={(event: any) => {setSY2330(event.target.value); localStorage.setItem('SY2330', event.target.value)}} id="2330-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2330} onChange={(event: any) => {setTY2330(event.target.value); localStorage.setItem('TY2330', event.target.value)}} id="2330-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2340}>
            <StyledTableCell component="th" scope="row">
            Прочие доходы
            </StyledTableCell>
            <StyledTableCell align="left">{2340}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2340} onChange={(event: any) => {setFY2340(event.target.value); localStorage.setItem('FY2340', event.target.value)}} id="2340-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2340} onChange={(event: any) => {setSY2340(event.target.value); localStorage.setItem('SY2340', event.target.value)}} id="2340-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2340} onChange={(event: any) => {setTY2340(event.target.value); localStorage.setItem('TY2340', event.target.value)}} id="2340-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2350}>
            <StyledTableCell component="th" scope="row">
            Прочие расходы
            </StyledTableCell>
            <StyledTableCell align="left">{2350}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2350} onChange={(event: any) => {setFY2350(event.target.value); localStorage.setItem('FY2350', event.target.value)}} id="2350-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2350} onChange={(event: any) => {setSY2350(event.target.value); localStorage.setItem('SY2350', event.target.value)}} id="2350-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2350} onChange={(event: any) => {setTY2350(event.target.value); localStorage.setItem('TY2350', event.target.value)}} id="2350-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2300}>
            <StyledTableCell component="th" scope="row">
            <b>Прибыль (убыток) до налогообложения</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>2300</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{FY2300}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{SY2300}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{TY2300}</b></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2410}>
            <StyledTableCell component="th" scope="row">
            <b>Налог на прибыль 7</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>2410</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{(Number(FY2300) * 0.13).toFixed(2)}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{(Number(SY2300) * 0.13).toFixed(2)}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{(Number(TY2300) * 0.13).toFixed(2)}</b></StyledTableCell> 
          </StyledTableRow>
          <StyledTableRow key={2400}>
            <StyledTableCell component="th" scope="row">
            <b>Чистая прибыль (убыток)</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>2400</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{FY2400}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{SY2400}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{TY2400}</b></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2510}>
            <StyledTableCell component="th" scope="row">
            Результат от переоценки внеоборотных активов,<br /> не включаемый в чистую прибыль (убыток) периода
            </StyledTableCell>
            <StyledTableCell align="left">{2510}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2510} onChange={(event: any) => {setFY2510(event.target.value); localStorage.setItem('FY2510', event.target.value)}} id="2510-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2510} onChange={(event: any) => {setSY2510(event.target.value); localStorage.setItem('SY2510', event.target.value)}} id="2510-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2510} onChange={(event: any) => {setTY2510(event.target.value); localStorage.setItem('TY2510', event.target.value)}} id="2510-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2520}>
            <StyledTableCell component="th" scope="row">
            Результат от прочих операций,<br /> не включаемый в чистую прибыль (убыток) периода
            </StyledTableCell>
            <StyledTableCell align="left">{2520}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2520} onChange={(event: any) => {setFY2520(event.target.value); localStorage.setItem('FY2520', event.target.value)}} id="2520-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2520} onChange={(event: any) => {setSY2520(event.target.value); localStorage.setItem('SY2520', event.target.value)}} id="2520-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2520} onChange={(event: any) => {setTY2520(event.target.value); localStorage.setItem('TY2520', event.target.value)}} id="2520-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2530}>
            <StyledTableCell component="th" scope="row">
            Налог на прибыль от операций, результат которых <br />не включается в чистую прибыль (убыток) периода 7
            </StyledTableCell>
            <StyledTableCell align="left">{2530}</StyledTableCell>
              <StyledTableCell align="left"><TextField value={FY2530} onChange={(event: any) => {setFY2530(event.target.value); localStorage.setItem('FY2530', event.target.value)}} id="2530-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={SY2530} onChange={(event: any) => {setSY2530(event.target.value); localStorage.setItem('SY2530', event.target.value)}} id="2530-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="left"><TextField value={TY2530} onChange={(event: any) => {setTY2530(event.target.value); localStorage.setItem('TY2530', event.target.value)}} id="2530-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2500}>
            <StyledTableCell component="th" scope="row">
            <b>Совокупный финансовый результат периода 6</b>
            </StyledTableCell>
            <StyledTableCell align="left">{<b>2500</b>}</StyledTableCell>
              <StyledTableCell align="left"><b>{FY2500}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{SY2500}</b></StyledTableCell>
              <StyledTableCell align="left"><b>{TY2500}</b></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>

      <h2>РАСЧЕТ ФОРМУЛ</h2>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>Наименование формулы</div>
            </StyledTableCell>
            <StyledTableCell align="left">Формула для расчета</StyledTableCell>
            <StyledTableCell align="left">
              <label>На 31 декабря
              <input
                onChange={(e) => setFirstYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={firstYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
            <StyledTableCell align="left">
              <label>На 31 декабря
              <input
                onChange={(e) => setSecondYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={secondYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
            <StyledTableCell align="left">
              <label>На 31 декабря
              <input
                onChange={(e) => setThirdYear(e.target.value)}
                placeholder='____'
                maxLength={4}
                value={thirdYear}
                style={{
                  width: '30px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  margin: '0 5px 0 5px',
                }}
              />года</label>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={'A0'}>
            <StyledTableCell component="th" scope="row">
            <b>Aнализ групп активов и пассивов</b>
            </StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'A1'}>
            <StyledTableCell component="th" scope="row">
            A1
            </StyledTableCell>
            <StyledTableCell align="left">{'с1240 + с1250'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1240) + Number(FY1250)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1240) + Number(SY1250)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1240) + Number(TY1250)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'A2'}>
            <StyledTableCell component="th" scope="row">
            A2
            </StyledTableCell>
            <StyledTableCell align="left">{'с1230'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1230)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1230)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1230)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'A3'}>
            <StyledTableCell component="th" scope="row">
            A3
            </StyledTableCell>
            <StyledTableCell align="left">{'с1210 + c1220 + c1260'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1210) + Number(FY1220) + Number(FY1260)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1210) + Number(SY1220) + Number(SY1260)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1210) + Number(TY1220) + Number(TY1260)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'A4'}>
            <StyledTableCell component="th" scope="row">
            A4
            </StyledTableCell>
            <StyledTableCell align="left">{'с1100'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1100)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1100)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1100)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'П1'}>
            <StyledTableCell component="th" scope="row">
            П1
            </StyledTableCell>
            <StyledTableCell align="left">{'с1520'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1520)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1520)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1520)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'П2'}>
            <StyledTableCell component="th" scope="row">
            П2
            </StyledTableCell>
            <StyledTableCell align="left">{'с1510 + c1530 + c1540 + с1550'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1510) + Number(FY1530) + Number(FY1540) + Number(FY1550)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1510) + Number(SY1530) + Number(SY1540) + Number(FY1550)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1510) + Number(TY1530) + Number(TY1540) + Number(FY1550)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'П3'}>
            <StyledTableCell component="th" scope="row">
            П3
            </StyledTableCell>
            <StyledTableCell align="left">{'с1400'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1400)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1400)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1400)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'П4'}>
            <StyledTableCell component="th" scope="row">
            П4
            </StyledTableCell>
            <StyledTableCell align="left">{'с1300'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1300)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1300)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1300)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'B0'}>
            <StyledTableCell component="th" scope="row">
            <b>Aнализ платежеспособности предприятия</b>
            </StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B1'}>
            <StyledTableCell component="th" scope="row">
            Коэф.абсолютной ликвидности
            </StyledTableCell>
            <StyledTableCell align="left">{'(с1250 + с1240 ) / (c1510 + c1520 + c1540 + c1550)'}</StyledTableCell>
              <StyledTableCell align="left">{((Number(FY1250) + Number(FY1240)) / (Number(FY1510) + Number(FY1520) + Number(FY1540) + Number(FY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(SY1250) + Number(SY1240)) / (Number(SY1510) + Number(SY1520) + Number(SY1540) + Number(SY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(TY1250) + Number(TY1240)) / (Number(TY1510) + Number(TY1520) + Number(TY1540) + Number(TY1550))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B2'}>
            <StyledTableCell component="th" scope="row">
            Коэф.критической ликвидности
            </StyledTableCell>
            <StyledTableCell align="left">{'(c1250 + с1240 + c1230 ) / (c1510 + c1520 + c1540 + c1550)'}</StyledTableCell>
              <StyledTableCell align="left">{((Number(FY1250) + Number(FY1240) + Number(FY1230)) / (Number(FY1510) + Number(FY1520) + Number(FY1540) + Number(FY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(SY1250) + Number(SY1240) + Number(SY1230)) / (Number(SY1510) + Number(SY1520) + Number(SY1540) + Number(SY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(TY1250) + Number(TY1240) + Number(TY1230)) / (Number(TY1510) + Number(TY1520) + Number(TY1540) + Number(TY1550))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B3'}>
            <StyledTableCell component="th" scope="row">
            Коэф.текущей ликвидности
            </StyledTableCell>
            <StyledTableCell align="left">{'c1200 / (c1510 + c1520 + c1540 + c1550)'}</StyledTableCell>
              <StyledTableCell align="left">{((Number(FY1200)) / (Number(FY1510) + Number(FY1520) + Number(FY1540) + Number(FY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(SY1200)) / (Number(SY1510) + Number(SY1520) + Number(SY1540) + Number(SY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(TY1200)) / (Number(TY1510) + Number(TY1520) + Number(TY1540) + Number(TY1550))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B4'}>
            <StyledTableCell component="th" scope="row">
            Коэф.маневренности функц.капитала
            </StyledTableCell>
            <StyledTableCell align="left">{'(c1200 - c1500) / c1300)'}</StyledTableCell>
              <StyledTableCell align="left">{((Number(FY1200) - Number(FY1500)) / Number(FY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(SY1200) - Number(SY1500)) / Number(SY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(TY1200) - Number(TY1500)) / Number(TY1300)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B5'}>
            <StyledTableCell component="th" scope="row">
            Доля оборотных средств в активах
            </StyledTableCell>
            <StyledTableCell align="left">{'c1200 / c1600'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY1200) / Number(FY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY1200) / Number(SY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY1200) / Number(TY1600)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B6'}>
            <StyledTableCell component="th" scope="row">
            Коэф.обеспеченности собственными средствами
            </StyledTableCell>
            <StyledTableCell align="left">{'(c1300 - c1100)/ c1200'}</StyledTableCell>
              <StyledTableCell align="left">{((Number(FY1300) - Number(FY1100)) / Number(FY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(SY1300) - Number(SY1100)) / Number(SY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(TY1300) - Number(TY1100)) / Number(TY1200)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'C0'}>
            <StyledTableCell component="th" scope="row">
            <b>Aнализ финансового состояния</b>
            </StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'C1'}>
            <StyledTableCell component="th" scope="row">
            Величина запасов
            </StyledTableCell>
            <StyledTableCell align="left">{'c1210 (B3)'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1210)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1210)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1210)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'C2'}>
            <StyledTableCell component="th" scope="row">
            Величина собственных оборотных средств
            </StyledTableCell>
            <StyledTableCell align="left">{'c1300 - c1100 (BC)'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1300) - Number(FY1100)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1300) - Number(SY1100)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1300) - Number(TY1100)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'C3'}>
            <StyledTableCell component="th" scope="row">
            Величина функционирующего капитала
            </StyledTableCell>
            <StyledTableCell align="left">{'c1300 + c1400 - c1100 (BФ)'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1300) + Number(FY1400) - Number(FY1100)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1300) + Number(SY1400) - Number(SY1100)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1300) + Number(TY1400) - Number(TY1100)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'C4'}>
            <StyledTableCell component="th" scope="row">
            Величина источников финансирования
            </StyledTableCell>
            <StyledTableCell align="left">{'c1300 + c1400 + c1500 - c1100 (BИ)'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1300) + Number(FY1400) + Number(FY1500) - Number(FY1100)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1300) + Number(SY1400) + Number(SY1500) - Number(SY1100)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1300) + Number(TY1400) + Number(TY1500) - Number(TY1100)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'D0'}>
            <StyledTableCell component="th" scope="row">
            <b>Недостаток или излишек средств</b>
            </StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'D1'}>
            <StyledTableCell component="th" scope="row">
            НИВС
            </StyledTableCell>
            <StyledTableCell align="left">{'НИВС = ВС - ВЗ'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1300) - Number(FY1100) - Number(FY1210)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1300) - Number(SY1100) - Number(SY1210)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1300) - Number(TY1100) - Number(TY1210)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'D1'}>
            <StyledTableCell component="th" scope="row">
            НИВФ
            </StyledTableCell>
            <StyledTableCell align="left">{'НИВФ = ВФ - ВЗ'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1300) + Number(FY1400) - Number(FY1100) - Number(FY1210)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1300) + Number(SY1400) - Number(SY1100) - Number(SY1210)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1300) + Number(TY1400) - Number(TY1100) - Number(TY1210)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'D1'}>
            <StyledTableCell component="th" scope="row">
            НИВИ
            </StyledTableCell>
            <StyledTableCell align="left">{'НИВИ = ВИ - ВЗ'}</StyledTableCell>
              <StyledTableCell align="left">{Number(FY1300) + Number(FY1400) + Number(FY1500) - Number(FY1100) - Number(FY1210)}</StyledTableCell>
              <StyledTableCell align="left">{Number(SY1300) + Number(SY1400) + Number(SY1500) - Number(SY1100) - Number(SY1210)}</StyledTableCell>
              <StyledTableCell align="left">{Number(TY1300) + Number(TY1400) + Number(TY1500) - Number(TY1100) - Number(TY1210)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'E0'}>
            <StyledTableCell component="th" scope="row">
            <b>Анализ финансовой устойчивости</b>
            </StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E1'}>
            <StyledTableCell component="th" scope="row">
            Коэф.автономии
            </StyledTableCell>
            <StyledTableCell align="left">{'c1300 / c1700'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY1300) / Number(FY1700)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY1300) / Number(SY1700)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY1300) / Number(TY1700)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E2'}>
            <StyledTableCell component="th" scope="row">
            Коэф.капитализации
            </StyledTableCell>
            <StyledTableCell align="left">{'(c1400 + c1500) / c1300'}</StyledTableCell>
              <StyledTableCell align="left">{((Number(FY1400) + Number(FY1500)) / Number(FY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(SY1400) + Number(SY1500)) / Number(SY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(TY1400) + Number(TY1500)) / Number(TY1300)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E3'}>
            <StyledTableCell component="th" scope="row">
            Коэф.обеспеченности собствен.источниками финансирования
            </StyledTableCell>
            <StyledTableCell align="left">{'(c1300 - c1100) / c1200'}</StyledTableCell>
              <StyledTableCell align="left">{((Number(FY1300) - Number(FY1100)) / Number(FY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(SY1300) - Number(SY1100)) / Number(SY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(TY1300) - Number(TY1100)) / Number(TY1200)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E4'}>
            <StyledTableCell component="th" scope="row">
            Коэф.финансирования
            </StyledTableCell>
            <StyledTableCell align="left">{'c1300 / (c1400 + c1500)'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY1300) / (Number(FY1400) + Number(FY1500))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY1300) / (Number(SY1400) + Number(SY1500))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY1300) / (Number(TY1400) + Number(TY1500))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E5'}>
            <StyledTableCell component="th" scope="row">
            Коэф.финансовой устойчивости
            </StyledTableCell>
            <StyledTableCell align="left">{'(c1300 + c1400) / c1700'}</StyledTableCell>
              <StyledTableCell align="left">{((Number(FY1300) + Number(FY1400)) / Number(FY1700)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(SY1300) + Number(SY1400)) / Number(SY1700)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{((Number(TY1300) + Number(TY1400)) / Number(TY1700)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'F0'}>
            <StyledTableCell component="th" scope="row">
            <b>Анализ деловой активности</b>
            </StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F1'}>
            <StyledTableCell component="th" scope="row">
            Коэф.общей оборачиваемости
            </StyledTableCell>
            <StyledTableCell align="left">{'c2110 / c1600'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2110) / Number(FY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2110) / Number(SY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2110) / Number(TY1600)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F2'}>
            <StyledTableCell component="th" scope="row">
            Коэф.оборачиваемости оборотных средств
            </StyledTableCell>
            <StyledTableCell align="left">{'c2110 / c1200'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2110) / Number(FY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2110) / Number(SY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2110) / Number(TY1200)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F3'}>
            <StyledTableCell component="th" scope="row">
            Фондоотдача
            </StyledTableCell>
            <StyledTableCell align="left">{'c2110 / c1150'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2110) / Number(FY1150)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2110) / Number(SY1150)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2110) / Number(TY1150)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F4'}>
            <StyledTableCell component="th" scope="row">
            Коэф.отдачи собственного капитала
            </StyledTableCell>
            <StyledTableCell align="left">{'c2110 / c1300'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2110) / Number(FY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2110) / Number(SY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2110) / Number(TY1300)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F5'}>
            <StyledTableCell component="th" scope="row">
            Оборачиваемость запасов
            </StyledTableCell>
            <StyledTableCell align="left">{'c1210 / c2110'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY1210) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY1210) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY1210) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F6'}>
            <StyledTableCell component="th" scope="row">
            Оборачиваемость денежных средств
            </StyledTableCell>
            <StyledTableCell align="left">{'c1250 / c2110'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY1250) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY1250) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY1250) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F7'}>
            <StyledTableCell component="th" scope="row">
            Коэф.оборачиваемости дебиторской задолженности
            </StyledTableCell>
            <StyledTableCell align="left">{'c2110 / c1230'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2110) / Number(FY1230)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2110) / Number(SY1230)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2110) / Number(TY1230)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F8'}>
            <StyledTableCell component="th" scope="row">
            Срок погашения дебиторской задолженности
            </StyledTableCell>
            <StyledTableCell align="left">{'c1230 * 365 / c2110'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY1230) * 365 / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY1230) * 365 / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY1230) * 365 / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F9'}>
            <StyledTableCell component="th" scope="row">
            Коэф.оборачиваемости кредиторской задолженности
            </StyledTableCell>
            <StyledTableCell align="left">{'c2110 / c1520'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2110) / Number(FY1520)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2110) / Number(SY1520)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2110) / Number(TY1520)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F10'}>
            <StyledTableCell component="th" scope="row">
            Срок погашения кредиторской задолженности
            </StyledTableCell>
            <StyledTableCell align="left">{'c1520 * 365 / c2110'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY1520) * 365 / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY1520) * 365 / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY1520) * 365 / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'G0'}>
            <StyledTableCell component="th" scope="row">
            <b>Анализ рентабельности</b>
            </StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G1'}>
            <StyledTableCell component="th" scope="row">
            Рентабельность продаж
            </StyledTableCell>
            <StyledTableCell align="left">{'c2200 / c2110'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2200) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2200) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2200) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G2'}>
            <StyledTableCell component="th" scope="row">
            Бухгалтерская рентабельность
            </StyledTableCell>
            <StyledTableCell align="left">{'c2300 / c2110'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2300) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2300) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2300) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G3'}>
            <StyledTableCell component="th" scope="row">
            Чистая рентабельность
            </StyledTableCell>
            <StyledTableCell align="left">{'c2400 / c2110'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2400) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2400) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2400) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G4'}>
            <StyledTableCell component="th" scope="row">
            Экономическая рентабельность
            </StyledTableCell>
            <StyledTableCell align="left">{'c2400 / c1600'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2400) / Number(FY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2400) / Number(SY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2400) / Number(TY1600)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G5'}>
            <StyledTableCell component="th" scope="row">
            Рентабельность собственного капитала
            </StyledTableCell>
            <StyledTableCell align="left">{'c2400 / c1300'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2400) / Number(FY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2400) / Number(SY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2400) / Number(TY1300)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G6'}>
            <StyledTableCell component="th" scope="row">
            Затратоотдача
            </StyledTableCell>
            <StyledTableCell align="left">{'c2200 / c2120'}</StyledTableCell>
              <StyledTableCell align="left">{(Number(FY2200) / Number(FY2120)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(SY2200) / Number(SY2120)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">{(Number(TY2200) / Number(TY2120)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}