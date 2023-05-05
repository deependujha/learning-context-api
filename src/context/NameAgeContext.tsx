import React, { createContext, useState } from 'react';

let defaultValue = {
	name: 'Deependu Jha',
	age: 20,
};

type NameAgeContextProviderProps = {
	children: React.ReactNode;
};

type contextType = {
	val: {
		name: string;
		age: number;
	};
	changeAge: (age: number) => void;
	changeName: (name: string) => void;
};

const NameAgeContext = createContext({} as contextType);

const NameAgeContextProvider = ({ children }: NameAgeContextProviderProps) => {
	const [val, setVal] = useState(defaultValue);

	const changeName = (name: string) => {
		setVal({ ...val, name });
	};

	const changeAge = (age: number) => {
		setVal({ ...val, age });
	};

	const meow = { val, changeAge, changeName };

	return (
		<NameAgeContext.Provider value={{ val, changeAge, changeName }}>
			{children}
		</NameAgeContext.Provider>
	);
};

export { NameAgeContextProvider };
export default NameAgeContext;
