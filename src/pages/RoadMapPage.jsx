import RoadMapBanner from "../components/roadmap/RoadMapBanner"
import RoadMap from "../components/roadmap"
import MobileRoadMap from "../components/roadmap/MobileRoadMap"
import PageWrapper from "../components/shared/PageWrapper"
import useWindowSize from "../hooks/useWindowSize";

const RoadMapPage = () => {
  const {width} = useWindowSize();
  const isMobile = width < 768;

  return (
    <PageWrapper>
        <RoadMapBanner />
        {
            isMobile ? (
                <MobileRoadMap />
            ) : (
                <RoadMap />
            )
        }
    </PageWrapper>
  )
}
export default RoadMapPage
