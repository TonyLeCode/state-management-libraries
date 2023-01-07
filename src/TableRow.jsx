function TableRow({first_name, last_name, email, ip_address }) {
  return (
    <tr>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{email}</td>
      <td>{ip_address}</td>
    </tr>
  );
}

export default TableRow;