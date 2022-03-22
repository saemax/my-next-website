import Link from 'next/link';
import { CssBaseline, Container, AppBar, Toolbar } from '@mui/material';

const Layout = ({ children }) => {

	return (
		<>
			<CssBaseline />

			<AppBar position="static">
				<Toolbar>
					<h1>My Gatsby Website</h1>

					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</Toolbar>
			</AppBar>

			<Container>{children}</Container>
		</>
	);
};

/*export async function getServerSideProps(context) {

}*/

export default Layout;