import React from "react";
import { useNearContext } from "../context/nearContext";

export default function LoginButton() {
	const { modal, accountId, wallet } = useNearContext();
	const handleSignOut = async () => {
		const wallet = await selector.wallet();

		wallet.signOut().catch((err) => {
			console.log("Failed to sign out");
			console.error(err);
		});
	};
	if (accountId) {
		return (
			<button className="login-btn" onClick={handleSignOut}>
				Logout
			</button>
		);
	} else {
		return (
			<button className="login-btn" onClick={() => modal.show()}>
				Connect Wallet
			</button>
		);
	}
}
