import Vehicle from "../Components/Vehicle"
import VehicleDetails from "../Components/VehicleDetails"
export default function Wishlist({ carManager }) {
    const {
        changeOrder,
        toggleFavorite,
        showVehicleDetails,
        setSelectedVehicleId, getFavoritedVehicles,
        priceRange,
        vehiclesData,
        selectedBrands,
        order,
        evRange,
        selectedVehicleId
    } = carManager
    console.log('Rendering Wishlist')
    const favoriteVehicles = getFavoritedVehicles()
    return (
        <>
            <div className="favorite-vehicles">
                {favoriteVehicles.map(vehicle => <Vehicle key={vehicle.id} id={vehicle.id} data={vehicle}
                    showVehicleDetails={() => showVehicleDetails(vehicle.id)}
                    toggleFavorite={toggleFavorite} />)}
            </div>
            {selectedVehicleId !== -1 ?
                <VehicleDetails vehicle={vehiclesData.find(v => v.id === selectedVehicleId)} close={() => setSelectedVehicleId(-1)}
                /> : ""}
        </>
    )
}