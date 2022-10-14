import React from "react";
import axios from "axios";

class App extends React.Component {
	state = {
		details: [],
		model: "",
		engine: "",
		description: "",
		specs: "",
	};

	componentDidMount() {
		let data;

		axios
			.get("http://127.0.0.1:8000/api/cars/")
			.then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
	}

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8000/api/cars/", {
				model: this.state.model,
				engine: this.state.engine,
				description: this.state.description,
				specs: this.state.specs,
			})
			.then((res) => {
				this.setState({
					model: "",
					engine: "",
					description: "",
					specs: "",
				});
			})
			.catch((err) => {});



		let data;

		axios
			.get("http://127.0.0.1:8000/api/cars/")
			.then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
	};

	render() {
		return (
			<div className="container jumbotron ">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text"
								id="basic-addon1">
								{" "}
								Model{" "}
							</span>
						</div>
						<input type="text" className="form-control"
							placeholder="Car Model"
							aria-label="Car Model"
							aria-describedby="basic-addon1"
							value={this.state.model} name="model"
							onChange={this.handleInput} />
					</div>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">
							Engine
							</span>
						</div>
						<textarea className="form-control "
								aria-label="With textarea"
								placeholder="Car Engine"
								value={this.state.engine} name="engine"
								onChange={this.handleInput}>
						</textarea>
					</div>


					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">
							Description
							</span>
						</div>
						<textarea className="form-control "
								aria-label="With textarea"
								placeholder="Car Description"
								value={this.state.description} name="description"
								onChange={this.handleInput}>
						</textarea>
					</div>


					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">
							Specs
							</span>
						</div>
						<textarea className="form-control "
								aria-label="With textarea"
								placeholder="Car Specs"
								value={this.state.specs} name="specs"
								onChange={this.handleInput}>
						</textarea>
					</div>

					<button type="submit" className="btn btn-primary mb-5">
						Submit
					</button>
				</form>

				<hr
					style={{
						color: "#000000",
						backgroundColor: "#000000",
						height: 0.5,
						borderColor: "#000000",
					}}
				/>

				{this.state.details.map((detail, id) => (
					<div key={id}>
							<div className="card-body">
									<h1> {detail.detail} </h1>
									<footer className="blockquote-footer">
										{" "}
										<cite title="Source Title">{detail.model}</cite>
									</footer>
							</div>
						<span className="border border-primary "></span>
					</div>
				))}
			</div>
		);
	}
}
export default App;