import React from 'react';
import Image from 'next/image';
import ParallelogramContainer from './ParallelogramContainer';

export default function TeamBanner() {
  return (
    <ParallelogramContainer width="300px" height="300px">
      <div className="d-flex justify-content-center">
        <Image
          src="/592a99a3810f6538b87c.png"
          alt="team_logo"
          width="200px"
          height="200px"
        />
      </div>
    </ParallelogramContainer>
  );
}
