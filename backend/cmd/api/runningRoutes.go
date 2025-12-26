package main

import (
	"fmt"
	"net/http"

	"github.com/yurikrylov/mykld.ru/backend/db"
)

func (app *application) getRunningRoutesHandler(w http.ResponseWriter, r *http.Request) {
	runningRoutes, err := getAllRoutes(&db.SQLiteRepository{})
	if err != nil {
		http.Error(w, "Unable to fetch running routes", http.StatusInternalServerError)
		return
	}
	fmt.Fprintf(w, "%v\n", runningRoutes)
}

func (app *application) getRunningRouteHandler(w http.ResponseWriter, r *http.Request) {
	id, err := app.readIDParam(r)
	if err != nil {
		http.NotFound(w, r)
		return
	}
	fmt.Fprintf(w, "show the details of running route %d\n", id)
}
