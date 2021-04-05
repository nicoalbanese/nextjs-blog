import styles from "../styles/home.module.css"

const SpotifySection = ({ cpData, data }) => {
    return (
        <div>
            <section className={styles.spotifySection}>
                <div id="currently-playing">
                    <h2>Currently Playing</h2>
                    {cpData.is_playing === true && (<>
                        <h3>{cpData.item.name}</h3>
                        <h4>{cpData.item.artists && cpData.item.artists.map(a => <span key={a.id}>{a.name}{", "}</span>)}</h4>
                    </>)}

                </div>
                <div id="top-artists">
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
                </div>
            </section>
        </div>
    )
}

export default SpotifySection
