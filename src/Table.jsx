import TableRow from './TableRow';

function Table({ data, displayCount }) {
	return (
		<table>
			<thead>
				<tr>
					<th className="name">Name</th>
					<th className="email">Email</th>
					<th className="ip">IP_Address</th>
				</tr>
			</thead>
			<tbody>
				{data &&
					data.slice(0, displayCount).map((data) => {
						return (
							<TableRow
								first_name={data.first_name}
								last_name={data.last_name}
								email={data.email}
								ip_address={data.ip_address}
								key={data.id}
							/>
						);
					})}
			</tbody>
		</table>
	);
}

export default Table;
