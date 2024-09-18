import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}
const PhotoIdPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotoIdPage {id} {photoId}
    </div>
  );
};

export default PhotoIdPage;
