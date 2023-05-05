# Context API & UseContext 🚀

> Context API is a way to pass data through the component tree without having to pass props down manually at every level.

- ### context api >>>> redux.

> Context api is built into react, redux is a third party library.

---

## Usage:

- Create a folder called `context` in the `src` folder.

- Create a file called `NameAgeContext.js` in the `context` folder.

```ts
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

// Creating context
const NameAgeContext = createContext({} as contextType);

// Creating context provider
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

```

- Wrap the `App` component with the `NameAgeContextProvider` component in the `index.tsx` file.

```ts
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NameAgeContextProvider } from '@/context/NameAgeContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NameAgeContextProvider>
				<Component {...pageProps} />
			</NameAgeContextProvider>
		</>
	);
}
```

- Use the context in any component.

```ts
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
```