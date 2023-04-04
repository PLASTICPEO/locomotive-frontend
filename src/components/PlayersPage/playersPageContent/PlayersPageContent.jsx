import style from "./PlayersPageContent.module.css";
const PlayersPageContent = () => {
  return (
    <div className={style.explorePlayerContainer}>
      <h1 className={style.titleExplore}>Explore Player</h1>
      <div>
        <button className={style.addUserBtn}>+ Add Player</button>
        <input
          type="search"
          className={style.searchInput}
          placeholder={"Search Players ..."}
        />
      </div>
      <h1 className={style.titlePlayerList}>Players List</h1>
    </div>
  );
};

export default PlayersPageContent;
