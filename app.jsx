function Hero(props) {
	console.log(props);
	
	return (
		<div className="container">
			<img src={props.imageUrl} />
			<h1>{props.title}</h1>
			<p>{props.subtitle}</p>
		</div>
	)
}

ReactDOM.render(
	<div>
		<Hero title="React"
			subtitle="UI library"
			imageUrl="img/react.png" />
		<Hero title="Angular"
			subtitle="One framework. Mobile & desktop."
			imageUrl="img/angular.png" />
	</div>,
document.getElementById('root'));
