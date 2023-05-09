import './table.css';
import CustomTableHead from "./TableHead";
import CustomTableRow from "./TableRows";


const CustomTable = ({columns, data, children}) => {
    return (
        <table>
            <CustomTableHead columns={columns}/>
            {data && data.map((row, idx) => (
                <CustomTableRow key={row.id} columns={columns} row={row}/>
            ))}
        </table>
    );
}

export default CustomTable;