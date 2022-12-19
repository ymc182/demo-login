import LoginButton from "./components/LoginButton";
import { useNearContext } from "./context/nearContext";
import "./styles/home.css";

function App() {
	const { accountId } = useNearContext();
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					padding: "1rem",
				}}
			>
				<LoginButton />
			</div>
			<div className="main-title">Web3Mon</div>
			{accountId ? (
				<main>Welcome ! {accountId}</main>
			) : (
				<main>
					<h2>Welcome! Please Connect your wallet to start playing!</h2>
				</main>
			)}
		</div>
	);
}

export default App;
