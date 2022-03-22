import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
 const Table = () => {
    return (
        <Table>

            <Box>
                <div style={{ height: 550, width: 'auto' }}>
                    <DataGrid

                        columns={columns}
                        rows={people}
                        checkboxSelection={false}
                        onSelectionModelChange={(id) => onSelectedPerson(id)}
                    />
                </div>
            </Box>
        </Table>
    )
}
export default Table;