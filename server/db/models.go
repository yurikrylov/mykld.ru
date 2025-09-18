package db

type RunningRoute struct {
	ID               int
	Name             string
	Distance         int
	Trafficlights_id int
	Description      string
	Picture          string
}

type Landmarks struct {
	ID          int
	Name        string
	Description string
}

type Districts struct {
	ID          int
	Name        string
	Description string
}
type LandmarksOnRoute struct {
	ID          int
	Route_id    int
	Landmark_id int
}

type RouteInDistricts struct {
	ID          int
	Route_id    int
	District_id int
}
