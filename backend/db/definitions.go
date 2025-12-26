package db

import "errors"

const dbName = "mykld.db"

var (
	ErrDuplicate    = errors.New("record already exists")
	ErrNotExists    = errors.New("row not exists")
	ErrUpdateFailed = errors.New("update failed")
	ErrDeleteFailed = errors.New("delete failed")
)

const RunningRoutesTableDefinition = `
CREATE TABLE IF NOT EXISTS runningroutes(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT UNIQUE,
    distance INTEGER,
	trafficlights_id INTEGER,
	description TEXT,
	picture TEXT
);
`
const LandmarksTabelDefinition = `
CREATE TABLE IF NOT EXISTS landmarks(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    priority INTEGER NOT NULL,
    is_done BOOLEAN NOT NULL CHECK (is_done IN (0, 1)),
    project_id INTEGER not null references projects(id)
);
`

const DistrictsTabelDefinition = `
CREATE TABLE IF NOT EXISTS districts(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    description TEXT
);
`
const LandmarksOnRouteTabelDefinition = `
CREATE TABLE IF NOT EXISTS landmarksonroute(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    route_id INTEGER not null references runningroutes(id),
	landmark_id INTEGER not null references landmarks(id)
);
`
const RouteInDistrictsTabelDefinition = `
CREATE TABLE IF NOT EXISTS routeindistrict(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    route_id INTEGER not null references runningroutes(id),
	district_id INTEGER not null references districts(id)
);
`
