import "./App.css";
import MainSection from "./main";

function App() {
	return (
		<div className="App">
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
			<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
			<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid px-5 py-3">
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<a class="navbar-brand fw-bold" href="#">
						Estatery
					</a>
					<div class="collapse navbar-collapse fw-bold" id="navbarToggler">
						<ul class="navbar-nav me-auto ms-3 mb-2 mb-lg-0 d-flex" style={{gap: "25px"}}>
							<li class="nav-item">
								<a class="nav-link px-3 active" aria-current="page" href="#">
									Rent
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link px-3" href="#">
									Buy
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link px-3" href="#">
									Sell
								</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Manage Property
								</a>
								<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
									<li>
										<a class="dropdown-item" href="#">
											Dropdown 1
										</a>
									</li>
									<li>
										<a class="dropdown-item" href="#">
											Dropdown 2
										</a>
									</li>
									<li>
										<a class="dropdown-item" href="#">
											Dropdown 3
										</a>
									</li>
								</ul>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Resources
								</a>
								<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
									<li>
										<a class="dropdown-item" href="#">
											Dropdown 1
										</a>
									</li>
									<li>
										<a class="dropdown-item" href="#">
											Dropdown 2
										</a>
									</li>
									<li>
										<a class="dropdown-item" href="#">
											Dropdown 3
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<div class="d-flex">
							<button class="btn me-2" type="submit" style={{color: "rgb(112, 101, 239)", borderColor: "rgb(112, 101, 239)", border: "solid 1px"}}>
								Login
							</button>
							<button class="btn btn-voilet" type="submit">
								Signup
							</button>
						</div>
					</div>
				</div>
			</nav>

			<MainSection />
		</div>
	);
}

export default App;
