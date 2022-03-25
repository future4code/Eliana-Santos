import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getAllUser } from '../../services/user';

 function createData(id, firstName, lastName, participation) {
  return { id, firstName, lastName, participation };
} 

/*  const rows = [
  createData(1, 'Ana', 'Santos', 6),
  createData(2, 'Luna', 'Deus', 10),
  createData(3, 'Haryel', 'Fernandes', 20),
  createData(4, 'Marcia', 'Deus', 55),
  createData(5, 'Joana', 'Silva', 25)
];  */

const users = () => {
  createData(getAllUser())
}
export default function DenseTable() {



  return (
    <TableContainer>
      <Table sx={{ width: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ fontWeight: 'bold' }}>
          <TableRow sx={{
            border: 1,
            borderColor: '#D3D3D3'

          }}
          >
            <TableCell sx={{
              borderRight: 1,
              borderColor: '#D3D3D3'
            }}
              align="center"></TableCell>
            <TableCell sx={{
              borderRight: 1,
              borderColor: '#D3D3D3',
              fontWeight: 'bold',
              color: '#808080'

            }}
              align="left">First Name</TableCell>
            <TableCell sx={{
              borderRight: 1,
              borderColor: '#D3D3D3',
              fontWeight: 'bold',
              color: '#808080'

            }}
              align="leftu">Last Name</TableCell>
            <TableCell sx={{
              borderRight: 1,
              borderColor: '#D3D3D3',
              fontWeight: 'bold',
              color: '#808080'
            }}
              align="center">Participation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.user}
              sx={{
                border: 1,
                borderColor: '#D3D3D3',
                color: '#808080'

              }}
            >
              <TableCell sx={{
                borderRight: 1,
                borderColor: '#D3D3D3',
                width: '5px',
                color: '#808080'

              }}
                align="center">{user.id}</TableCell>
              <TableCell sx={{
                borderRight: 1,
                borderColor: '#D3D3D3',
                color: '#808080'

              }}
                align="left">{user.firstName}</TableCell>
              <TableCell sx={{
                borderRight: 1,
                borderColor: '#D3D3D3',
                color: '#808080'

              }}
                align="left">{user.lastName}</TableCell>
              <TableCell sx={{
                borderRight: 1,
                borderColor: '#D3D3D3',
                width: 2,
                color: '#808080'

              }}
                align="center">{`${user.participation}%`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
