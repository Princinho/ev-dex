import React from 'react';
import VehicleDetails from '../Components/VehicleDetails';
import { Catalog } from "../Components/Catalog"
export default function Home({carManager}) {
    const {
        changeOrder,
        toggleFavorite,
        showVehicleDetails,
        setSelectedVehicleId,
        priceRange,
        vehiclesData,
        selectedBrands,
        order,
        evRange,
        selectedVehicleId
    } = carManager
    
    return (
        <>
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