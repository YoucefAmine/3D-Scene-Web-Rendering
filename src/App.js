import './app.css';
import SceneOne from './components/sceneOne/SceneOne';
import SceneTwo from './components/sceneTwo/SceneTwo';

function App() {
	// const [overlay, setOverlay] = useState(false);
	// const darkTheme =
	// 	localStorage.length === 0
	// 		? false
	// 		: localStorage.getItem('dark') === 'true'
	// 		? true
	// 		: false;
	// const [dark, setDark] = useState(darkTheme);

	return (
		<div className='app'>
			<div className='sections'>
				<SceneOne />
				<SceneTwo />
			</div>
		</div>
	);
}

export default App;
