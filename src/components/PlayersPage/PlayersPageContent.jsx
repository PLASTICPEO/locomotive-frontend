import style from "./PlayersPageContent.module.css";
import searchIcon from "../../../public/icons/search-icon.png";

const PlayersPageContent = () => {
  return (
    <div className={style.playerContainer}>
      <h1 className={style.titleExplore}>Explore Player</h1>
      <div>
        <button className={style.addPlayerBtn}>+ Add Player</button>
        <input
          type="search"
          className={style.searchInput}
          placeholder={"Search Players ..."}
          style={{
            backgroundImage: `url(${searchIcon})`,
          }}
        />
      </div>

      <h1 className={style.titlePlayerList}>Players List</h1>
    </div>
  );
};

export default PlayersPageContent;
