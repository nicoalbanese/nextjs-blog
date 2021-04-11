import styles from "../styles/home.module.css";

import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

const NowPlayingWrapper = styled.div`
  background: #2e4f4f;
  padding: 10px;
  display: flex;
  border-radius: 10px;
  position: relative;

  .trackDetails {
    margin-left: 20px;
  }

  #spotifyLogo {
    position: absolute;
    right: 0;
    transition: 0.3s;

    &:hover {
      opacity: 0.3;
      cursor: pointer;
    }
  }

  h3,
  h4,
  h5 {
    margin: 0;
  }

  h5 {
    /* text-transform: uppercase; */
    font-weight: 400;
  }
  h3 {
    font-size: 1.4rem;
  }

  .trackDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const NotListeningWrapper = styled.div`
  /* background: red; */
  /* padding: 5px; */
`;

const SpotifySection = ({ cpData, data }) => {
  console.log(cpData);
  return (
    <div>
      <section className={styles.spotifySection}>
        <div id='currently-playing'>
          <h2>Currently listening to...</h2>
          {cpData.isPlaying === true ? (
            <NowPlayingWrapper>
              <Link href={cpData.songUrl}>
                <img
                  id='spotifyLogo'
                  src='/images/spotify-logo.png'
                  width={"46px"}
                  height={"28px"}
                />
              </Link>
              <Image
                src={cpData.albumImageUrl}
                height={"100px"}
                width={"100px"}
              />
              <div className='trackDetails'>
                <h5>{cpData.album}</h5>
                <h3>{cpData.title}</h3>
                <h4>{cpData.artist}</h4>
              </div>
            </NowPlayingWrapper>
          ) : (
            <NotListeningWrapper>
              <h3>nothing :(</h3>
            </NotListeningWrapper>
          )}
        </div>
        {/* <div id="top-artists">
                    <h2>Current Top Artists</h2>
                    <div className={styles.topArtistContainer}>
                        {
                            data.items.map(item => {
                                return (<div key={item.id} className={styles.artist}>
                                    <Image src={item.images[0].url} height={100} width={100} />
                                    <p>{item.name}</p>
                                </div>)
                            })
                        }
                    </div>
                </div> */}
      </section>
    </div>
  );
};

export default SpotifySection;
