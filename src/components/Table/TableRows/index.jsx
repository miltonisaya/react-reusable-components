import Button from "../../Button";

const CustomTableRow = ({columns, row, children}) => {
    const dynamicRender = (row, column) => {
        if (column === "actions") {
            return children(row, column)
        } else {
            return row[column.value]
        }
    }
    return (
        <>
        <tbody>
        <tr>
            {columns.map((col, idx) => <td key={idx}>{dynamicRender(row, col)}</td>)}
        </tr>
        </tbody>
        </>
    );

}

export default CustomTableRow;