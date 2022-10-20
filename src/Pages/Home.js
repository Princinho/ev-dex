import Header from '../Components/Header';
import Sidebar from "../Components/Sidebar"
import VehicleDetails from '../Components/VehicleDetails';
import { Catalog, NAME, RANGE, PRICE } from "../Components/Catalog"
import React from 'react';
const url = './EVdata.json'
const LOCAL_STORAGE_KEY = "evDexFavorites"
export default function Home() {
    const [priceRange, setPriceRange] = React.useState({ min: 10000, max: 100000 })
    const [vehiclesData, setVehiclesData] = React.useState([])
    const [selectedBrands, setSelectedBrands] = React.useState([])
    const [order, setOrder] = React.useState(NAME)
    const [evRange, setEvRange] = React.useState({ min: 0, max: 2000 })
    const [selectedVehicleId, setSelectedVehicleId] = React.useState(-1)
    const [favorites, setFavorites] = React.useState([])
    React.useEffect(
        () => {
            let vehicles = []
            if (vehiclesData.length == 0) {
                fetch(url, { mode: 'no-cors' }).then(res => res.json()).then(data => {
                    vehicles = data.map(vehicle => { return { ...vehicle, isFavorite: favorites.some(f => f == vehicle.id) } })
                    setVehiclesData(vehicles)
                })
            } else {
                setVehiclesData(prevData => prevData.map(vehicle => { return { ...vehicle, isFavorite: favorites.some(f => f == vehicle.id) } }))
            }


        }, [favorites]
    )
    console.log("Rendering app")
    React.useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
            setFavorites(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
        }
    }, [])
    React.useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
        }

    }, [favorites])
    const brands = vehiclesData.reduce((prevBrands, currentVehicle) => {
        const newBrand = prevBrands.some(b => b === currentVehicle.brand) ? null : currentVehicle.brand
        return newBrand ? [...prevBrands, newBrand] : prevBrands
    }, [])
    brands.sort()
    function updatePrice(min, max) {
        setPriceRange({ min: min, max: max })
        setOrder(PRICE)
    }
    function updateRange(min, max) {
        setEvRange({ min: min, max: max })
        setOrder(RANGE)
    }
    function updateBrands(updatedBrands) {
        setSelectedBrands(updatedBrands)
    }
    function showVehicleDetails(id) {
        setSelectedVehicleId(id)
    }
    function toggleFavorite(id) {
        if (favorites.some(fav => fav == id)) setFavorites(prev => prev.filter(fav => fav != id))
        else
            setFavorites(prev => [...prev, id])
    }
    function changeOrder(order) {
        setOrder(order)
    }
    return (
        <>
            <Sidebar searchSettings={{
                minPrice: priceRange.min, maxPrice: priceRange.max, lowPriceLimit: 10000, highPriceLimit: 300000,
                minRange: 200,
                maxRange: 500,
                lowRangeLimit: 0,
                highRangeLimit: 1000,
                brands: brands,
                updateBrands: updateBrands
            }}
                updatePrice={updatePrice}
                updateRange={updateRange} />
            <Catalog min={priceRange.min} max={priceRange.max} order={order}
                minRange={evRange.min}
                maxRange={evRange.max}
                brands={selectedBrands} vehiclesData={vehiclesData}
                changeOrder={changeOrder}
                showVehicleDetails={showVehicleDetails}
                toggleFavorite={(id) => { toggleFavorite(id) }}
            />

            {selectedVehicleId !== -1 ?
                <VehicleDetails vehicle={vehiclesData.find(v => v.id === selectedVehicleId)} close={() => setSelectedVehicleId(-1)}
                /> : ""}
        </>
    );
}