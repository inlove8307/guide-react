export default (props) => {
	return (
		<main className="ux-main">
			<section className="ux-pages">
				{props.children}
			</section>
		</main>
	);
};