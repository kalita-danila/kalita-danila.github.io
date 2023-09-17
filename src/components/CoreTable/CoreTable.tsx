import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
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

  const [FY1110, setFY1110] = useState('');
  const [SY1110, setSY1110] = useState('');
  const [TY1110, setTY1110] = useState('');

  const [FY1120, setFY1120] = useState('');
  const [SY1120, setSY1120] = useState('');
  const [TY1120, setTY1120] = useState('');

  const [FY1130, setFY1130] = useState('');
  const [SY1130, setSY1130] = useState('');
  const [TY1130, setTY1130] = useState('');

  const [FY1140, setFY1140] = useState('');
  const [SY1140, setSY1140] = useState('');
  const [TY1140, setTY1140] = useState('');

  const [FY1150, setFY1150] = useState('');
  const [SY1150, setSY1150] = useState('');
  const [TY1150, setTY1150] = useState('');

  const [FY1160, setFY1160] = useState('');
  const [SY1160, setSY1160] = useState('');
  const [TY1160, setTY1160] = useState('');

  const [FY1170, setFY1170] = useState('');
  const [SY1170, setSY1170] = useState('');
  const [TY1170, setTY1170] = useState('');

  const [FY1180, setFY1180] = useState('');
  const [SY1180, setSY1180] = useState('');
  const [TY1180, setTY1180] = useState('');

  const [FY1190, setFY1190] = useState('');
  const [SY1190, setSY1190] = useState('');
  const [TY1190, setTY1190] = useState('');

  const [FY1100, setFY1100] = useState<any>('');
  const [SY1100, setSY1100] = useState<any>('');
  const [TY1100, setTY1100] = useState<any>('');

  const [FY1210, setFY1210] = useState('');
  const [SY1210, setSY1210] = useState('');
  const [TY1210, setTY1210] = useState('');

  const [FY1220, setFY1220] = useState('');
  const [SY1220, setSY1220] = useState('');
  const [TY1220, setTY1220] = useState('');

  const [FY1230, setFY1230] = useState('');
  const [SY1230, setSY1230] = useState('');
  const [TY1230, setTY1230] = useState('');

  const [FY1240, setFY1240] = useState('');
  const [SY1240, setSY1240] = useState('');
  const [TY1240, setTY1240] = useState('');

  const [FY1250, setFY1250] = useState('');
  const [SY1250, setSY1250] = useState('');
  const [TY1250, setTY1250] = useState('');

  const [FY1260, setFY1260] = useState('');
  const [SY1260, setSY1260] = useState('');
  const [TY1260, setTY1260] = useState('');

  const [FY1200, setFY1200] = useState<any>('');
  const [SY1200, setSY1200] = useState<any>('');
  const [TY1200, setTY1200] = useState<any>('');

  const [FY1310, setFY1310] = useState('');
  const [SY1310, setSY1310] = useState('');
  const [TY1310, setTY1310] = useState('');

  const [FY1320, setFY1320] = useState('');
  const [SY1320, setSY1320] = useState('');
  const [TY1320, setTY1320] = useState('');

  const [FY1340, setFY1340] = useState('');
  const [SY1340, setSY1340] = useState('');
  const [TY1340, setTY1340] = useState('');

  const [FY1350, setFY1350] = useState('');
  const [SY1350, setSY1350] = useState('');
  const [TY1350, setTY1350] = useState('');

  const [FY1360, setFY1360] = useState('');
  const [SY1360, setSY1360] = useState('');
  const [TY1360, setTY1360] = useState('');

  const [FY1370, setFY1370] = useState('');
  const [SY1370, setSY1370] = useState('');
  const [TY1370, setTY1370] = useState('');

  const [FY1300, setFY1300] = useState<any>('');
  const [SY1300, setSY1300] = useState<any>('');
  const [TY1300, setTY1300] = useState<any>('');

  const [FY1410, setFY1410] = useState('');
  const [SY1410, setSY1410] = useState('');
  const [TY1410, setTY1410] = useState('');

  const [FY1420, setFY1420] = useState('');
  const [SY1420, setSY1420] = useState('');
  const [TY1420, setTY1420] = useState('');

  const [FY1430, setFY1430] = useState('');
  const [SY1430, setSY1430] = useState('');
  const [TY1430, setTY1430] = useState('');

  const [FY1450, setFY1450] = useState('');
  const [SY1450, setSY1450] = useState('');
  const [TY1450, setTY1450] = useState('');

  const [FY1400, setFY1400] = useState<any>('');
  const [SY1400, setSY1400] = useState<any>('');
  const [TY1400, setTY1400] = useState<any>('');

  const [FY1510, setFY1510] = useState('');
  const [SY1510, setSY1510] = useState('');
  const [TY1510, setTY1510] = useState('');

  const [FY1520, setFY1520] = useState('');
  const [SY1520, setSY1520] = useState('');
  const [TY1520, setTY1520] = useState('');

  const [FY1530, setFY1530] = useState('');
  const [SY1530, setSY1530] = useState('');
  const [TY1530, setTY1530] = useState('');

  const [FY1540, setFY1540] = useState('');
  const [SY1540, setSY1540] = useState('');
  const [TY1540, setTY1540] = useState('');

  const [FY1550, setFY1550] = useState('');
  const [SY1550, setSY1550] = useState('');
  const [TY1550, setTY1550] = useState('');

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

  const [FY2110, setFY2110] = useState('');
  const [SY2110, setSY2110] = useState('');
  const [TY2110, setTY2110] = useState('');

  const [FY2120, setFY2120] = useState('');
  const [SY2120, setSY2120] = useState('');
  const [TY2120, setTY2120] = useState('');

  const [FY2100, setFY2100] = useState<any>('');
  const [SY2100, setSY2100] = useState<any>('');
  const [TY2100, setTY2100] = useState<any>('');

  useEffect(() => {
    setFY2100(Number(FY2110) + Number(FY2120));
    setSY2100(Number(SY2110) + Number(SY2120));
    setTY2100(Number(TY2110) + Number(TY2120));
  }, [FY2110, FY2120, SY2110, SY2120, TY2110, TY2120]);

  const [FY2210, setFY2210] = useState('');
  const [SY2210, setSY2210] = useState('');
  const [TY2210, setTY2210] = useState('');

  const [FY2220, setFY2220] = useState('');
  const [SY2220, setSY2220] = useState('');
  const [TY2220, setTY2220] = useState('');
  
  const [FY2200, setFY2200] = useState<any>('');
  const [SY2200, setSY2200] = useState<any>('');
  const [TY2200, setTY2200] = useState<any>('');

  useEffect(() => {
    setFY2200(Number(FY2210) + Number(FY2220));
    setSY2200(Number(SY2210) + Number(SY2220));
    setTY2200(Number(TY2210) + Number(TY2220));
  }, [FY2210, FY2220, SY2210, SY2220, TY2210, TY2220]);

  const [FY2310, setFY2310] = useState('');
  const [SY2310, setSY2310] = useState('');
  const [TY2310, setTY2310] = useState('');

  const [FY2320, setFY2320] = useState('');
  const [SY2320, setSY2320] = useState('');
  const [TY2320, setTY2320] = useState('');

  const [FY2330, setFY2330] = useState('');
  const [SY2330, setSY2330] = useState('');
  const [TY2330, setTY2330] = useState('');

  const [FY2340, setFY2340] = useState('');
  const [SY2340, setSY2340] = useState('');
  const [TY2340, setTY2340] = useState('');

  const [FY2350, setFY2350] = useState('');
  const [SY2350, setSY2350] = useState('');
  const [TY2350, setTY2350] = useState('');

  const [FY2300, setFY2300] = useState<any>('');
  const [SY2300, setSY2300] = useState<any>('');
  const [TY2300, setTY2300] = useState<any>('');

  useEffect(() => {
    setFY2300(Number(FY2310) + Number(FY2320) + Number(FY2330) + Number(FY2340) + Number(FY2350));
    setSY2300(Number(SY2310) + Number(SY2320) + Number(SY2330) + Number(SY2340) + Number(SY2350));
    setTY2300(Number(TY2310) + Number(TY2320) + Number(TY2330) + Number(TY2340) + Number(TY2350));
  }, [FY2310, FY2320, FY2330, FY2340, FY2350, SY2310, SY2320, SY2330, SY2340, SY2350, TY2310, TY2320, TY2330, TY2340, TY2350]);

  const [FY2410, setFY2410] = useState('');
  const [SY2410, setSY2410] = useState('');
  const [TY2410, setTY2410] = useState('');

  const [FY2411, setFY2411] = useState('');
  const [SY2411, setSY2411] = useState('');
  const [TY2411, setTY2411] = useState('');

  const [FY2412, setFY2412] = useState('');
  const [SY2412, setSY2412] = useState('');
  const [TY2412, setTY2412] = useState('');

  const [FY2460, setFY2460] = useState('');
  const [SY2460, setSY2460] = useState('');
  const [TY2460, setTY2460] = useState('');

  const [FY2400, setFY2400] = useState<any>('');
  const [SY2400, setSY2400] = useState<any>('');
  const [TY2400, setTY2400] = useState<any>('');

  useEffect(() => {
    setFY2400(Number(FY2410) + Number(FY2411) + Number(FY2412) + Number(FY2460));
    setSY2400(Number(SY2410) + Number(SY2411) + Number(SY2412) + Number(SY2460));
    setTY2400(Number(TY2410) + Number(TY2411) + Number(TY2412) + Number(TY2460));
  }, [FY2410, FY2411, FY2412, FY2460, SY2410, SY2411, SY2412, SY2460, TY2410, TY2411, TY2412, TY2460]);

  const [FY2510, setFY2510] = useState('');
  const [SY2510, setSY2510] = useState('');
  const [TY2510, setTY2510] = useState('');

  const [FY2520, setFY2520] = useState('');
  const [SY2520, setSY2520] = useState('');
  const [TY2520, setTY2520] = useState('');

  const [FY2530, setFY2530] = useState('');
  const [SY2530, setSY2530] = useState('');
  const [TY2530, setTY2530] = useState('');

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
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>АКТИВ</div>
              <div>I. ВНЕОБОРОТНЫЕ АКТИВЫ</div>
            </StyledTableCell>
            <StyledTableCell align="right">Код</StyledTableCell>
            <StyledTableCell align="right">
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
            <StyledTableCell align="right">
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
            <StyledTableCell align="right">
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
            <StyledTableCell align="right">{1110}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1110} onChange={(event: any) => {setFY1110(event.target.value)}} id="1110-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1110} onChange={(event: any) => {setSY1110(event.target.value)}} id="1110-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1110} onChange={(event: any) => {setTY1110(event.target.value)}} id="1110-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1120}>
            <StyledTableCell component="th" scope="row">
              Результаты исследований и разработок
            </StyledTableCell>
            <StyledTableCell align="right">{1120}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1120} onChange={(event: any) => {setFY1120(event.target.value)}} id="1120-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1120} onChange={(event: any) => {setSY1120(event.target.value)}} id="1120-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1120} onChange={(event: any) => {setTY1120(event.target.value)}} id="1120-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1130}>
            <StyledTableCell component="th" scope="row">
              Результаты исследований и разработок
            </StyledTableCell>
            <StyledTableCell align="right">{1130}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1130} onChange={(event: any) => {setFY1130(event.target.value)}} id="1130-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1130} onChange={(event: any) => {setSY1130(event.target.value)}} id="1130-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1130} onChange={(event: any) => {setTY1130(event.target.value)}} id="1130-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1140}>
            <StyledTableCell component="th" scope="row">
              Материальные поисковые активы
            </StyledTableCell>
            <StyledTableCell align="right">{1140}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1140} onChange={(event: any) => {setFY1140(event.target.value)}} id="1140-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1140} onChange={(event: any) => {setSY1140(event.target.value)}} id="1140-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1140} onChange={(event: any) => {setTY1140(event.target.value)}} id="1140-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1150}>
            <StyledTableCell component="th" scope="row">
              Основные средства
            </StyledTableCell>
            <StyledTableCell align="right">{1150}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1150} onChange={(event: any) => {setFY1150(event.target.value)}} id="1150-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1150} onChange={(event: any) => {setSY1150(event.target.value)}} id="1150-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1150} onChange={(event: any) => {setTY1150(event.target.value)}} id="1150-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1160}>
            <StyledTableCell component="th" scope="row">
              Доходные вложения в материальные ценности
            </StyledTableCell>
            <StyledTableCell align="right">{1160}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1160} onChange={(event: any) => {setFY1160(event.target.value)}} id="1160-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1160} onChange={(event: any) => {setSY1160(event.target.value)}} id="1160-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1160} onChange={(event: any) => {setTY1160(event.target.value)}} id="1160-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1170}>
            <StyledTableCell component="th" scope="row">
              Финансовые вложения
            </StyledTableCell>
            <StyledTableCell align="right">{1170}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1170} onChange={(event: any) => {setFY1170(event.target.value)}} id="1170-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1170} onChange={(event: any) => {setSY1170(event.target.value)}} id="1170-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1170} onChange={(event: any) => {setTY1170(event.target.value)}} id="1170-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1180}>
            <StyledTableCell component="th" scope="row">
              Отложенные налоговые активы
            </StyledTableCell>
            <StyledTableCell align="right">{1180}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1180} onChange={(event: any) => {setFY1180(event.target.value)}} id="1180-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1180} onChange={(event: any) => {setSY1180(event.target.value)}} id="1180-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1180} onChange={(event: any) => {setTY1180(event.target.value)}} id="1180-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1190}>
            <StyledTableCell component="th" scope="row">
              Прочие внеоборотные активы
            </StyledTableCell>
            <StyledTableCell align="right">{1190}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1190} onChange={(event: any) => {setFY1190(event.target.value)}} id="1190-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1190} onChange={(event: any) => {setSY1190(event.target.value)}} id="1190-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1190} onChange={(event: any) => {setTY1190(event.target.value)}} id="1190-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1100}>
            <StyledTableCell component="th" scope="row">
              Итого по разделу I
            </StyledTableCell>
            <StyledTableCell align="right">{1100}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1100} id="1100-FY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1100} id="1100-SY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1100} id="1100-TY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>

        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>II. ОБОРОТНЫЕ АКТИВЫ</div>
            </StyledTableCell>
            <StyledTableCell align="right">Код</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1210}>
            <StyledTableCell component="th" scope="row">
            Запасы
            </StyledTableCell>
            <StyledTableCell align="right">{1210}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1210} onChange={(event: any) => {setFY1210(event.target.value)}} id="1210-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1210} onChange={(event: any) => {setSY1210(event.target.value)}} id="1210-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1210} onChange={(event: any) => {setTY1210(event.target.value)}} id="1210-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1220}>
            <StyledTableCell component="th" scope="row">
            Налог на добавленную стоимость по приобретенным ценностям
            </StyledTableCell>
            <StyledTableCell align="right">{1220}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1220} onChange={(event: any) => {setFY1220(event.target.value)}} id="1220-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1220} onChange={(event: any) => {setSY1220(event.target.value)}} id="1220-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1220} onChange={(event: any) => {setTY1220(event.target.value)}} id="1220-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1230}>
            <StyledTableCell component="th" scope="row">
            Дебиторская задолженность
            </StyledTableCell>
            <StyledTableCell align="right">{1230}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1230} onChange={(event: any) => {setFY1230(event.target.value)}} id="1230-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1230} onChange={(event: any) => {setSY1230(event.target.value)}} id="1230-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1230} onChange={(event: any) => {setTY1230(event.target.value)}} id="1230-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1240}>
            <StyledTableCell component="th" scope="row">
            Финансовые вложения (за исключением денежных эквивалентов)
            </StyledTableCell>
            <StyledTableCell align="right">{1240}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1240} onChange={(event: any) => {setFY1240(event.target.value)}} id="1240-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1240} onChange={(event: any) => {setSY1240(event.target.value)}} id="1240-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1240} onChange={(event: any) => {setTY1240(event.target.value)}} id="1240-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1250}>
            <StyledTableCell component="th" scope="row">
            Денежные средства и денежные эквиваленты
            </StyledTableCell>
            <StyledTableCell align="right">{1250}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1250} onChange={(event: any) => {setFY1250(event.target.value)}} id="1250-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1250} onChange={(event: any) => {setSY1250(event.target.value)}} id="1250-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1250} onChange={(event: any) => {setTY1250(event.target.value)}} id="1250-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1260}>
            <StyledTableCell component="th" scope="row">
            Прочие оборотные активы
            </StyledTableCell>
            <StyledTableCell align="right">{1260}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1260} onChange={(event: any) => {setFY1260(event.target.value)}} id="1260-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1260} onChange={(event: any) => {setSY1260(event.target.value)}} id="1260-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1260} onChange={(event: any) => {setTY1260(event.target.value)}} id="1260-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1200}>
            <StyledTableCell component="th" scope="row">
            Итого по разделу II
            </StyledTableCell>
            <StyledTableCell align="right">{1200}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1200} id="1200-FY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1200} id="1200-SY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1200} id="1200-TY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>
              <div>БАЛАНС</div>
            </StyledTableCell>
            <StyledTableCell align="right">1600</StyledTableCell>
            <StyledTableCell align="right"><TextField value={FY1600} id="1600-FY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
            <StyledTableCell align="right"><TextField value={SY1600} id="1600-SY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
            <StyledTableCell align="right"><TextField value={TY1600} id="1600-TY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>ПАССИВ</div>
              <div>III. КАПИТАЛ И РЕЗЕРВЫ 6</div>
            </StyledTableCell>
            <StyledTableCell align="right">Код</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1310}>
            <StyledTableCell component="th" scope="row">
            Уставный капитал (складочный капитал, уставный фонд, вклады товарищей)
            </StyledTableCell>
            <StyledTableCell align="right">{1310}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1310} onChange={(event: any) => {setFY1310(event.target.value)}} id="1310-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1310} onChange={(event: any) => {setSY1310(event.target.value)}} id="1310-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1310} onChange={(event: any) => {setTY1310(event.target.value)}} id="1310-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1320}>
            <StyledTableCell component="th" scope="row">
            Собственные акции, выкупленные у акционеров
            </StyledTableCell>
            <StyledTableCell align="right">{1320}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1320} onChange={(event: any) => {setFY1320(event.target.value)}} id="1320-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1320} onChange={(event: any) => {setSY1320(event.target.value)}} id="1320-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1320} onChange={(event: any) => {setTY1320(event.target.value)}} id="1320-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1340}>
            <StyledTableCell component="th" scope="row">
            Переоценка внеоборотных активов
            </StyledTableCell>
            <StyledTableCell align="right">{1340}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1340} onChange={(event: any) => {setFY1340(event.target.value)}} id="1340-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1340} onChange={(event: any) => {setSY1340(event.target.value)}} id="1340-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1340} onChange={(event: any) => {setTY1340(event.target.value)}} id="1340-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1350}>
            <StyledTableCell component="th" scope="row">
            Добавочный капитал (без переоценки)
            </StyledTableCell>
            <StyledTableCell align="right">{1350}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1350} onChange={(event: any) => {setFY1350(event.target.value)}} id="1350-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1350} onChange={(event: any) => {setSY1350(event.target.value)}} id="1350-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1350} onChange={(event: any) => {setTY1350(event.target.value)}} id="1350-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1360}>
            <StyledTableCell component="th" scope="row">
            Резервный капитал
            </StyledTableCell>
            <StyledTableCell align="right">{1360}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1360} onChange={(event: any) => {setFY1360(event.target.value)}} id="1360-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1360} onChange={(event: any) => {setSY1360(event.target.value)}} id="1360-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1360} onChange={(event: any) => {setTY1360(event.target.value)}} id="1360-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1370}>
            <StyledTableCell component="th" scope="row">
            Нераспределенная прибыль (непокрытый убыток)
            </StyledTableCell>
            <StyledTableCell align="right">{1370}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1370} onChange={(event: any) => {setFY1370(event.target.value)}} id="1370-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1370} onChange={(event: any) => {setSY1370(event.target.value)}} id="1370-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1370} onChange={(event: any) => {setTY1370(event.target.value)}} id="1370-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1300}>
            <StyledTableCell component="th" scope="row">
            Итого по разделу III
            </StyledTableCell>
            <StyledTableCell align="right">{1300}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1300} id="1300-FY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1300} id="1300-SY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1300} id="1300-TY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>IV. ДОЛГОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА</div>
            </StyledTableCell>
            <StyledTableCell align="right">Код</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1410}>
            <StyledTableCell component="th" scope="row">
            Заемные средства
            </StyledTableCell>
            <StyledTableCell align="right">{1410}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1410} onChange={(event: any) => {setFY1410(event.target.value)}} id="1410-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1410} onChange={(event: any) => {setSY1410(event.target.value)}} id="1410-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1410} onChange={(event: any) => {setTY1410(event.target.value)}} id="1410-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1420}>
            <StyledTableCell component="th" scope="row">
            Отложенные налоговые обязательства
            </StyledTableCell>
            <StyledTableCell align="right">{1420}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1420} onChange={(event: any) => {setFY1420(event.target.value)}} id="1420-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1420} onChange={(event: any) => {setSY1420(event.target.value)}} id="1420-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1420} onChange={(event: any) => {setTY1420(event.target.value)}} id="1420-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1430}>
            <StyledTableCell component="th" scope="row">
            Оценочные обязательства
            </StyledTableCell>
            <StyledTableCell align="right">{1430}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1430} onChange={(event: any) => {setFY1430(event.target.value)}} id="1430-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1430} onChange={(event: any) => {setSY1430(event.target.value)}} id="1430-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1430} onChange={(event: any) => {setTY1430(event.target.value)}} id="1430-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1450}>
            <StyledTableCell component="th" scope="row">
            Прочие обязательства
            </StyledTableCell>
            <StyledTableCell align="right">{1450}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1450} onChange={(event: any) => {setFY1450(event.target.value)}} id="1450-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1450} onChange={(event: any) => {setSY1450(event.target.value)}} id="1450-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1450} onChange={(event: any) => {setTY1450(event.target.value)}} id="1450-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1400}>
            <StyledTableCell component="th" scope="row">
            Итого по разделу IV
            </StyledTableCell>
            <StyledTableCell align="right">{1400}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1400} id="1400-FY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1400} id="1400-SY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1400} id="1400-TY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
        </TableBody>

        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div>V. КРАТКОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА</div>
            </StyledTableCell>
            <StyledTableCell align="right">Код</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={1510}>
            <StyledTableCell component="th" scope="row">
            Заемные средства
            </StyledTableCell>
            <StyledTableCell align="right">{1510}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1510} onChange={(event: any) => {setFY1510(event.target.value)}} id="1510-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1510} onChange={(event: any) => {setSY1510(event.target.value)}} id="1510-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1510} onChange={(event: any) => {setTY1510(event.target.value)}} id="1510-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1520}>
            <StyledTableCell component="th" scope="row">
            Кредиторская задолженность
            </StyledTableCell>
            <StyledTableCell align="right">{1520}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1520} onChange={(event: any) => {setFY1520(event.target.value)}} id="1520-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1520} onChange={(event: any) => {setSY1520(event.target.value)}} id="1520-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1520} onChange={(event: any) => {setTY1520(event.target.value)}} id="1520-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1530}>
            <StyledTableCell component="th" scope="row">
            Доходы будущих периодов
            </StyledTableCell>
            <StyledTableCell align="right">{1530}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1530} onChange={(event: any) => {setFY1530(event.target.value)}} id="1530-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1530} onChange={(event: any) => {setSY1530(event.target.value)}} id="1530-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1530} onChange={(event: any) => {setTY1530(event.target.value)}} id="1530-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1540}>
            <StyledTableCell component="th" scope="row">
            Оценочные обязательства
            </StyledTableCell>
            <StyledTableCell align="right">{1540}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1540} onChange={(event: any) => {setFY1540(event.target.value)}} id="1540-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1540} onChange={(event: any) => {setSY1540(event.target.value)}} id="1540-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1540} onChange={(event: any) => {setTY1540(event.target.value)}} id="1540-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1550}>
            <StyledTableCell component="th" scope="row">
            Прочие обязательства
            </StyledTableCell>
            <StyledTableCell align="right">{1550}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1550} onChange={(event: any) => {setFY1550(event.target.value)}} id="1550-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1550} onChange={(event: any) => {setSY1550(event.target.value)}} id="1550-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1550} onChange={(event: any) => {setTY1550(event.target.value)}} id="1550-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={1500}>
            <StyledTableCell component="th" scope="row">
            Итого по разделу V
            </StyledTableCell>
            <StyledTableCell align="right">{1500}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY1500} id="1500-FY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY1500} id="1500-SY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY1500} id="1500-TY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>
              <div>БАЛАНС</div>
            </StyledTableCell>
            <StyledTableCell align="right">1700</StyledTableCell>
            <StyledTableCell align="right"><TextField value={FY1700} id="1700-FY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
            <StyledTableCell align="right"><TextField value={SY1700} id="1700-SY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
            <StyledTableCell align="right"><TextField value={TY1700} id="1700-TY" InputProps={{readOnly: true}} type='number' variant="standard" size="small"/></StyledTableCell>
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
            <StyledTableCell align="right">Код</StyledTableCell>
            <StyledTableCell align="right">
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
            <StyledTableCell align="right">
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
            <StyledTableCell align="right">
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
            <StyledTableCell align="right">{2110}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2110} onChange={(event: any) => {setFY2110(event.target.value)}} id="2110-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2110} onChange={(event: any) => {setSY2110(event.target.value)}} id="2110-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2110} onChange={(event: any) => {setTY2110(event.target.value)}} id="2110-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2120}>
            <StyledTableCell component="th" scope="row">
            Себестоимость продаж
            </StyledTableCell>
            <StyledTableCell align="right">{2120}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2120} onChange={(event: any) => {setFY2120(event.target.value)}} id="2120-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2120} onChange={(event: any) => {setSY2120(event.target.value)}} id="2120-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2120} onChange={(event: any) => {setTY2120(event.target.value)}} id="2120-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2100}>
            <StyledTableCell component="th" scope="row">
            Валовая прибыль (убыток)
            </StyledTableCell>
            <StyledTableCell align="right">{2100}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2100} InputProps={{readOnly: true}} id="2100-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2100} InputProps={{readOnly: true}} id="2100-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2100} InputProps={{readOnly: true}} id="2100-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2210}>
            <StyledTableCell component="th" scope="row">
            Коммерческие расходы
            </StyledTableCell>
            <StyledTableCell align="right">{2210}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2210} onChange={(event: any) => {setFY2210(event.target.value)}} id="2210-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2210} onChange={(event: any) => {setSY2210(event.target.value)}} id="2210-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2210} onChange={(event: any) => {setTY2210(event.target.value)}} id="2210-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2220}>
            <StyledTableCell component="th" scope="row">
            Управленческие расходы
            </StyledTableCell>
            <StyledTableCell align="right">{2220}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2220} onChange={(event: any) => {setFY2220(event.target.value)}} id="2220-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2220} onChange={(event: any) => {setSY2220(event.target.value)}} id="2220-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2220} onChange={(event: any) => {setTY2220(event.target.value)}} id="2220-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2200}>
            <StyledTableCell component="th" scope="row">
            Прибыль (убыток) от продаж
            </StyledTableCell>
            <StyledTableCell align="right">{2200}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2200} InputProps={{readOnly: true}} id="2200-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2200} InputProps={{readOnly: true}} id="2200-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2200} InputProps={{readOnly: true}} id="2200-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2310}>
            <StyledTableCell component="th" scope="row">
            Доходы от участия в других организациях
            </StyledTableCell>
            <StyledTableCell align="right">{2310}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2310} onChange={(event: any) => {setFY2310(event.target.value)}} id="2310-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2310} onChange={(event: any) => {setSY2310(event.target.value)}} id="2310-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2310} onChange={(event: any) => {setTY2310(event.target.value)}} id="2310-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2320}>
            <StyledTableCell component="th" scope="row">
            Проценты к получению
            </StyledTableCell>
            <StyledTableCell align="right">{2320}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2320} onChange={(event: any) => {setFY2320(event.target.value)}} id="2320-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2320} onChange={(event: any) => {setSY2320(event.target.value)}} id="2320-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2320} onChange={(event: any) => {setTY2320(event.target.value)}} id="2320-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2330}>
            <StyledTableCell component="th" scope="row">
            Проценты к уплате
            </StyledTableCell>
            <StyledTableCell align="right">{2330}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2330} onChange={(event: any) => {setFY2330(event.target.value)}} id="2330-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2330} onChange={(event: any) => {setSY2330(event.target.value)}} id="2330-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2330} onChange={(event: any) => {setTY2330(event.target.value)}} id="2330-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2340}>
            <StyledTableCell component="th" scope="row">
            Прочие доходы
            </StyledTableCell>
            <StyledTableCell align="right">{2340}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2340} onChange={(event: any) => {setFY2340(event.target.value)}} id="2340-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2340} onChange={(event: any) => {setSY2340(event.target.value)}} id="2340-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2340} onChange={(event: any) => {setTY2340(event.target.value)}} id="2340-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2350}>
            <StyledTableCell component="th" scope="row">
            Прочие расходы
            </StyledTableCell>
            <StyledTableCell align="right">{2350}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2350} onChange={(event: any) => {setFY2350(event.target.value)}} id="2350-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2350} onChange={(event: any) => {setSY2350(event.target.value)}} id="2350-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2350} onChange={(event: any) => {setTY2350(event.target.value)}} id="2350-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2300}>
            <StyledTableCell component="th" scope="row">
            Прибыль (убыток) до налогообложения
            </StyledTableCell>
            <StyledTableCell align="right">{2300}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2300} InputProps={{readOnly: true}} id="2300-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2300} InputProps={{readOnly: true}} id="2300-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2300} InputProps={{readOnly: true}} id="2300-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2410}>
            <StyledTableCell component="th" scope="row">
            Налог на прибыль 7
            </StyledTableCell>
            <StyledTableCell align="right">{2410}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2410} onChange={(event: any) => {setFY2410(event.target.value)}} id="2410-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2410} onChange={(event: any) => {setSY2410(event.target.value)}} id="2410-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2410} onChange={(event: any) => {setTY2410(event.target.value)}} id="2410-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2411}>
            <StyledTableCell component="th" scope="row">
            в т.ч. текущий налог на прибыль
            </StyledTableCell>
            <StyledTableCell align="right">{2411}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2411} onChange={(event: any) => {setFY2411(event.target.value)}} id="2411-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2411} onChange={(event: any) => {setSY2411(event.target.value)}} id="2411-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2411} onChange={(event: any) => {setTY2411(event.target.value)}} id="2411-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2412}>
            <StyledTableCell component="th" scope="row">
            отложенный налог на прибыль
            </StyledTableCell>
            <StyledTableCell align="right">{2412}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2412} onChange={(event: any) => {setFY2412(event.target.value)}} id="2412-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2412} onChange={(event: any) => {setSY2412(event.target.value)}} id="2412-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2412} onChange={(event: any) => {setTY2412(event.target.value)}} id="2412-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2460}>
            <StyledTableCell component="th" scope="row">
            Прочее
            </StyledTableCell>
            <StyledTableCell align="right">{2460}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2460} onChange={(event: any) => {setFY2460(event.target.value)}} id="2460-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2460} onChange={(event: any) => {setSY2460(event.target.value)}} id="2460-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2460} onChange={(event: any) => {setTY2460(event.target.value)}} id="2460-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2400}>
            <StyledTableCell component="th" scope="row">
            Чистая прибыль (убыток)
            </StyledTableCell>
            <StyledTableCell align="right">{2400}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2400} InputProps={{readOnly: true}} id="2400-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2400} InputProps={{readOnly: true}} id="2400-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2400} InputProps={{readOnly: true}} id="2400-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2510}>
            <StyledTableCell component="th" scope="row">
            Результат от переоценки внеоборотных активов,<br /> не включаемый в чистую прибыль (убыток) периода
            </StyledTableCell>
            <StyledTableCell align="right">{2510}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2510} onChange={(event: any) => {setFY2510(event.target.value)}} id="2510-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2510} onChange={(event: any) => {setSY2510(event.target.value)}} id="2510-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2510} onChange={(event: any) => {setTY2510(event.target.value)}} id="2510-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2520}>
            <StyledTableCell component="th" scope="row">
            Результат от прочих операций,<br /> не включаемый в чистую прибыль (убыток) периода
            </StyledTableCell>
            <StyledTableCell align="right">{2520}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2520} onChange={(event: any) => {setFY2520(event.target.value)}} id="2520-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2520} onChange={(event: any) => {setSY2520(event.target.value)}} id="2520-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2520} onChange={(event: any) => {setTY2520(event.target.value)}} id="2520-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2530}>
            <StyledTableCell component="th" scope="row">
            Налог на прибыль от операций, результат которых <br />не включается в чистую прибыль (убыток) периода 7
            </StyledTableCell>
            <StyledTableCell align="right">{2530}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2530} onChange={(event: any) => {setFY2530(event.target.value)}} id="2530-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2530} onChange={(event: any) => {setSY2530(event.target.value)}} id="2530-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2530} onChange={(event: any) => {setTY2530(event.target.value)}} id="2530-TY" type='number' variant="standard" size="small"/></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={2500}>
            <StyledTableCell component="th" scope="row">
            Совокупный финансовый результат периода 6
            </StyledTableCell>
            <StyledTableCell align="right">{2500}</StyledTableCell>
              <StyledTableCell align="right"><TextField value={FY2500} InputProps={{readOnly: true}} id="2500-FY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={SY2500} InputProps={{readOnly: true}} id="2500-SY" type='number' variant="standard" size="small"/></StyledTableCell>
              <StyledTableCell align="right"><TextField value={TY2500} InputProps={{readOnly: true}} id="2500-TY" type='number' variant="standard" size="small"/></StyledTableCell>
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
            <StyledTableCell align="right">Формула для расчета</StyledTableCell>
            <StyledTableCell align="right">
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
            <StyledTableCell align="right">
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
            <StyledTableCell align="right">
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
            <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'A1'}>
            <StyledTableCell component="th" scope="row">
            A1
            </StyledTableCell>
            <StyledTableCell align="right">{'с1240 + с1250'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1240) + Number(FY1250)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1240) + Number(SY1250)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1240) + Number(TY1250)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'A2'}>
            <StyledTableCell component="th" scope="row">
            A2
            </StyledTableCell>
            <StyledTableCell align="right">{'с1230'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1230)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1230)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1230)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'A3'}>
            <StyledTableCell component="th" scope="row">
            A3
            </StyledTableCell>
            <StyledTableCell align="right">{'с1210 + c1220 + c1260'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1210) + Number(FY1220) + Number(FY1260)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1210) + Number(SY1220) + Number(SY1260)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1210) + Number(TY1220) + Number(TY1260)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'A4'}>
            <StyledTableCell component="th" scope="row">
            A4
            </StyledTableCell>
            <StyledTableCell align="right">{'с1100'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1100)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1100)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1100)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'П1'}>
            <StyledTableCell component="th" scope="row">
            П1
            </StyledTableCell>
            <StyledTableCell align="right">{'с1520'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1520)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1520)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1520)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'П2'}>
            <StyledTableCell component="th" scope="row">
            П2
            </StyledTableCell>
            <StyledTableCell align="right">{'с1510 + c1530 + c1540 + с1550'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1510) + Number(FY1530) + Number(FY1540) + Number(FY1550)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1510) + Number(SY1530) + Number(SY1540) + Number(FY1550)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1510) + Number(TY1530) + Number(TY1540) + Number(FY1550)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'П3'}>
            <StyledTableCell component="th" scope="row">
            П3
            </StyledTableCell>
            <StyledTableCell align="right">{'с1400'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1400)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1400)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1400)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'П4'}>
            <StyledTableCell component="th" scope="row">
            П4
            </StyledTableCell>
            <StyledTableCell align="right">{'с1300'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1300)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1300)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1300)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'B0'}>
            <StyledTableCell component="th" scope="row">
            <b>Aнализ платежеспособности предприятия</b>
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B1'}>
            <StyledTableCell component="th" scope="row">
            Коэф.абсолютной ликвидности
            </StyledTableCell>
            <StyledTableCell align="right">{'(с1250 + с1240 ) / (c1510 + c1530 + c1540 + c1550)'}</StyledTableCell>
              <StyledTableCell align="right">{((Number(FY1250) + Number(FY1240)) / (Number(FY1510) + Number(FY1530) + Number(FY1540) + Number(FY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(SY1250) + Number(SY1240)) / (Number(SY1510) + Number(SY1530) + Number(SY1540) + Number(SY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(TY1250) + Number(TY1240)) / (Number(TY1510) + Number(TY1530) + Number(TY1540) + Number(TY1550))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B2'}>
            <StyledTableCell component="th" scope="row">
            Коэф.критической ликвидности
            </StyledTableCell>
            <StyledTableCell align="right">{'(c1250 + с1240 + c1230 ) / (c1510 + c1530 + c1540 + c1550)'}</StyledTableCell>
              <StyledTableCell align="right">{((Number(FY1250) + Number(FY1240) + Number(FY1230)) / (Number(FY1510) + Number(FY1530) + Number(FY1540) + Number(FY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(SY1250) + Number(SY1240) + Number(SY1230)) / (Number(SY1510) + Number(SY1530) + Number(SY1540) + Number(SY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(TY1250) + Number(TY1240) + Number(TY1230)) / (Number(TY1510) + Number(TY1530) + Number(TY1540) + Number(TY1550))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B3'}>
            <StyledTableCell component="th" scope="row">
            Коэф.текущей ликвидности
            </StyledTableCell>
            <StyledTableCell align="right">{'c1200 / (c1510 + c1530 + c1540 + c1550)'}</StyledTableCell>
              <StyledTableCell align="right">{((Number(FY1200)) / (Number(FY1510) + Number(FY1530) + Number(FY1540) + Number(FY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(SY1200)) / (Number(SY1510) + Number(SY1530) + Number(SY1540) + Number(SY1550))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(TY1200)) / (Number(TY1510) + Number(TY1530) + Number(TY1540) + Number(TY1550))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B4'}>
            <StyledTableCell component="th" scope="row">
            Коэф.маневренности функц.капитала
            </StyledTableCell>
            <StyledTableCell align="right">{'(c1210 + c1220 + c1260) / (c1200 - (c1510 + c1530 + c1540 + c1550))'}</StyledTableCell>
              <StyledTableCell align="right">{((Number(FY1210) + Number(FY1220) + Number(FY1260)) / (Number(FY1200) - (Number(FY1510) + Number(FY1530) + Number(FY1540) + Number(FY1550)))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(SY1210) + Number(SY1220) + Number(SY1260)) / (Number(SY1200) - (Number(SY1510) + Number(SY1530) + Number(SY1540) + Number(SY1550)))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(TY1210) + Number(TY1220) + Number(TY1260)) / (Number(TY1200) - (Number(TY1510) + Number(TY1530) + Number(TY1540) + Number(TY1550)))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B5'}>
            <StyledTableCell component="th" scope="row">
            Доля оборотных средств в активах
            </StyledTableCell>
            <StyledTableCell align="right">{'c1200 / c1600'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY1200) / Number(FY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY1200) / Number(SY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY1200) / Number(TY1600)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'B6'}>
            <StyledTableCell component="th" scope="row">
            Коэф.обеспеченности собственными средствами
            </StyledTableCell>
            <StyledTableCell align="right">{'(c1300 - c1100)/ c1200'}</StyledTableCell>
              <StyledTableCell align="right">{((Number(FY1300) - Number(FY1100)) / Number(FY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(SY1300) - Number(SY1100)) / Number(SY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(TY1300) - Number(TY1100)) / Number(TY1200)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'C0'}>
            <StyledTableCell component="th" scope="row">
            <b>Aнализ финансового состояния</b>
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'C1'}>
            <StyledTableCell component="th" scope="row">
            Величина запасов
            </StyledTableCell>
            <StyledTableCell align="right">{'c1210 (B3)'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1210)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1210)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1210)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'C2'}>
            <StyledTableCell component="th" scope="row">
            Величина собственных оборотных средств
            </StyledTableCell>
            <StyledTableCell align="right">{'c1300 - c1100 (BC)'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1300) - Number(FY1100)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1300) - Number(SY1100)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1300) - Number(TY1100)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'C3'}>
            <StyledTableCell component="th" scope="row">
            Величина функционирующего капитала
            </StyledTableCell>
            <StyledTableCell align="right">{'c1300 + c1400 - c1100 (BФ)'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1300) + Number(FY1400) - Number(FY1100)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1300) + Number(SY1400) - Number(SY1100)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1300) + Number(TY1400) - Number(TY1100)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'C4'}>
            <StyledTableCell component="th" scope="row">
            Величина источников финансирования
            </StyledTableCell>
            <StyledTableCell align="right">{'c1300 + c1400 + c1500 - c1100 (BИ)'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1300) + Number(FY1400) + Number(FY1500) - Number(FY1100)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1300) + Number(SY1400) + Number(SY1500) - Number(SY1100)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1300) + Number(TY1400) + Number(TY1500) - Number(TY1100)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'D0'}>
            <StyledTableCell component="th" scope="row">
            <b>Недостаток или излишек средств</b>
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'D1'}>
            <StyledTableCell component="th" scope="row">
            НИВС
            </StyledTableCell>
            <StyledTableCell align="right">{'НИВС = ВС - ВЗ'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1300) - Number(FY1100) - Number(FY1210)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1300) - Number(SY1100) - Number(SY1210)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1300) - Number(TY1100) - Number(TY1210)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'D1'}>
            <StyledTableCell component="th" scope="row">
            НИВФ
            </StyledTableCell>
            <StyledTableCell align="right">{'НИВФ = ВФ - ВЗ'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1300) + Number(FY1400) - Number(FY1100) - Number(FY1210)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1300) + Number(SY1400) - Number(SY1100) - Number(SY1210)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1300) + Number(TY1400) - Number(TY1100) - Number(TY1210)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'D1'}>
            <StyledTableCell component="th" scope="row">
            НИВИ
            </StyledTableCell>
            <StyledTableCell align="right">{'НИВИ = ВИ - ВЗ'}</StyledTableCell>
              <StyledTableCell align="right">{Number(FY1300) + Number(FY1400) + Number(FY1500) - Number(FY1100) - Number(FY1210)}</StyledTableCell>
              <StyledTableCell align="right">{Number(SY1300) + Number(SY1400) + Number(SY1500) - Number(SY1100) - Number(SY1210)}</StyledTableCell>
              <StyledTableCell align="right">{Number(TY1300) + Number(TY1400) + Number(TY1500) - Number(TY1100) - Number(TY1210)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'E0'}>
            <StyledTableCell component="th" scope="row">
            <b>Анализ финансовой устойчивости</b>
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E1'}>
            <StyledTableCell component="th" scope="row">
            Коэф.автономии
            </StyledTableCell>
            <StyledTableCell align="right">{'c1300 / c1700'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY1300) / Number(FY1700)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY1300) / Number(SY1700)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY1300) / Number(TY1700)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E2'}>
            <StyledTableCell component="th" scope="row">
            Коэф.капитализации
            </StyledTableCell>
            <StyledTableCell align="right">{'c1500 / c1300'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY1500) / Number(FY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY1500) / Number(SY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY1500) / Number(TY1300)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E3'}>
            <StyledTableCell component="th" scope="row">
            Коэф.обеспеченности собствен.источниками финансирования
            </StyledTableCell>
            <StyledTableCell align="right">{'(c1300 - 1100) / c1200'}</StyledTableCell>
              <StyledTableCell align="right">{((Number(FY1300) - Number(FY1100)) / Number(FY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(SY1300) - Number(SY1100)) / Number(SY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(TY1300) - Number(TY1100)) / Number(TY1200)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E4'}>
            <StyledTableCell component="th" scope="row">
            Коэф.финансирования
            </StyledTableCell>
            <StyledTableCell align="right">{'c1300 / (c1400 + c1500)'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY1300) / (Number(FY1400) + Number(FY1500))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY1300) / (Number(SY1400) + Number(SY1500))).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY1300) / (Number(TY1400) + Number(TY1500))).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'E5'}>
            <StyledTableCell component="th" scope="row">
            Коэф.финансовой устойчивости
            </StyledTableCell>
            <StyledTableCell align="right">{'(c1300 + c1400) / c1700'}</StyledTableCell>
              <StyledTableCell align="right">{((Number(FY1300) + Number(FY1400)) / Number(FY1700)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(SY1300) + Number(SY1400)) / Number(SY1700)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{((Number(TY1300) + Number(TY1400)) / Number(TY1700)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'F0'}>
            <StyledTableCell component="th" scope="row">
            <b>Анализ деловой активности</b>
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F1'}>
            <StyledTableCell component="th" scope="row">
            Коэф.общей оборачиваемости
            </StyledTableCell>
            <StyledTableCell align="right">{'c2110 / c1600'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2110) / Number(FY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2110) / Number(SY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2110) / Number(TY1600)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F2'}>
            <StyledTableCell component="th" scope="row">
            Коэф.оборачиваемости оборотных средств
            </StyledTableCell>
            <StyledTableCell align="right">{'c2110 / c1200'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2110) / Number(FY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2110) / Number(SY1200)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2110) / Number(TY1200)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F3'}>
            <StyledTableCell component="th" scope="row">
            Фондоотдача
            </StyledTableCell>
            <StyledTableCell align="right">{'c2110 / c1150'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2110) / Number(FY1150)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2110) / Number(SY1150)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2110) / Number(TY1150)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F4'}>
            <StyledTableCell component="th" scope="row">
            Коэф.отдачи собственного капитала
            </StyledTableCell>
            <StyledTableCell align="right">{'c2110 / c1300'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2110) / Number(FY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2110) / Number(SY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2110) / Number(TY1300)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F5'}>
            <StyledTableCell component="th" scope="row">
            Оборачиваемость запасов
            </StyledTableCell>
            <StyledTableCell align="right">{'c1210 / c2110'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY1210) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY1210) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY1210) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F6'}>
            <StyledTableCell component="th" scope="row">
            Оборачиваемость денежных средств
            </StyledTableCell>
            <StyledTableCell align="right">{'c1250 / c2110'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY1250) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY1250) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY1250) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F7'}>
            <StyledTableCell component="th" scope="row">
            Коэф.оборачиваемости дебиторской задолженности
            </StyledTableCell>
            <StyledTableCell align="right">{'c2110 / c1230'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2110) / Number(FY1230)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2110) / Number(SY1230)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2110) / Number(TY1230)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F8'}>
            <StyledTableCell component="th" scope="row">
            Срок погашения дебиторской задолженности
            </StyledTableCell>
            <StyledTableCell align="right">{'c1230 * 365 / c2110'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY1230) * 365 / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY1230) * 365 / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY1230) * 365 / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F9'}>
            <StyledTableCell component="th" scope="row">
            Коэф.оборачиваемости кредиторской задолженности
            </StyledTableCell>
            <StyledTableCell align="right">{'c2110 / c1520'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2110) / Number(FY1520)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2110) / Number(SY1520)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2110) / Number(TY1520)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'F10'}>
            <StyledTableCell component="th" scope="row">
            Срок погашения кредиторской задолженности
            </StyledTableCell>
            <StyledTableCell align="right">{'c1520 * 365 / c2110'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY1520) * 365 / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY1520) * 365 / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY1520) * 365 / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={'G0'}>
            <StyledTableCell component="th" scope="row">
            <b>Анализ рентабельности</b>
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G1'}>
            <StyledTableCell component="th" scope="row">
            Рентабельность продаж
            </StyledTableCell>
            <StyledTableCell align="right">{'c2200 / c2110'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2200) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2200) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2200) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G2'}>
            <StyledTableCell component="th" scope="row">
            Бухгалтерская рентабельность
            </StyledTableCell>
            <StyledTableCell align="right">{'c2300 / c2110'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2300) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2300) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2300) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G3'}>
            <StyledTableCell component="th" scope="row">
            Чистая рентабельность
            </StyledTableCell>
            <StyledTableCell align="right">{'c2400 / c2110'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2400) / Number(FY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2400) / Number(SY2110)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2400) / Number(TY2110)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G4'}>
            <StyledTableCell component="th" scope="row">
            Экономическая рентабельность
            </StyledTableCell>
            <StyledTableCell align="right">{'c2400 / c1600'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2400) / Number(FY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2400) / Number(SY1600)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2400) / Number(TY1600)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G5'}>
            <StyledTableCell component="th" scope="row">
            Рентабельность собственного капитала
            </StyledTableCell>
            <StyledTableCell align="right">{'c2400 / c1300'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2400) / Number(FY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2400) / Number(SY1300)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2400) / Number(TY1300)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key={'G6'}>
            <StyledTableCell component="th" scope="row">
            Затратоотдача
            </StyledTableCell>
            <StyledTableCell align="right">{'c2200 / c2120'}</StyledTableCell>
              <StyledTableCell align="right">{(Number(FY2200) / Number(FY2120)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(SY2200) / Number(SY2120)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="right">{(Number(TY2200) / Number(TY2120)).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}