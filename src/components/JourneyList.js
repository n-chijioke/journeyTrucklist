import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
//import TablePagination from '@mui/material/TablePagination';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Claritae from "./images/Claritae.jpg"
import { Icon } from '@mui/material';
//import { Pages } from '@mui/icons-material';

function createData(REGISTRATION_NUMBER, TRANSPORTER, LOG_ON_NUMBER, STATUS) {
  return {
    REGISTRATION_NUMBER,
    TRANSPORTER,
    LOG_ON_NUMBER,
    STATUS,
    truck_information: [
      {
        Violations: '10',
        Repairs: '6',
        Sabotage: 3,
        Inspections: '20',
        Replacement: '5',
        Refil: '5',
      },
    ],
  };
}

function Row(props) {
  //const [page, setPage] = React.useState(0);
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);


  return (
    <React.Fragment margin-bottom="10px">
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.REGISTRATION_NUMBER}</TableCell>
        <TableCell align="left">{row.TRANSPORTER}</TableCell>
        <TableCell align="left">{row.LOG_ON_NUMBER}</TableCell>
        <TableCell align="left">{row.STATUS}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Truck Information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Violations</TableCell>
                    <TableCell>Repairs</TableCell>
                    <TableCell>Sabotage</TableCell>
                    <TableCell>Inspections</TableCell>
                    <TableCell>Replacement</TableCell>
                    <TableCell>Refil</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                   
                  {row.truck_information.map((truck_informationRow) => (
                    <TableRow key={truck_informationRow.Violations}>
                      <TableCell component="th" scope="row">
                        {truck_informationRow.Violations}
                      </TableCell>
                      <TableCell>{truck_informationRow.Repairs}</TableCell>
                      <TableCell>{truck_informationRow.Sabotage}</TableCell>
                      <TableCell>
                        {truck_informationRow.Inspections}
                      </TableCell>
                      <TableCell>{truck_informationRow.Replacement}</TableCell>
                      <TableCell>{truck_informationRow.Refil}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    REGISTRATION_NUMBER: PropTypes.number.isRequired,
    TRANSPORTER: PropTypes.number.isRequired,
    LOG_ON_NUMBER: PropTypes.number.isRequired,
    truck_information: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('ABE264X4', <Icon src={Claritae} alt="Claritae Ltd."/>, 71174785, 'Running'),
  createData('ABE264X4', <Icon src={Claritae} alt="Claritae Ltd."/>, 71174785, 'Un-loading'),
  createData('ABE264X4', <Icon src={Claritae} alt="Claritae Ltd."/>, 71174785, 'Running'),
  
];

export default function CollapsibleTable() {
// const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <TableContainer component={Paper}>
      {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={Page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>REGISTRATION_NUMBER</TableCell>
            <TableCell>TRANSPORTER</TableCell>
            <TableCell align="right">LOG_ON_NUMBER</TableCell>
            <TableCell align="right">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.REGISTRATION_NUMBER} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
