import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/random-character`, fetcher);

  if (error) {
    return "Error";
  }

  if (isLoading) {
    return "is loading...";
  }

  const { id, firstName, lastName, age, profession, twitterName, geoHash } =
    data;

  return (
    <div>
      <h1>{id}</h1>
      <p>Name: {`${firstName} ${lastName}`}</p>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
      <p>Twitter: {twitterName}</p>
      <p>GeoHash: {geoHash}</p>
    </div>
  );
}
