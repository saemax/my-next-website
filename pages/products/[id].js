import { useRouter } from 'next/router';

const Product = () => {
	const { query } = useRouter();

	/*useEffect(() => {
		fetch(`/api/products/${query.id}`);
	}, []);*/
	console.log('query', query);

	return (
		<h1>Product</h1>
	);
};

export default Product;