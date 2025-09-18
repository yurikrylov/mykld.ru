package main

import (
	"fmt"
	"net/http"

	"github.com/yurikrylov/mykld.ru/server/db"
)

func (app *application) getRunningRoutesHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "get filtered routes")
	repo := db.NewSQLiteRepository()
	defer repo.Close()
	allroutes, err := repo.GetAllRoutes()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	_ = allroutes
}

func (app *application) getRunningRouteHandler(w http.ResponseWriter, r *http.Request) {
	id, err := app.readIDParam(r)
	if err != nil {
		http.NotFound(w, r)
		return
	}
	fmt.Fprintf(w, "show the details of running route %d\n", id)
}
