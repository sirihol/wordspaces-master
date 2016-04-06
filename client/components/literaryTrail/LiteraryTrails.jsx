const {Link} = ReactRouter;

LiteraryTrails = React.createClass({
  render: function() {
    return (
      <div>
        <AppBar pageTitle="Litterære løyper" />
          <div className="content-container">
            <div className='literaryTrailCardContainer'>
             <LiteraryTrailCard
               id='blodigbyhistorie'
               title='Blodig byhistorie'
               author='Jørgen Brekke'
               length='3km'
               numLiteraryPlaces='5'
               readBy='Jørgen Brekke'
               text='Kort intro til den litterære løypen'>
             </LiteraryTrailCard>
             <LiteraryTrailCard
              id='enannenhistorie'
              title='En annen historie'
              author='Forfatter #1, Forfatter #2'
              length='5km'
              numLiteraryPlaces='7'
              readBy='Forfatter #2'
              text='En intro til historien'>
             </LiteraryTrailCard>
            </div>
          </div>
        <BottomNav />
      </div>
    );
  }
})

LiteraryTrailCard = React.createClass({
  getInitialState(){
    return{
        expandDetails: false
      }
  },

  expandDetailsToggle(){
    this.setState({
      expandDetails: !this.state.expandDetails
    });
  },

  render: function() {
    let {title, author, numLiteraryPlaces,length, readBy, text, id} = this.props;
		return (
      <div>
        <div className={this.state.expandDetails ? 'literaryTrailCardExpanded' : 'literaryTrailCard'} onClick={this.expandDetailsToggle}>
          <div className='trailDetails'>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p className={this.state.expandDetails ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} onClick={this.expandDetailsToggle} />
          </div>

            <div className='moreTrailDetails'>
              <p><strong>Antall litterære steder:</strong> {numLiteraryPlaces}</p>
              <p><b>Lengde:</b> {length}</p>
              <p><b>Lest av:</b> {readBy}</p>
              <br/>
              <p>{text}</p>
              <Link to={'/literaryTrail/' + id}>
                <button className='flatbutton'>Start litterær løype</button>
              </Link>
            </div>
        </div>
    </div>
    );
	}
})


LiteraryTrail = React.createClass({
  render:function(){
    const {params} = this.props;
    return(
      <div className='literaryTrail'>
        <AppBarLiteraryTrail trailId={params.id} />
        <div className='literaryPlaces'>
          <LiteraryPlace placeTitle='Intro' placeAdress='Kongens gate 1'> </LiteraryPlace>
          <LiteraryPlace placeTitle='Drapet' placeAdress='Torvet'> </LiteraryPlace>
          <LiteraryPlace placeTitle='Doktor Fredriki' placeAdress='Munkegata 2'> </LiteraryPlace>
          <LiteraryPlace placeTitle='Domen' placeAdress='Kongsgårdsgata 1'> </LiteraryPlace>
          <LiteraryPlace placeTitle='Avslutning' placeAdress='Prinsens gate 9'> </LiteraryPlace>
        </div>
    </div>
    );
  }
})

AppBarLiteraryTrail = React.createClass({
  render:function(){
    return(
      <div className='appBarLiteraryTrail'>
        <Link to={'/literaryTrails'}><p id='chevron-left-icon'className='fa fa-chevron-left' /></Link>
        <Link to={'/literaryTrails'}><p className='previouseSite'>Litterære løyper</p></Link>
        <div className='mapButton'>
          <Link to={'/literaryTrail/map/' + this.props.trailId}><i id='map-icon' className='fa fa-map'></i></Link>
          <p>Kart</p>
        </div>
        <div className='title'>
          <h2>Blodig byhistorie</h2>
          <i>Jørgen Brekke</i>
        </div>
      </div>
    );
  }
})


LiteraryTrailMap = React.createClass({
  render:function(){
    const {params} = this.props;

    return(
      <div>
        <div className='appBarLiteraryTrail mapTrail'>
          <Link to={'/literaryTrails'}><p id='chevron-left-icon'className='fa fa-chevron-left' /></Link>
          <Link to={'/literaryTrails'}><p className='previouseSite'>Litterære løyper</p></Link>
          <div className='mapButton'>
            <Link to={'/literaryTrail/' + params.id}><i id='map-icon' className='fa fa-list'></i></Link>
            <p>Liste</p>
          </div>
            <div className='title'>
              <h2>Blodig byhistorie</h2>
              <i>Jørgen Brekke</i>
            </div>
        </div>
        <Map className='trailMap'/>
      </div>
    );
  }
})
