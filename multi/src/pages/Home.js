const Home = () => {
  return (
      <>
      <div className="withHomeImage">
        <div className="row">
            <div>
              <span className="hide-mobile" style={{width: '100vw'}}>
                <br /><br /><br /><br />
                <div className="transbox" style={{padding: '2em 1em'}}>
                  <h1 className="pageHeader white-text transboxText" style={{textAlign: 'center'}}> Welcome to a nerdy page all about dragons!!! </h1>
                  <h2 className="white-text transboxText" style={{textAlign: 'center'}}> I am your nerdy assistant. I have information on <br /> a variety of dragons from 3 different fantasy worlds. </h2>
                  <h2 className="white-text transboxText" style={{textAlign: 'center'}}>Which world's dragons would you like to learn more <br /> about? Pick from the 3 images below: </h2>
                </div>
              </span>
            </div>
        </div>
        
        <div className="hide-mobile">
        </div>
        <div className="show-mobile" style={{padding: '1em'}}>
          <h1>Welcome to a nerdy page all about dragons!!!</h1>
        </div>
        <div className="show-mobile" style={{padding: '1em'}}>
          <h1>I am your nerdy assistant. I have information on a variety of dragons from 3 different fantasy worlds. </h1>
        </div>
        <div className="show-mobile" style={{padding: '1em'}}>
          <h1>Which world's dragons would you like to learn more about? Pick from the 3 images below: </h1>
        </div>
        <br />
        
        <div className="flexBox normal-div">
          <div className="imageFlexBox normal-div">
            <div className="imgTitle normal-div">
              <strong className="lower-transbox">Blizzard's World of Warcraft (WoW) </strong><br />
              <a href="/blogs">
                <img className="normal-image" alt="WoW dragons" src="world-of-warcraft-dragonflight_ULmcXlO.jpg" title="https://wowpedia.fandom.com/wiki/Alexstrasza" />
              </a>
            </div>
          </div>
          <div className="imageFlexBox normal-div">
            <div className="imgTitle normal-div">
              <strong className="lower-transbox">Wizards of the Coast's Forgotten Realms (DnD) </strong><br />
              <a href="/blogs">
                <img className="normal-image" alt="DnD dragons" src="dungeons-dragons-illustration.jpg" title="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dndbeyond.com%2Fforums%2Fd-d-beyond-general%2Fplay-by-post%2F85909-the-dragons-of-icespire-peak&psig=AOvVaw1oc_Uz-CQ5tuc3urhffru8&ust=1663806602441000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMi4nuTQpPoCFQAAAAAdAAAAABAR" />
              </a>
            </div>    
          </div>
          <div className="imageFlexBox normal-div">
            <div className="imgTitle normal-div">
              <strong className="lower-transbox">Riot's League of Legends (Runeterra) </strong><br />
              <a href="/blogs">
                <img className="normal-image" alt="LoL dragons" src="Swain_DragonMasterSkin.png" title="https://www.google.com/url?sa=i&url=https%3A%2F%2Flolskinshop.com%2Fproduct%2Fdragon-master-swain%2F&psig=AOvVaw3GGEOPgGAXURdv15tih3pN&ust=1663806409056000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCODauYPQpPoCFQAAAAAdAAAAABAD" />
              </a>
            </div>
          </div>
        </div>
      </div>
        </>
);
};

export default Home;