export default (req, res) => {
	console.log('query', req.query);
	console.log('method', req.method);
	res.status(200).json({ success: true });

	if (req.method === 'GET') {
		// ...
	}
	else {
		res.status(405);
	}
}