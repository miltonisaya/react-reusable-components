const CustomTableHead = ({columns}) => {
    return (
        <thead>
        <tr>
            {columns.map((col, idx) => (
                <th key={idx}>{col.title}</th>
            ))}
        </tr>
        </thead>);

}

export default CustomTableHead;