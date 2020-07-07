import React from 'react';

const Casts = ({ casts }) => {
  return (
    <section>
      {casts &&
        casts.length > 0 &&
        casts.map(cast => (
          <div>
            <div>
              <img src={cast.profile_picture} />
            </div>
            <p>{cast.fullname_fa}</p>
          </div>
        ))}
    </section>
  );
};

export default Casts;
