// src/components/ServiceAreasMap.tsx

// Map component by 'tonghohin' on GithHub using shadcn/ui components
import {
    Map,
    MapTileLayer,
    MapPolygon,
    MapZoomControl,
} from "@/components/ui/map"
import type { LatLngExpression } from "leaflet"

export default function ServiceAreasMap() {
  const GTABounds = [
    [ 43.6380629, -79.3794823 ],
    [ 43.6683683, -79.2794037 ],
    [ 43.7016369, -79.2313385 ],
    [ 43.7916674, -79.1197586 ],
    [ 43.8412131, -79.2320251 ],
    [ 43.8813149, -79.2141724 ],
    [ 43.9134759, -79.2461014 ],
    [ 43.8907176, -79.3432617 ],
    [ 43.9107553, -79.3731308 ],
    [ 43.9767576, -79.3933868 ],
    [ 44.0816663, -79.4225693 ],
    [ 44.0651401, -79.5108032 ],
    [ 43.95736,   -79.4853973 ],
    [ 43.9406755, -79.5585251 ],
    [ 43.817684,  -79.7260666 ],
    [ 43.756217,  -79.7985077 ],
    [ 43.6917079, -79.8640823 ],
    [ 43.6156967, -79.7621155 ],
    [ 43.5808883, -79.8101807 ],
    [ 43.4745982, -79.6295929 ],
    [ 43.6371933, -79.4548416 ],
    [ 43.6292417, -79.4284058 ],
  ] satisfies LatLngExpression[]

  return (
    <section className="w-full max-w-7xl h-[80vh] max-h-240 shadow-md">
      <Map center={[43.7676229, -79.5204163]} zoom={9.7} className="w-full h-full z-9">
        <MapTileLayer />
        <MapPolygon positions={GTABounds} />
        <MapZoomControl />
      </Map>
    </section>
  );
}