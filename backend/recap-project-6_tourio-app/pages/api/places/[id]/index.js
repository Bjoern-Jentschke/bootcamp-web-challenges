// import { places } from "../../../../lib/db.js";

import dbConnect from "@/lib/db/connect";
import Place from "@/lib/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }

  if (request.method === "PATCH") {
    const placeData = request.body;
    await Place.findByIdAndUpdate(id, placeData);
    return response.status(200).json({ status: "Place updated" });
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    response.status(200).json({ status: "Successfully deleted" });
  }
}
