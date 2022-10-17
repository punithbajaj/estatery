import logo from "./logo.svg";
import "./App.css";

const data = [
	{
		location: "Palm Harbour",
		price: 2000,
		address: "2699Green valley, india",
		imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_960_720.jpg",
    type: "Houses",
	},
	{
		location: "Palm Harbour",
		price: 2050,
		address: "2699Green valley, india",
		imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_960_720.jpg",
    type: "Houses",
	},
	{
		location: "Palm Harbour",
		price: 2700,
		address: "2699Green valley, india",
		imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_960_720.jpg",
    type: "Houses",
	},
	{
		location: "Palm Harbour",
		price: 4562,
		address: "2699Green valley, india",
		imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_960_720.jpg",
    type: "Houses",
	},
	{
		location: "Palm Harbour",
		price: 1456,
		address: "2699Green valley, india",
		imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_960_720.jpg",
    type: "Houses",
	},
	{
		location: "Palm Harbour",
		price: 9817,
		address: "2699Green valley, india",
		imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_960_720.jpg",
    type: "Houses",
	},
];

function FilterTile(props) {
	return (
		<div class="col text-start border-end">
			<div style={{opacity: 0.7}}>{props.title}</div>
			<div class="fw-bold">{props.default}</div>
      <input class="input-transperent" type="string" placeholder={props.default}></input>
		</div>
	);
}

function PropertyCard(props) {
	return (
		<div class="col-4">
			<div class="rounded-3 p-0 overflow-hidden bg-white">
				<img class="img-fluid" src={props.imgUrl} />
				<div class="p-1 py-3">
					<div class="row border-bottom m-0 text-start py-2 position-relative">
						<div class="position-absolute" style={{left: "76%"}}>
							<div style={{borderRadius: "50%", border: "solid 1px black", width: "30px", height: "30px", padding: "0 6px"}}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
									<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
								</svg>
							</div>
						</div>
						<div class="fs-4 fw-bold color-voilet">
							${props.price}
							<span class="fw-normal descrip-font ">/month</span>
						</div>
						<div class="fs-5 fw-bold">{props.location}</div>
						<div class="my-1 descrip-font">{props.address}</div>
					</div>
					<div class="row py-2 m-0 pb-0 descrip-font d-flex justify-content-between">
						<div class="col-auto">3 Beds</div>
						<div class="col-auto">2 Bathrooms</div>
						<div class="col-auto">5x7 m2</div>
					</div>
				</div>
			</div>
		</div>
	);
}

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

			<section style={{padding: "0 13vw"}} class="mb-5">
				<div class="mt-3 mt-lg-4 d-flex justify-content-between">
					<h1 class="fw-bold">Search Properties to Rent</h1>
					<form class="d-flex py-2">
						<input class="form-control me-2" type="search" placeholder="Search with search bar" aria-label="Search" />
					</form>
				</div>

				<div class="row card-style p-3 mt-4">
					<FilterTile title="Location" default="New York, USA" />
					<FilterTile title="When" default="Select Move-in date" />
					<FilterTile title="Price" default="$500-$2500" />
					<FilterTile title="Proterty Type" default="Houses" />
					<div class="col-2 align-self-center">
						<button class="btn btn-voilet">Search</button>
					</div>
				</div>

				<div class="row mt-1 g-4 g-lg-5">
					{data.map((item) => (
						<PropertyCard price={item.price} location={item.location} address={item.address} imgUrl={item.imgUrl} />
					))}
				</div>
			</section>
		</div>
	);
}

export default App;
