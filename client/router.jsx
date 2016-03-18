const {Router, Route, Rederict} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

if (Meteor.isClient) {
	Meteor.startup(function() {
		Session.setDefault('count', 0);
	  	let AppRoutes = (
	    <Router history= {history}>
	      <Route component={App}>
					<Router component={LiteraryTrail} path="literaryTrail/:id" />
					<Router component={LiteraryTrails} path="literaryTrails" />
					<Router component={MobileMap} path="/" />
					<Router component={Profile} path="profile" />
					<Router component={LiteraryTrailMap} path="literaryTrail/map/:id" />
	      </Route>
	    </Router>
	  )
	  ReactDOM.render(AppRoutes, document.getElementById("render-target"));
	})
}
