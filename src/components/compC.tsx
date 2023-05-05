import React, { useContext } from 'react';
import NameAgeContext from '@/context/NameAgeContext';

type contextType = {
	val: {
		name: string;
		age: number;
	};
	changeAge: (age: number) => void;
	changeName: (name: string) => void;
};

const CompC = () => {
	const myVals: contextType = useContext(NameAgeContext);

	const btnClicked = () => {
		myVals.changeAge(myVals.val.age + 1);
	};

	return (
		<div>
			<div>
				My name is: {myVals.val.name} and my age is: {myVals.val.age}
			</div>
			<div>
				<button
					onClick={btnClicked}
					className="bg-blue-500 text-white px-3 py-3 rounded-lg"
				>
					Increase age
				</button>
			</div>
		</div>
	);
};

export default CompC;
