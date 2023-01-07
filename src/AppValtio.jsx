import { useEffect } from 'react';
import Table from './Table';
import { proxy, useSnapshot } from 'valtio'
import storeValtio, {increaseCount, setData, resetCount} from './valtio/store'

function App() {
	const snap = useSnapshot(storeValtio)

	function reset() {
		resetCount()
		increaseCount();
	}

	useEffect(() => {
		resetCount()
		fetch('/MOCK_DATA.json')
			.then((res) => res.json())
			.then((data) => setData(data));
		increaseCount();
	}, []);

	return (
		<main>
			<a href="/">Back</a>
			List of people to hack:
			{snap.displayCount}
			<Table data={snap.data} displayCount={snap.displayCount} />
			{snap.displayCount < 100 ? (
				<button onClick={increaseCount}>Load More</button>
			) : (
				<button onClick={() => reset()}>Reset</button>
			)}
		</main>
	);
}

export default App;
