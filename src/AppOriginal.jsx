import { useState, useEffect } from 'react';
import Table from './Table';

function App() {
	const [data, setData] = useState();
	const [displayCount, setDisplayCount] = useState(0);

	useEffect(() => {
		fetch('/MOCK_DATA.json')
			.then((res) => res.json())
			.then((data) => setData(data));
		setDisplayCount(5);
	}, []);
	// console.log(displayCount)

	return (
		<main>
			List of people to hack:
			<Table data={data} displayCount={displayCount} />
			<button>Load More</button>
		</main>
	);
}

export default App;
