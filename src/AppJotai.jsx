import { useEffect } from 'react';
import Table from './Table';
import { useAtom } from 'jotai';
import { dataAtom, displayCountAtom, incrementCountAtom, resetCountAtom } from './jotai/store';

function App() {
	const [data, setData] = useAtom(dataAtom);
	const [displayCount, setDisplayCount] = useAtom(displayCountAtom);
	const [, resetCount] = useAtom(resetCountAtom);
	const [, incrementCount] = useAtom(incrementCountAtom);

	function reset() {
		resetCount()
		incrementCount();
	}

	useEffect(() => {
		resetCount()
		fetch('/MOCK_DATA.json')
			.then((res) => res.json())
			.then((data) => setData(data));
			incrementCount();
	}, []);

	return (
		<main>
			<a href="/">Back</a>
			List of people to hack:
			{displayCount}
			<Table data={data} displayCount={displayCount} />
			{displayCount < 100 ? (
				<button onClick={() => {incrementCount();}}>Load More</button>
			) : (
				<button onClick={() => reset()}>Reset</button>
			)}
		</main>
	);
}

export default App;
