import { useEffect } from 'react';
import Table from './Table';
import { useAtom } from 'jotai';
import { dataAtom, displayCountAtom, incrementCountAtom, resetCountAtom } from './jotai/store';
import { useSelector, useDispatch } from 'react-redux';
import { incrementDisplayCount, resetDisplayCount, setData } from './rtk/mainSlice';

function App() {
	const data = useSelector((state) => state.main.data)
	const displayCount = useSelector((state) => state.main.displayCount)
	const dispatch = useDispatch()

	function reset() {
		dispatch(resetDisplayCount())
		dispatch(incrementDisplayCount());
	}

	useEffect(() => {
		dispatch(resetDisplayCount())
		fetch('/MOCK_DATA.json')
			.then((res) => res.json())
			.then((data) => dispatch(setData(data)));
		dispatch(incrementDisplayCount());
	}, []);

	return (
		<main>
			<a href="/">Back</a>
			List of people to hack:
			{displayCount}
			<Table data={data} displayCount={displayCount} />
			{displayCount < 100 ? (
				<button
					onClick={() => {
						dispatch(incrementDisplayCount());
					}}
				>
					Load More
				</button>
			) : (
				<button onClick={() => reset()}>Reset</button>
			)}
		</main>
	);
}

export default App;
