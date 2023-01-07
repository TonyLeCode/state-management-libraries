import { useEffect } from 'react';
import Table from './Table';
import useStoreZustand from './zustand/store';

function App() {
	const data = useStoreZustand((state) => state.data);
	const displayCount = useStoreZustand((state) => state.displayCount);
	const increaseCount = useStoreZustand((state) => state.increaseCount);
	const resetCount = useStoreZustand((state) => state.resetCount);
	const setData = useStoreZustand((state) => state.setData);

	function reset() {
		resetCount();
		increaseCount();
	}

	useEffect(() => {
		resetCount();
		fetch('/MOCK_DATA.json')
			.then((res) => res.json())
			.then((data) => setData(data));
		increaseCount();
	}, []);
	// console.log(displayCount)

	return (
		<main>
			<a href="/">Back</a>
			List of people to hack:
			{displayCount}
			<Table data={data} displayCount={displayCount} />
			{displayCount < 100 ? (
				<button onClick={increaseCount}>Load More</button>
			) : (
				<button onClick={() => reset()}>Reset</button>
			)}
		</main>
	);
}

export default App;
