import { getVenueData } from "@/libs/client";
import Build from "./components/section/Build";
import Contact from "./components/section/Contact";
import FirstView from "./components/section/FirstView";
import Footer from "./components/section/Footer";
import GetLayout from "./components/section/GetLayout";
import Search from "./components/section/Search";
import Venue from "./components/section/Venue";
import Manual from "./components/section/Manual";

export type Data = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    venueName: string,
    hallName: string,
    area: {
      id: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      revisedAt: string,
      area: string,
    },
    capacity: number,
    outerThumbnail: string,
    address: string,
    mapsrc: string,
    access: string,
    squareMetre: number,
    venueData: {
      id: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      revisedAt: string,
      venueName: string,
      venueId: {
          id: string
      },
      estimateFile1: string
    },
    website: string,
}

export default async function Home() {
  
  const data = await getVenueData(600);

  return (
    <>
      <FirstView data={data}/>
      <Venue data={data}/>
      <Search/>
      <div className="bg-slate-100">
        <GetLayout/>
      </div>
        <Build/>
        <Manual/>
        <Contact data={data}/>
      <Footer/>
    </>
  );
}
