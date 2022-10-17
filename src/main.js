import {useState} from "react";
import data from "./data.js";

function FilterMenu(props){
    const [filter, setFilter] = useState({
        location: "",
        date: "",
        range: 0,
        type: "All",
    });
    return (
		<div class="row card-style p-3 mt-4">
			<FilterTile name="location" title="Location" default="New York, USA" setFilter={setFilter} filter={filter} />
			<FilterTile name="date" title="When" default="Select Move-in date" setFilter={setFilter} filter={filter} />
			<FilterTile name="range" title="Price (in $)" default="-" setFilter={setFilter} filter={filter} />
			<FilterTile name="type" title="Proterty Type" default="Houses" options={data.map((item) => item.type)} setFilter={setFilter} filter={filter} />
			<div class="col-2 align-self-center">
				<button class="btn btn-voilet" onClick={()=>props.setFilterKeys(filter)}>Search</button>
			</div>
		</div>
	);
}

function FilterTile(props) {
	var options = Array.from(new Set(props.options))
    options = ["All", ...options];

	return (
		<div class="col text-start border-end">
			<div style={{opacity: 0.7}}>{props.title}</div>
			{/* <div class="fw-bold">{props.default}</div> */}
			{!props.options && <input class="input-transperent fw-bold" type="string" placeholder={props.default} onChange={(e) => props.setFilter({...props.filter, [props.name]: e.target.value})} />}

			{props.options && (
				<div>
					<select class="input-transperent fw-bold" name={props.name} onChange={(e) => props.setFilter({...props.filter, [props.name]: e.target.value})}>
						{options.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>
			)}
		</div>
	);
}

function PropertyCard(props) {
	return (
		<div class="col-4">
			<div class="rounded-3 p-0 overflow-hidden bg-white">
				<img class="img-fluid" src={props.imgUrl} alt="property image" />
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

function MainSection(props) {
	const [filterKeys, setFilterKeys] = useState({
		location: "",
		date: "",
		range: 0,
		type: "All",
	});

	const filteredData = data.filter((item) => (!filterKeys.location || item.address.toLowerCase().includes(filterKeys.location.toLowerCase())) && (!filterKeys.range || item.price <= filterKeys.range) && (filterKeys.type === "All" || item.type === filterKeys.type));

	return (
		<section style={{padding: "0 13vw"}} class="mb-5">
			<div class="mt-3 mt-lg-4 d-flex justify-content-between">
				<h1 class="fw-bold">Search Properties to Rent</h1>
				<form class="d-flex py-2">
					<input class="form-control me-2" type="search" placeholder="Search with search bar" aria-label="Search" />
				</form>
			</div>

            <FilterMenu filterKeys={filterKeys} setFilterKeys={setFilterKeys}/>

			<div class="row mt-1 g-4 g-lg-5">
				{filteredData.map((item, index) => (
					<PropertyCard key={index} price={item.price} location={item.location} address={item.address} imgUrl={item.imgUrl} />
				))}
			</div>
		</section>
	);
}

export default MainSection;