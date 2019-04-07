import React from 'react';

//no state, no methods => stateless functional component
//react passes props as argument at runtime
//also, destructuring!
const Navbar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand mb-0 h1">Total Counters:
				<span className="badge badge-pill badge-secondary m-2">
					{totalCounters}
				</span>
			</span>
		</nav>
	);
};

export default Navbar;