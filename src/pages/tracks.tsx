import React from "react";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { Track } from "../__generated__/graphql";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACKS);

  const tracksFormHome = data?.tracksForHome || [];

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {tracksFormHome?.map((track: Omit<Track, "modules">) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

/** GET_TRACKS query to retrieve all tracks */
const GET_TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

export default Tracks;
