import loadingAnimetion from "../loading/loading.json.json";
import Loading from "../Components/Loading.jsx";
const SuspenseContent = () => {
  return (
    <div className="w-full h-screen text-gray-300 bg-base-100">
      <div className="flex items-center justify-center h-full">
        <Loading animetion={loadingAnimetion} />
      </div>
    </div>
  );
};

export default SuspenseContent;
