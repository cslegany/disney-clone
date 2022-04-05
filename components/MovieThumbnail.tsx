import Image from "next/image";
import { useRouter } from "next/router";
import { IMG_BASE_URL } from "../utils/requests";

function MovieThumbnail({ result }) {
  const router = useRouter();

  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <Image
        src={
          `${IMG_BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${IMG_BASE_URL}${result.poster_path}`
        }
        width={330} height={210} objectFit="cover" className="rounded-lg"
      />
    </div>
  );
}

export default MovieThumbnail;
